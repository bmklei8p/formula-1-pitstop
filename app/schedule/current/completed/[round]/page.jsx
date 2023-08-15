import RacePodiumResults from "@/app/schedule/components/RacePodiumResults"
import ResultsList from "@/app/schedule/components/ResultsList";

const RaceResultsPage = async ({ params }) => {
  const race = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/schedule/season/completed/${params.round}`, { cache: "no-cache"})
    .then((res) => res.json()).catch((err) => console.log(err))

  const raceResults = race ? race.Results : []

  const qualifying =  await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/schedule/season/completed/qualifying/${params.round}`, { next: {revalidate: 360000}})
    .then((res) => res.json())

  const qualifyingResults = qualifying.Races[0].QualifyingResults;


  return (
      <div className="flex flex-col justify-center text-center w-full lg:w-3/4">
        { race ?
        <RacePodiumResults raceResults={raceResults} raceCircuitId={qualifying.Races[0].Circuit.circuitId}/>
        : null }
        <div className="mt-4">
          <h1 className="text-3xl font-bold text-[#ff0800] md:text-4xl">
            Race Weekend Results
          </h1>
          <h3 className="text-2xl md:text-2xl mt-1">
            {qualifying.Races[0].raceName}
          </h3>
        </div>
        <ResultsList raceResults={raceResults} qualifyingResults={qualifyingResults} showQR={race ? false : true} />
    </div>
  )
}

export default RaceResultsPage