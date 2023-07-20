'use client'
import { useState } from 'react'
import DriverSingleRaceStandingsTable from '@/app/standings/components/DriverSingleRaceStandingsTable'
import { BsChevronUp, BsChevronDown } from 'react-icons/bs'
import ConstructorSingleRaceStandingsTable from '@/app/standings/components/ConstructorSingleRaceStandingsTable'
import QualifyingResults from './QualifyingResults'


const ResultsList = ({ raceResults, qualifyingResults }) => {
  const [showRaceResults, setShowRaceResults] = useState(false)
  const [showDriversStandings, setShowDriversStandings] = useState(true)
  const [showQualifyingResults, setShowQualifyingResults] = useState(false)
  // const [showPracticeOneResults, setShowPracticeOneResults] = useState(false)
  // const [showPracticeTwoResults, setShowPracticeTwoResults] = useState(false)
  // const [showPracticeThreeResults, setShowPracticeThreeResults] = useState(false)

  return (
      <div className="flex flex-col justify-center text-center mt-6">
        {/* race results */}
        <div onClick={() => setShowRaceResults(!showRaceResults)} className='flex flex-col border-2 border-gray-500 bg-slate-300 pt-2 pb-2'>
          <div className="w-full flex flex-row justify-center text-xl xl:text-2xl ">
            {showRaceResults ?
            <>
              <div className="ml-4 mr-4">Hide Race Results</div>
            </> :
            <div className="ml-4 mr-4">Show Full Race Results</div>}
            {showRaceResults ?
            <div className="flex items-center text-xl"><BsChevronUp/></div> :
            <div className="flex items-center text-xl"><BsChevronDown /></div>}
          </div>
        </div>
        {showRaceResults ?
        <div className='flex flex-col'>
          {/* mobile buttons */}
          <div className="flex justify-center xl:hidden mt-2">
            <div className="basis-1/2" onClick={() => setShowDriversStandings(true)}>
              <button className={`${showDriversStandings ? `text-2xl border-b-4 w-full border-red-500 rounded` : `text-xl`}`}>Drivers</button>
            </div>
            <div className="basis-1/2" onClick={() => setShowDriversStandings(false)}>
              <button className={`${!showDriversStandings ? `text-2xl border-b-4 w-full border-red-500 rounded` : `text-xl`}`}>Constructors</button>
            </div>
          </div>
          {/* desktop buttons */}
          <div className="hidden justify-center xl:flex xl:pt-4">
            <div className="basis-1/2">
              <h1 className='text-xl xl:text-2xl'>Drivers</h1>
            </div>
            <div className="basis-1/2">
              <h1 className='text-xl xl:text-2xl'>Constructors</h1>
            </div>
          </div>
          {/* show appropriate table based on showDriversStandings */}
          <div className={`flex flex-col xl:hidden`}>
            {showDriversStandings ? <DriverSingleRaceStandingsTable standings={raceResults} /> : <ConstructorSingleRaceStandingsTable standings={raceResults} />}
          </div>
          <div className="hidden xl:flex xl:flex-row">
              <DriverSingleRaceStandingsTable standings={raceResults} />
              <ConstructorSingleRaceStandingsTable standings={raceResults} />
            </div>
        </div>
         : null}
        {/* Qualifying results */}
        <div onClick={() => setShowQualifyingResults(!showQualifyingResults)} className='flex flex-col mt-4 border-2 border-gray-500 bg-slate-300 pt-2 pb-2'>
          <div className="w-full flex flex-row justify-center text-xl xl:text-2xl ">
            {showQualifyingResults ?
            <>
              <div className="ml-4 mr-4">Hide Qualifying Results</div>
            </> :
            <div className="ml-4 mr-4">Show Qualifying Results</div>}
            {showQualifyingResults ?
            <div className="flex items-center text-xl"><BsChevronUp/></div> :
            <div className="flex items-center text-xl"><BsChevronDown /></div>}
          </div>
        </div>
        {showQualifyingResults ? <QualifyingResults qualifyingResults={qualifyingResults} /> : null}
      </div>
  )
}

export default ResultsList
