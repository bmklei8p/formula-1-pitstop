import Image from "next/image"
import RecentQualyResults from "./RecentQualyResults"
import RecentRaceResults from "./RecentRaceResults"

const RecentResults = async ({ raceRound, race }) => {
  // hard code to test if both race and qualy results show if both are complete
  // const RecentResults = async ({ race }) => {
  // const raceRound = 12
  const qualifyingResponse = await fetch(`https://ergast.com/api/f1/current/${raceRound}/qualifying.json`)
  const qualifyingData = await qualifyingResponse.json()
  const qualifyingResults = qualifyingData.MRData.RaceTable.Races

  const raceResultsResponse = await fetch(`https://ergast.com/api/f1/current/${raceRound}/results.json`)
  const raceResultsData = await raceResultsResponse.json()
  const raceResults = raceResultsData.MRData.RaceTable.Races

  return (
    <div className="border-r-4 border-t-4 border-black rounded-tr-lg px-2">
        <div className="flex flex-row items-center gap-x-2">
          <div className="overflow-hidden relative border-solid border-2 border-white w-16 md:w-20 h-10">
            <Image
                    src={`/assets/images/flag/${race.Circuit.Location.country.replace(/ /g, '_')}_flag.svg`}
                    alt={`${race.Circuit.Location.country} flag`}
                    sizes="(max-width: 768px) 100vw"
                    className="object-cover"
                    fill={true}
                  />
          </div>
          <div className="flex flex-col">
            <div className="text-2xl md:text-3xl text-left text-bold">{race.Circuit.circuitName}</div>
            <div className="text-xl md:text-2xl text-left">{race.Circuit.Location.locality}, {race.Circuit.Location.country}</div>
          </div>
      </div>
      {/* Both Qualy and Race Results Complete */}
      { qualifyingResults.length > 0 && raceResults.length > 0 ?
        <>
          <RecentRaceResults raceResults={raceResults[0].Results} show={true} />
          <RecentQualyResults qualifyingResults={qualifyingResults[0].QualifyingResults} show={false}  />
        </> : null}

      {/* Qualy Results Complete */}
      { qualifyingResults.length > 0 && !raceResults.length > 0 ?
      <RecentQualyResults qualifyingResults={qualifyingResults[0].QualifyingResults} show={true} /> : null}

      {/* Neither Complete */}
      { !qualifyingResults.length > 0 && !raceResults.length > 0 ?
      <h1>Neither Complete</h1> : null}
    </div>
  )
}

export default RecentResults