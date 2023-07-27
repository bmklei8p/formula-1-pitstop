'use client'
import { useState } from "react"
import Link from "next/link"
import { PiCaretDown, PiCaretUp } from "react-icons/pi"
import BriefConstructorsStandingsRow from "./BriefConstructorsStandingsRow"


const BriefConstructorsStandings = ({constructorsStandingsList}) => {
  const [showConstructorsStandings, setshowConstructorsStandings] = useState(false)

  return (
    <div className="mt-4">
      <div className="flex flex-row items-center gap-x-2 pb-4">
          <h1 onClick={() => setshowConstructorsStandings(!showConstructorsStandings)} className={`text-xl md:text-2xl ${showConstructorsStandings ? 'border-b-2 border-red-500' : ''}`}>Constructors Standings</h1>
          <button onClick={() => setshowConstructorsStandings(!showConstructorsStandings)} className="text-xl md:text-2xl">{showConstructorsStandings ? <PiCaretUp /> : <PiCaretDown /> }</button>
      </div>
      {showConstructorsStandings ?
      <div className="flex flex-col gap-y-2">
        <BriefConstructorsStandingsRow constructorsStandingsList={constructorsStandingsList} index={0} />
        <BriefConstructorsStandingsRow constructorsStandingsList={constructorsStandingsList} index={1} />
        <BriefConstructorsStandingsRow constructorsStandingsList={constructorsStandingsList} index={2} />
        <div className="flex justify-center pb-4">
          <Link href={`standings/`}>
            <button className="text-lg md:text-xl border-b-2 border-borderColor">Full Constructors Standings</button>
          </Link>
        </div>
      </div>
      : null}
    </div>
  )
}

export default BriefConstructorsStandings