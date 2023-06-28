import React from 'react'

const ConstructorStandingsTable = ({standings}) => {
  return (
    <table className="standings-table">
    <thead>
        <tr>
            <th>Position</th>
            <th>Constructor</th>
            <th>Points</th>
        </tr>
    </thead>
    <tbody>
        {standings.map((pos) => (
            <tr key={pos.position} className="position">
                <td >{pos.position}</td>
                <td>{pos.Constructor?.name}</td>
                <td>{pos.points}</td>
            </tr>
        ))}
    </tbody>
</table>
  )
}

export default ConstructorStandingsTable