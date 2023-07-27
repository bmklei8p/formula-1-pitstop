'use client'
import { useState } from "react"
import Link from "next/link"
import { PiCaretDown, PiCaretUp } from "react-icons/pi"
import BriefDriversStandingsRow from "./BriefDriversStandingsRow"


const BriefDriversStandings = ({driversStandingsList}) => {
  const [showDriversStandings, setShowDriversStandings] = useState(true)

  return (
    <div className="mt-4">
      <div className="flex flex-row items-center gap-x-2 pb-4">
          <h1 onClick={() => setShowDriversStandings(!showDriversStandings)} className={`text-xl md:text-2xl ${showDriversStandings ? 'border-b-2 border-red-500' : ''}`}>Driver Standings</h1>
          <button onClick={() => setShowDriversStandings(!showDriversStandings)} className="text-xl md:text-2xl">{showDriversStandings ? <PiCaretUp /> : <PiCaretDown /> }</button>
      </div>
      {showDriversStandings ?
      <div className="flex flex-col gap-y-2">
        <BriefDriversStandingsRow driversStandings={driversStandingsList} index={0} />
        <BriefDriversStandingsRow driversStandings={driversStandingsList} index={1} />
        <BriefDriversStandingsRow driversStandings={driversStandingsList} index={2} />
        <div className="flex justify-center">
        <Link href={`standings/`}>
          <button className="text-lg md:text-xl border-b-2 border-borderColor">Full Drivers Standings</button>
        </Link>
      </div>
      </div>
      : null}
    </div>
  )
}

export default BriefDriversStandings