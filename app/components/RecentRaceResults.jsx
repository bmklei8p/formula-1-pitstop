'use client'
import Link from "next/link"
import { useState } from "react"
import { PiCaretDown, PiCaretUp } from "react-icons/pi"
import RecentResultRow from "./RecentResultRow"

const RecentRaceResults = ({ raceResults, show, raceRound }) => {
    const [showRaceResults, setShowRaceResults] = useState(show)

    return (
    <div className="mt-4">
    <div className="flex flex-row items-center gap-x-2 pb-4">
        <h1 onClick={() => setShowRaceResults(!showRaceResults)} className={`text-xl md:text-2xl ${showRaceResults ? 'border-b-2 border-red-500' : ''}`}>Race Results</h1>
        <button onClick={() => setShowRaceResults(!showRaceResults)} className="text-xl md:text-2xl">{showRaceResults ? <PiCaretUp /> : <PiCaretDown /> }</button>
    </div>
    {showRaceResults ?
    <div className="flex flex-col gap-y-2">
        <RecentResultRow raceResults={raceResults} index={0} qualy={false} />
        <RecentResultRow raceResults={raceResults} index={1} qualy={false} />
        <RecentResultRow raceResults={raceResults} index={2} qualy={false} />
        <div className="flex justify-center">
          <Link href={`schedule/current/completed/${raceRound}`}>
            <button className="text-lg md:text-xl border-b-2 border-black">Full Results</button>
          </Link>
        </div>
    </div> : null}
  </div>
  )
}

export default RecentRaceResults