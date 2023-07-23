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
    // results of previous week will not switch over until first practice of the next race weekend
    const raceDate = new Date(schedule[i].FirstPractice.date + 'T' + schedule[i].FirstPractice.time);

    if (raceDate > currentDateTime) {
      upcomingRaces.push(schedule[i]);
    } else {
      pastRaces.unshift(schedule[i]);  //bad time complexity but list is short
    }
  }
  const nextRace = upcomingRaces[0];
  const nextRaceRound = nextRace.round;
  const resultsRace = pastRaces[0];
  const resultsRaceRound = resultsRace.round;


  return (
    <div className="w-full flex flex-col items-center">
      {/* Banner */}
      <section className="w-full">
        <div className="bg-gray-800 relative flex flex-row justify-center">
          <Image src='/assets/images/pit-stop.avif' alt="pit-stop" priority={true} width={4111} height={1111} className="cover opacity-20"  />
          <h1 className="text-3xl md:text-5xl text-white absolute font-bold top-[10%]">Formula 1 Pitstop</h1>
          <p className="text-2xl md:text-xl text-white absolute top-[20%]">Your <strong>one stop</strong> for all things F1</p>
        </div>
      </section>
      {/* End Banner */}
      {/* Content */}
      <div className="w-full md:w-9/12 flex flex-col md:flex-row mt-4 p-2 md:p-0 gap-x-4 ">
          <div className="w-full">
            {/* Recent Results */}
            <RecentResults raceRound={resultsRaceRound} race={resultsRace} />
          </div>
          <div className="w-full">
            {/* Standings */}
            hello
          </div>
      </div>
    </div>
  )
}

export default HomePage

// recent results should not use nextRace to aquire, have to figure out how to get -1 from nextRaceRound
// i want these results to show until the next weekend starts but after the race is over, nextRace should switch to the next round number that will show as belgium...