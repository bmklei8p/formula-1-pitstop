import RacePodiumResults from "@/app/schedule/components/RacePodiumResults"
import ResultsList from "@/app/schedule/components/ResultsList";

const RaceResultsPage = async ({ params }) => {
  const race = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/schedule/season/completed/${params.round}`, { next: {revalidate: 60}})
    .then((res) => res.json())
  const raceResults = race.Results;

  const qualifyingResults =  await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/schedule/season/completed/qualifying/${params.round}`, { next: {revalidate: 60}})
    .then((res) => res.json())


  return (
    <div className="flex flex-col justify-center text-center w-full lg:w-3/4">
        <RacePodiumResults raceResults={raceResults} raceCircuitId={race.Circuit.circuitId}/>
        <div className="mt-4">
          <h1 className="text-2xl font-bold text-red-500 md:text-4xl">
            Race Weekend Results
          </h1>
          <h3 className="text-xl">
            {race.raceName}
          </h3>
        </div>
        <ResultsList raceResults={raceResults} qualifyingResults={qualifyingResults}/>
    </div>
  )
}

export default RaceResultsPage