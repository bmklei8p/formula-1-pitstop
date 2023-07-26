import Image from "next/image"
import RecentQualyResults from "./RecentQualyResults"
import RecentRaceResults from "./RecentRaceResults"



const RecentResults = async ({ raceRound, race }) => {
  // hard code to test if both race and qualy results show if both are complete
  // const RecentResults = async ({ race }) => {
  // const raceRound = 12
  const qualifyingResponse = await fetch(`https://ergast.com/api/f1/current/${raceRound}/qualifying.json`, { next: {revalidate: 60}})
  const qualifyingData = await qualifyingResponse.json()
  const qualifyingResults = qualifyingData.MRData.RaceTable.Races

  const raceResultsResponse = await fetch(`https://ergast.com/api/f1/current/${raceRound}/results.json`, { next: {revalidate: 60}})
  const raceResultsData = await raceResultsResponse.json()
  const raceResults = raceResultsData.MRData.RaceTable.Races

  const displayMonthFromDateObj = (dateObj) => {
    const month = dateObj.toLocaleString('en-US', { month: 'long'})
    return month
  }


  return (
    <div className="border-r-4 border-t-4 border-black rounded-tr-lg pl-2 pr-4 pt-2">
        <div className="flex flex-row justify-between">
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
              <div className="text-2xl md:text-3xl text-left text-bold">{race.raceName}</div>
              <div className="text-xl md:text-2xl text-left">{race.Circuit.Location.locality}, {race.Circuit.Location.country}</div>
            </div>
          </div>
          <div className="hidden md:block">
            {/* this only works for my data sets because there are no future races in this season that in two seperate months */}
            {/* could future proof it by having a check if race.date vs race.firstpractice.date are in different months */}
            <p className="text-lg md:text-2xl">
              {displayMonthFromDateObj(new Date(`${race.FirstPractice.date}T${race.FirstPractice.time}`))} {race.FirstPractice.date.slice(8)} - {race.date.slice(8)}
              </p>
          </div>
      </div>
      <div className="md:hidden">
            <p className="text-lg">
              {displayMonthFromDateObj(new Date(`${race.FirstPractice.date}T${race.FirstPractice.time}`))} {race.FirstPractice.date.slice(8)} - {race.date.slice(8)}
              </p>
          </div>
      {/* Both Qualy and Race Results Complete */}
      { qualifyingResults.length > 0 && raceResults.length > 0 ?
        <div className="flex flex-col gap-y-4">
          <RecentRaceResults raceResults={raceResults[0].Results} raceRound={raceRound} show={true} />
          <RecentQualyResults qualifyingResults={qualifyingResults[0].QualifyingResults} raceRound={raceRound} show={false}  />
        </div> : null}

      {/* Qualy Results Complete */}
      { qualifyingResults.length > 0 && !raceResults.length > 0 ?
      <RecentQualyResults qualifyingResults={qualifyingResults[0].QualifyingResults} raceRound={raceRound} show={true} /> : null}

      {/* Neither Complete */}
      { !qualifyingResults.length > 0 && !raceResults.length > 0 ?
      <h1>Neither Complete</h1> : null}
    </div>
  )
}

export default RecentResults