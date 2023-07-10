import RaceResults from "@/app/schedule/components/RaceResults"
import Image from "next/image";

const RaceResultsPage = async ({ params }) => { 
  const race = await fetch(`http://localhost:3000/api/schedule/season/completed/${params.round}`)
    .then((res) => res.json())
  const raceResults = race.Results;
  
  return (
    <div className="flex flex-col justify-center text-center w-full mt-8 md:w-3/4">
        {/* <div>
          <Image />
        </div> */}
        <RaceResults raceResults={raceResults} />
        <div className="text-xl text-red-500 md:text-2xl">Race Weekend Results</div>
        <div>{race.raceName}</div>
    </div>
  )
}

export default RaceResultsPage