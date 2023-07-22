'use client'
import Image from "next/image"
import { useState } from "react"
import { BsCaretLeftFill, BsFillCaretDownFill } from "react-icons/bs"

const RecentRaceResults = ({ raceResults, show }) => {
    const [showRaceResults, setShowRaceResults] = useState(show)

    return (
    <div className="mt-4">
    <div className="flex flex-row items-center gap-x-2">
        <h1 className="text-xl md:text-2xl">Race Results</h1>
        <button onClick={() => setShowRaceResults(!showRaceResults)} className="text-xl md:text-2xl">{showRaceResults ? <BsCaretLeftFill /> : <BsFillCaretDownFill /> }</button>
    </div>
    {showRaceResults ?
    <div className="flex flex-col gap-y-2">
        <div className="flex flex-row items-center gap-x-4 mt-2">
            <p className="text-xl md:text-2xl font-bold">1</p>
            <div className="w-[75px] h-[75px] rounded-full overflow-hidden bg-gray-900">
            <Image className="object-contain" src={`/assets/images/drivers/${raceResults[0].Driver.driverId}_front.png`} alt={raceResults[0].Driver.familyName} width={75} height={75} />
            </div>
            <div className="flex flex-col">
                <p className="text-xl md:text-2xl">{raceResults[0].Driver.givenName} <strong>{raceResults[0].Driver.familyName}</strong></p>
                <p className="text-l md:text-xl">{raceResults[0].Constructor.name}</p>
            </div>
            <p className="text-xl md:text-2xl">{raceResults[0].Q1}</p>
        </div>
        <div className="flex flex-row items-center gap-x-4 mt-2">
            <p className="text-xl md:text-2xl font-bold">2</p>
            <div className="w-[75px] h-[75px] rounded-full overflow-hidden bg-gray-900">
            <Image className="object-contain" src={`/assets/images/drivers/${raceResults[1].Driver.driverId}_front.png`} alt={raceResults[1].Driver.familyName} width={75} height={75} />
            </div>
            <div className="flex flex-col">
                <p className="text-xl md:text-2xl">{raceResults[1].Driver.givenName} <strong>{raceResults[1].Driver.familyName}</strong></p>
                <p className="text-l md:text-xl">{raceResults[1].Constructor.name}</p>
            </div>
            <p className="text-xl md:text-2xl">{raceResults[1].Q1}</p>
        </div>
        <div className="flex flex-row items-center gap-x-4 mt-2">
            <p className="text-xl md:text-2xl font-bold">3</p>
            <div className="w-[75px] h-[75px] rounded-full overflow-hidden bg-gray-900">
            <Image className="object-contain" src={`/assets/images/drivers/${raceResults[2].Driver.driverId}_front.png`} alt={raceResults[2].Driver.familyName} width={75} height={75} />
            </div>
            <div className="flex flex-col">
                <p className="text-xl md:text-2xl">{raceResults[2].Driver.givenName} <strong>{raceResults[2].Driver.familyName}</strong></p>
                <p className="text-l md:text-xl">{raceResults[2].Constructor.name}</p>
            </div>
            <p className="text-xl md:text-2xl">{raceResults[2].Q1}</p>
        </div>
    </div> : null}
  </div>
  )
}

export default RecentRaceResults