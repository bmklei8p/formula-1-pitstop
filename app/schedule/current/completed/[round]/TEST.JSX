'use client'
import { useState } from "react"
import RacePodiumResults from "@/app/schedule/components/RacePodiumResults"
import DriverStandingsTable from "@/app/standings/components/DriverStandingsTable";

const RaceResultsPage = async ({ params }) => { 
  const [showRaceResults, setShowRaceResults] = useState(true)
  // const resultsTypeArray = [{type: showRaceResults, title: "Show Full Race Results", setChangeFunction: setShowRaceResults},
  //                           {type: showQualifyingResults, title: "Show Qualifying Results", setChangeFunction: setShowQualifyingResults},
  //                           {type: showPracticeOneResults, title: "Show Practice One Results", setChangeFunction: setShowPracticeOneResults},
  //                           {type: showPracticeTwoResults, title: "Show Practice Two Results", setChangeFunction: setShowPracticeTwoResults},
  //                           {type: showPracticeThreeResults, title: "Show Practice Three Results", setChangeFunction: setShowPracticeThreeResults}]
  // const mapArray = [{type: false, title: "Show Full Race Results", setChangeFunction: setShowRaceResults},
  //                           {type:  false, title: "Show Qualifying Results", setChangeFunction: setShowQualifyingResults},
  //                           {type:  false, title: "Show Practice One Results", setChangeFunction: setShowPracticeOneResults},
  //                           {type:  false, title: "Show Practice Two Results", setChangeFunction: setShowPracticeTwoResults},
  //                           {type:  false, title: "Show Practice Three Results", setChangeFunction: setShowPracticeThreeResults}]

  const race = await fetch(`http://localhost:3000/api/schedule/season/completed/${params.round}`)
    .then((res) => res.json())
  const raceResults = race.Results;
  

  return (
    <div className="flex flex-col justify-center text-left w-full md:w-3/4">
        <RacePodiumResults raceResults={raceResults} raceCircuitId={race.Circuit.circuitId}/>
        <div className="text-xl mt-4 text-red-500 md:text-2xl">Race Weekend Results</div>
        <div>{race.raceName}</div>
        {/* results accordion */}
        {/* {mapArray.map((resultType, index) => {
          <div key={index} className="w-full bg-slate-400 md:w-8/12 text-xl md:text-2xl flex flex-row">
            <div className="basis-9/12 ml-4 mr-4">{resultType.title}</div>
            <div className="text-right basis-4">D</div>
          </div>
        })} */}
        {showRaceResults ? <DriverStandingsTable standings={raceResults}/> : null}
    </div>
  )
}

export default RaceResultsPage