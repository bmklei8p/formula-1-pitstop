// import { useState, useEffect } from "react"
import Image from "next/image"
import RecentResults from "./components/RecentResults"

const HomePage = async () => {
  const res = await fetch('https://ergast.com/api/f1/current.json')
  const data = await res.json()
  const schedule = data.MRData.RaceTable.Races
  const currentDateTime = new Date();
  const upcomingRaces = []
  const pastRaces = []
  for (let i = 0; i < schedule.length; i++) {
    const raceDate = new Date(schedule[i].date + 'T' + schedule[i].time);

    if (raceDate > currentDateTime) {
      upcomingRaces.push(schedule[i]);
    } else {
      pastRaces.unshift(schedule[i]);  //bad time complexity but list is short
    }
  }
  const nextRace = upcomingRaces[0];
  const nextRaceRound = nextRace.round;










  return (
    <div className="w-full">
      {/* Banner */}
      <section className="w-full">  
        <div className="flex flex-col items-center justify-center bg-gray-800 relative">
          <Image src='/assets/images/pit-stop.avif' alt="pit-stop" priority={true} width={4111} height={1111} className="cover opacity-20"  />
          <h1 className="text-3xl md:text-5xl text-white absolute font-bold top-[10%]">Formula 1 Pitstop</h1>
          <p className="text-2xl md:text-xl text-white absolute top-[20%]">Your <strong>one stop</strong> for all things F1</p>
        </div>
      </section>
      {/* End Banner */}
      {/* Content */}
      <section className="w-full flex justify-center align-middle items-center">
        <div className="flex flex-col w-full md:flex-row bg-gray-800 relative">
          <div className="w-full bg-red-600">
            {/* Recent Results */}
            <RecentResults raceRound={nextRaceRound} />
          </div>
          <div className="w-full bg-blue-600">
            {/* Standings */}
            hello
          </div>
        </div>
      </section>
    </div>
  )
}

export default HomePage