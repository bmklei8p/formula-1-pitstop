'use client'
import { useState, useEffect } from "react"
import ConstructorPodium from "./components/ConstructorPodium"
import DriverPodium from "./components/DriverPodium"
import DriverStandingsTable from "./components/DriverStandingsTable"
import ConstructorStandingsTable from "./components/ConstructorStandingsTable"

const StandingsPage = () => {
  const [showDriversStandings, setShowDriversStandings] = useState(true)

  const [ driversStandings, setDriversStandings ] = useState([])
  const [ constructorsStandings, setConstructorsStandings ] = useState([])

  // drivers
  const [ firstPlaceD, setFirstPlaceD ] = useState()
  const [ secondPlaceD, setSecondPlaceD ] = useState()
  const [ thirdPlaceD, setThirdPlaceD ] = useState()

// constructors
  const [ firstPlaceC, setFirstPlaceC ] = useState()
  const [ secondPlaceC, setSecondPlaceC ] = useState()
  const [ thirdPlaceC, setThirdPlaceC ] = useState()

  useEffect(() => {
    const getDriverStandings = async () => {
        const res = await fetch('http://localhost:3000/api/standings/drivers')
        const data = await res.json()
        setDriversStandings(data)
        setFirstPlaceD(data[0].Constructors[0]?.constructorId)
        setSecondPlaceD(data[1].Constructors[0]?.constructorId)
        setThirdPlaceD(data[2].Constructors[0]?.constructorId)
        }
    getDriverStandings();
    }, []);

  useEffect(() => {
    const getConstructorsStandings = async () => {
        const res = await fetch('http://localhost:3000/api/standings/constructors')
        const data = await res.json()
        setConstructorsStandings(data)
        setFirstPlaceC(data[0].Constructor?.constructorId)
        setSecondPlaceC(data[1].Constructor?.constructorId)
        setThirdPlaceC(data[2].Constructor?.constructorId)
        }
    getConstructorsStandings();
    }, []);


  return (
    <div className="standings-container">
        <h1 className="hidden text-4xl font-bold mb-4 md:block">{showDriversStandings ? "Drivers Standings": "Constructors Standings"}</h1>
        {/* mobile buttons */}
        <div className="flex justify-center md:hidden">
          <div className="basis-1/2" onClick={() => setShowDriversStandings(true)}>
            <button className={`${showDriversStandings ? `text-2xl border-b-4 w-full border-red-500 rounded` : `text-xl`}`}>Drivers</button>
          </div>
          <div className="basis-1/2" onClick={() => setShowDriversStandings(false)}>
            <button className={`${!showDriversStandings ? `text-2xl border-b-4 w-full border-red-500 rounded` : `text-xl`}`}>Constructors</button>
          </div>
        </div>
        {/* desktop buttons */}
        <div className="hidden justify-center md:flex">
          <div className="basis-1/2" onClick={() => setShowDriversStandings(true)}>
            <button className={`${showDriversStandings ? `text-2xl border-b-4 w-full border-red-500 rounded` : `text-xl`}`} onClick={() => setShowDriversStandings(true)}>Drivers</button>
          </div>
          <div className="basis-1/2" onClick={() => setShowDriversStandings(false)}>
            <button className={`${!showDriversStandings ? `text-2xl border-b-4 w-full border-red-500 rounded` : `text-xl`}`} onClick={() => setShowDriversStandings(false)}>Constructors</button>
          </div>
        </div>
        <div className={`flex flex-col-reverse justify-center ${showDriversStandings ? `md:flex-row md:align-center` : `md:flex-row-reverse md:align-center`}`}>
            {/* show appropriate table based on showDriversStandings */}
            {showDriversStandings ? <DriverStandingsTable standings={driversStandings} /> : <ConstructorStandingsTable standings={constructorsStandings} />}

            {/* show appropriate podium based on showDriversStandings */}
            { firstPlaceC && firstPlaceD && showDriversStandings ? <DriverPodium firstPlace={firstPlaceD} secondPlace={secondPlaceD} thirdPlace={thirdPlaceD} />
            : <ConstructorPodium firstPlace={firstPlaceC} secondPlace={secondPlaceC} thirdPlace={thirdPlaceC} />}
        </div>
    </div>
  )
}

export default StandingsPage