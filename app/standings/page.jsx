'use client'
import { useState, useEffect } from "react"
import Image from "next/image"

const driversStandings = [
    { position: 1, driver: 'Lewis Hamilton', team: 'Mercedes', points: 347},
    { position: 2, driver: 'Valtteri Bottas', team: 'Mercedes', points: 223},
    { position: 3, driver: 'Max Verstappen', team: 'Red Bull Racing Honda', points: 214},
    { position: 4, driver: 'Daniel Ricciardo', team: 'Renault', points: 119},
    { position: 5, driver: 'Sergio Perez', team: 'Racing Point BWT Mercedes', points: 117},
    { position: 6, driver: 'Carlos Sainz', team: 'McLaren Renault', points: 116},
    { position: 7, driver: 'Alexander Albon', team: 'Red Bull Racing Honda', points: 93},
    { position: 8,  driver: 'Charles Leclerc', team: 'Ferrari', points: 98},
]

const constructorsStandings = [
    { position: 1, team: 'Mercedes', points: 573, logo: '/assets/images/mercedes-logo.png'},
    { position: 2, team: 'Red Bull Racing Honda', points: 319, logo: '/assets/images/redbull-logo.png'},
    { position: 3, team: 'Racing Point BWT Mercedes', points: 154, logo: '/assets/images/racing-point-logo.png'},
    { position: 4, team: 'McLaren Renault', points: 149, logo: '/assets/images/mclaren-logo.png'},
    { position: 5, team: 'Renault', points: 136, logo: '/assets/images/renault-logo.png'},
]



const StandingsPage = () => {
  const [showDriversStandings, setShowDriversStandings] = useState(true)


  const standings = showDriversStandings ? driversStandings : constructorsStandings
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

  return (
    <div className="standings-container">
        <h1 className="standings-page-title">{showDriversStandings ? "Driver Standings": "Constructor Standings"}</h1>
        <div className="titles-block">
            <button className="drivers-title" onClick={() => setShowDriversStandings(true)}>Drivers</button>
            <button className="constructors-title" onClick={() => setShowDriversStandings(false)}>Constructors</button>
        </div>
        <div className="standings-block">
            <table className="standings-table">
                <thead>
                    <tr>
                        <th>Position</th>
                        <th>{showDriversStandings ? "Driver" : "Constructors"}</th>
                        <th>Points</th>
                    </tr>
                </thead>
                <tbody>
                    {standings.map((pos) => (
                        <tr key={pos.position} className="position">
                            <td >{pos.position}</td>
                            <td style={{textAlign: "left"}}>{showDriversStandings ? pos.driver : pos.team}</td>
                            <td>{pos.points}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="podium-container">
                <Image priority="high" src='/assets/images/podium.png' alt='podium' width={300} height={300} />
                <div className="podium-first-container">
                    <Image src='/assets/images/redbull_team_logo.png' alt='mercedes-logo' width={80} height={80} />
                </div>
                <div className="podium-second-container">
                    <Image src='/assets/images/aston_martin_team_logo.png' alt='mercedes-logo' width={80} height={80} />
                </div>
                <div className="podium-third-container">
                    <Image src='/assets/images/mercedes_team_logo.png' alt='mercedes-logo' width={80} height={80} />
                </div>
            </div>
        </div>
    </div>
  )
}
    // <div className='standings-container'>
    //     <div className="standings-block">
    //         <button className="drivers-title">Drivers</button>
    //         <button className="constructors-title">Constructors</button>
    //     </div>
    //     <div className="standings">
    //         {standings.map((position) => (
    //             <div key={position.driver} className="standing">
    //                 <p>{position.driver}</p>
    //             </div>
    //         ))}
    //     </div>
    //     <div className="podium-container">
    //         <Image src='/assets/images/podium.png' alt='podium' width={300} height={300} />
    //     </div>
    // </div>
export default StandingsPage