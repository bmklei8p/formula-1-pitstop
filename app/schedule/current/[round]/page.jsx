import Image from "next/image";
import RaceTimes from "../../components/RaceTimes";
import SprintRaceTimes from "../../components/SprintRaceTimes";
import TrackInfoBox from "@/app/tracks/components/TrackInfoBox";

// export async function generateStaticParams() {
//     const races = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/schedule/season`).then((res) => res.json())

//     return races.map((race) => ({
//       round: race.round,
//     }))
//   }

const UpcomingRaceSchedulePage = async ({ params }) => {

  const race = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/schedule/season/current/${params.round}`
  ).then((res) => res.json())

  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/tracks/${race.Circuit.circuitId}`)
  const track = await res.json()

  const timeZoneRes = await fetch(`https://maps.googleapis.com/maps/api/timezone/json?location=${race.Circuit.Location.lat},${race.Circuit.Location.long}&timestamp=0&key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}`)
  const data = await timeZoneRes.json()
  const timeZone = data.timeZoneId

  // return (
  //   <div className="w-full h-screen flex flex-col items-center">
  //     <h1 className='font-bold text-2xl md:text-3xl mb-4'>{race.raceName}</h1>
  //     <div className="w-full md:w-9/12 bg-white mx-4">
  //     <Image src={`/assets/images/track/${race.Circuit.circuitId}.png`} alt={`Image of ${race.raceName} track layout`} width={600} height={600} priority={true} />
  //     <div className="flex flex-col justify-center text-center w-full mt-8 md:w-3/4">
        // <div className="basis-1/6 flex flex-row gap-x-4 align-middle box-border h-95">
        //   <Image src={`/assets/images/flag/${race.Circuit.Location.country.replace(/ /g, '_')}_flag.svg`} alt={`${race.Circuit.Location.country} flag`} width={100} height={85} className="h-full object-contain" />
          // <div className="flex flex-col">
          //   <div className="text-2xl md:text-3xl text-left text-red-500">{race.raceName}</div>
          //   <div className="text-xl md:text-2xl text-left">{race.Circuit.Location.locality}, {race.Circuit.Location.country}</div>
          // </div>
        // </div>
  //     </div>
  //     {race.hasOwnProperty('Sprint') ? <SprintRaceTimes race={race} /> : <RaceTimes race={race} />}
  //   </div>
  //   </div>
  // )
  // return (
  //   <div className="w-full h-screen flex flex-col items-center bg-gray-100">
  //     <h1 className="text-2xl md:text-3xl font-bold pt-2 pb-2 md:pb-4">
  //      {race.raceName}
  //     </h1>
  //     <div className="w-full md:w-9/12 2xl:w-2/3 px-4 md:px-8 pt-8 flex flex-col gap-y-8 bg-white">
  //       <div className="basis-full">
  //            <Image src={`/assets/images/track/${race.Circuit.circuitId}.png`} alt={`Image of ${race.raceName} track layout`} width={600} height={600} priority={true} />
  //       </div>
        // <div className="w-full md:w-9/12 2xl:w-2/3 m-0 h-auto bg-white">
        //    {race.hasOwnProperty('Sprint') ? <SprintRaceTimes race={race} /> : <RaceTimes race={race} />}
        // </div>
  //       <div>
  //         <TrackInfoBox track={track} />
  //       </div>
  //     </div>
  //   </div>
  // )
  return (
    <div className="w-full h-screen flex flex-col items-center bg-gray-100">
      <div className="pt-2 pb-2 md:pb-4 text-center">
        <h1 className="text-2xl md:text-3xl font-bold">
          {track.officialRaceName}
        </h1>
      </div>
      <div className="w-full lg:w-9/12 2xl:w-2/3 flex flex-col-reverse gap-y-16 justify-evenly pt-2 bg-white md:flex-row">
        {/* track layout image */}
        {/* <div className="pt-8 pl-8"> */}
        <div className="flex items-center pl-4 md:pl-8">
          <div className="flex flex-row items-center gap-x-2">
            <div className="overflow-hidden relative border-solid border-2 border-white w-16 md:w-24 h-10">
              <Image
                src={`/assets/images/flag/${race.Circuit.Location.country.replace(/ /g, '_')}_flag.svg`}
                alt={`${race.Circuit.Location.country} flag`}
                sizes="(max-width: 768px) 100vw"
                className="object-cover"
                fill={true}
              />
            </div>
            <div className="flex flex-col">
              <div className="text-2xl md:text-3xl text-left text-black text-bold">{race.Circuit.circuitName}</div>
              <div className="text-xl md:text-2xl text-left text-black">{race.Circuit.Location.locality}, {race.Circuit.Location.country}</div>
            </div>
          </div>
        </div>
        <div className="">
          <Image src={`/assets/images/track/${track.circuitId}.png`} width={750} height={750} priority={true} alt={`${track.locationCity}'s track layout`} />
        </div>
      </div>
      <div className="w-full lg:w-9/12 2xl:w-2/3 px-4 md:px-8 pt-4 md:pt-8 h-auto bg-white flex flex-col md:flex-row">
        <div className="basis-1/2">
          {race.hasOwnProperty('Sprint') ? <SprintRaceTimes race={race} trackTimezone={timeZone} /> : <RaceTimes race={race} trackTimezone={timeZone} />}
        </div>
        <div className="basis-1/2 mt-4 md:mt-0 pb-8 max-w-xl">
          <TrackInfoBox track={track} className="basis-full" />
        </div>
      </div>
    </div>
  )
}

export default UpcomingRaceSchedulePage