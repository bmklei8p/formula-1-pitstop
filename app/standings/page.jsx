'use client'
import { useState, useEffect } from "react"
import DriverStandingsTable from "./components/DriverStandingsTable"
import Podium from "./components/Podium"
import ConstructorStandingsTable from "./components/ConstructorStandingsTable"

const StandingsPage = () => {
  const [showDriversStandings, setShowDriversStandings] = useState(true)

  const [ driversStandings, setDriversStandings ] = useState([])
  const [ constructorsStandings, setConstructorsStandings ] = useState([])
  const [ standings, setStandings ] = useState([])
  
  const [ firstPlace, setFirstPlace ] = useState()
  const [ secondPlace, setSecondPlace ] = useState()
  const [ thirdPlace, setThirdPlace ] = useState()

  useEffect(() => {
    const getDriverStandings = async () => {
        const res = await fetch('http://localhost:3000/api/standings/drivers')
        const data = await res.json()
        setDriversStandings(data)
        }
    getDriverStandings();
    }, []);

  useEffect(() => {
    const getConstructorsStandings = async () => {
        const res = await fetch('http://localhost:3000/api/standings/constructors')
        const data = await res.json()
        setConstructorsStandings(data)
        }
    getConstructorsStandings();
    }, []);
  
    useEffect(() => {   
        if (showDriversStandings) {
            setStandings(driversStandings)
            setFirstPlace(standings[0]?.Constructors[0].constructorId)
            setSecondPlace(standings[1]?.Constructors[0].constructorId)
            setThirdPlace(standings[2]?.Constructors[0].constructorId)
        } else {
            setStandings(constructorsStandings)
            setFirstPlace(standings[0]?.Constructor?.name)
            setSecondPlace(standings[1]?.Constructor?.name)
            setThirdPlace(standings[2]?.Constructor?.name)
        }
    }, [showDriversStandings, driversStandings, constructorsStandings])


  return (
    <div className="standings-container">
        <h1 className="standings-page-title">{showDriversStandings ? "Driver Standings": "Constructor Standings"}</h1>
        <div className="titles-block">
            <button className="drivers-title" onClick={() => setShowDriversStandings(true)}>Drivers</button>
            <button className="constructors-title" onClick={() => setShowDriversStandings(false)}>Constructors</button>
        </div>
        <div className="standings-block">
            {showDriversStandings ? 
            <DriverStandingsTable standings={standings} />
            :
            <ConstructorStandingsTable standings={standings} />}   
            <Podium firstPlace={firstPlace} secondPlace={secondPlace} thirdPlace={thirdPlace} />
        </div>
    </div>
  )
}

    // this was needed to remove some error but I am no longer getting that error when I remove it. (table html diff client vs server). keeping incase
//   const [isMounted, setIsMounted] = useState(false);
//   useEffect(() => {
//     setIsMounted(true);
//     return () => {
//       setIsMounted(false);
//     };
//   }, []);

//   if (!isMounted) {
//     return null;
//   }
export default StandingsPage