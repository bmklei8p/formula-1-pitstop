import RacePodiumResults from "@/app/schedule/components/RacePodiumResults"
import ResultsList from "@/app/schedule/components/ResultsList";

const RaceResultsPage = async ({ params }) => {
  const race = await fetch(`http://localhost:3000/api/schedule/season/completed/${params.round}`)
    .then((res) => res.json())
  const raceResults = race.Results;

  return (
    <div className="flex flex-col justify-center text-left w-full md:w-3/4">
        <RacePodiumResults raceResults={raceResults} raceCircuitId={race.Circuit.circuitId}/>
        <div className="text-xl mt-4 text-red-500 md:text-2xl">Race Weekend Results</div>
        <div>{race.raceName}</div>
        <ResultsList raceResults={raceResults}/>
    </div>
  )
}

export default RaceResultsPage