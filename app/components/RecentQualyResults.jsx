'use client'
import Image from "next/image"
import { useState } from "react"
import { BsCaretLeftFill, BsFillCaretDownFill } from "react-icons/bs"

const RecentQualyResults = ({ qualifyingResults }) => {
    const [showRaceResults, setShowRaceResults] = useState(true)

    return (
    <div className="mt-4">
    <div className="flex flex-row items-center gap-x-2">
        <h1 className="text-xl md:text-2xl">Qualification Results</h1>
        <button onClick={() => setShowRaceResults(!showRaceResults)} className="text-xl md:text-2xl">{showRaceResults ? <BsCaretLeftFill /> : <BsFillCaretDownFill /> }</button>
    </div>
    {showRaceResults ?
    <div className="flex flex-col gap-y-2">
        <div className="flex flex-row items-center gap-x-4 mt-2">
            <p className="text-2xl md:text-3xl font-bold">1</p>
            <div className="w-[75px] h-[75px] rounded-full overflow-hidden bg-gray-900">
            <Image className="object-contain" src={`/assets/images/drivers/${qualifyingResults[0].Driver.driverId}_front.png`} alt={qualifyingResults[0].Driver.familyName} width={75} height={75} />
            </div>
            <div className="flex flex-col">
                <p className="text-xl md:text-2xl">{qualifyingResults[0].Driver.givenName} <strong>{qualifyingResults[0].Driver.familyName}</strong></p>
                <p className="text-l md:text-xl">{qualifyingResults[0].Constructor.name}</p>
            </div>
            <p className="text-xl md:text-2xl">{qualifyingResults[0].Q1}</p>
        </div>
        <div className="flex flex-row items-center gap-x-4 mt-2">
            <p className="text-2xl md:text-3xl font-bold">2</p>
            <div className="w-[75px] h-[75px] rounded-full overflow-hidden bg-gray-900">
            <Image className="object-contain" src={`/assets/images/drivers/${qualifyingResults[1].Driver.driverId}_front.png`} alt={qualifyingResults[1].Driver.familyName} width={75} height={75} />
            </div>
            <div className="flex flex-col">
                <p className="text-xl md:text-2xl">{qualifyingResults[1].Driver.givenName} <strong>{qualifyingResults[1].Driver.familyName}</strong></p>
                <p className="text-l md:text-xl">{qualifyingResults[1].Constructor.name}</p>
            </div>
            <p className="text-xl md:text-2xl">{qualifyingResults[1].Q1}</p>
        </div>
        <div className="flex flex-row items-center gap-x-4 mt-2">
            <p className="text-2xl md:text-3xl font-bold">3</p>
            <div className="w-[75px] h-[75px] rounded-full overflow-hidden bg-gray-900">
            <Image className="object-contain" src={`/assets/images/drivers/${qualifyingResults[2].Driver.driverId}_front.png`} alt={qualifyingResults[2].Driver.familyName} width={75} height={75} />
            </div>
            <div className="flex flex-col">
                <p className="text-xl md:text-2xl">{qualifyingResults[2].Driver.givenName} <strong>{qualifyingResults[2].Driver.familyName}</strong></p>
                <p className="text-l md:text-xl">{qualifyingResults[2].Constructor.name}</p>
            </div>
            <p className="text-xl md:text-2xl">{qualifyingResults[2].Q1}</p>
        </div>
    </div> : null}
  </div>
  )
}

export default RecentQualyResults