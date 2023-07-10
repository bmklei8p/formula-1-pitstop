
const PastRaces = ({races}) => {
  return (
    <div>
      {races && races.map((race, index) => {
        return (
          <div key={index}>
            {race.raceName}
          </div>
        )})}
    </div>
  )
}

export default PastRaces