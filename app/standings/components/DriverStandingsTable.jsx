import React from 'react'

const DriverStandingsTable = ({standings}) => {
  return (
    <table className="standings-table">
        <thead>
            <tr>
                <th>Position</th>
                <th>Driver</th>
                <th>Points</th>
            </tr>
        </thead>
        <tbody>
            {standings.map((pos) => (
                <tr key={pos.position} className="position">
                    <td >{pos.position}</td>
                    <td>{pos.Driver.givenName + " " + pos.Driver.familyName}</td>
                    <td>{pos.points}</td>
                </tr>
            ))}
        </tbody>
    </table>
  )
}

export default DriverStandingsTable