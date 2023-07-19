import Image from "next/image";
import RaceTimes from "../../components/RaceTimes";
import SprintRaceTimes from "../../components/SprintRaceTimes";

export async function generateStaticParams() {
    const races = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/schedule/season`).then((res) => res.json())

    return races.map((race) => ({
      round: race.round,
    }))
  }

const UpcomingRaceSchedulePage = async ({ params }) => {

  const race = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/schedule/season/current/${params.round}`
  ).then((res) => res.json())



  return (
    <div className="w-full flex flex-col items-center ml-2 mr-2 mt-4">
      <Image src={`/assets/images/track/${race.Circuit.circuitId}.png`} alt={`Image of ${race.raceName} track layout`} width={600} height={600} priority={true} />
      <div className="flex flex-col justify-center text-center w-full mt-8 md:w-3/4">
        <div className="basis-1/6 flex flex-row gap-x-4 align-middle box-border h-95">
          <Image src={`/assets/images/flag/${race.Circuit.Location.country.replace(/ /g, '_')}_flag.svg`} alt={`${race.Circuit.Location.country} flag`} width={100} height={85} className="h-full object-contain" />
          <div className="flex flex-col">
            <div className="text-2xl md:text-3xl text-left text-red-500">{race.raceName}</div>
            <div className="text-xl md:text-2xl text-left">{race.Circuit.Location.locality}, {race.Circuit.Location.country}</div>
          </div>
        </div>
      </div>
      {race.hasOwnProperty('Sprint') ? <SprintRaceTimes race={race} /> : <RaceTimes race={race} />}
    </div>
  )
}

export default UpcomingRaceSchedulePage