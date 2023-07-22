
const RecentResults = async ({ raceRound }) => {
  const qualifyingResponse = await fetch(`https://ergast.com/api/f1/current/${raceRound}/qualifying.json`)
  const qualifyingData = await qualifyingResponse.json()
  const qualifyingResults = qualifyingData.MRData.RaceTable.Races
  
  const raceResultsResponse = await fetch(`https://ergast.com/api/f1/current/${raceRound}/results.json`)
  const raceResultsData = await raceResultsResponse.json()
  const raceResults = raceResultsData.MRData.RaceTable.Races
  console.log(raceResults)

  return (
    <div>
      {/* Both Qualy and Race Results Complete */}
      { qualifyingResults.length > 0 && raceResults.length > 0 ? 
      <div>
        <h1>Both Complete</h1>
      </div> : null}
      {/* Qualy Results Complete */}
      { qualifyingResults.length > 0 && !raceResults.length > 0 ? <h1>Qualiy Complete</h1> : null}
      {/* Neither Complete */}
      { !qualifyingResults.length > 0 && !raceResults.length > 0 ? <h1>Neither Complete</h1> : null}
    </div>
  )
}

export default RecentResults