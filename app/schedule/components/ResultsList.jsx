'use client'
import { useState } from 'react'
import DriverStandingsTable from '@/app/standings/components/DriverStandingsTable'
import { BsChevronUp, BsChevronDown } from 'react-icons/bs'
import ConstructorSingleRaceStandingsTable from '@/app/standings/components/ConstructorSingleRaceStandingsTable'


const ResultsList = ({ raceResults }) => {
  const [showRaceResults, setShowRaceResults] = useState(false)
  const [showDriversStandings, setShowDriversStandings] = useState(true)
  const [showConstructorsStandings, setShowConstructorsStandings] = useState(false)
  const [showQualifyingResults, setShowQualifyingResults] = useState(false)
  const [showPracticeOneResults, setShowPracticeOneResults] = useState(false)
  const [showPracticeTwoResults, setShowPracticeTwoResults] = useState(false)
  const [showPracticeThreeResults, setShowPracticeThreeResults] = useState(false)


  return (
    <div className=''>
      {/* results accordions */}
      <div className="flex flex-col justify-center text-center mt-6">
        {/* race results */}
        <div onClick={() => setShowRaceResults(!showRaceResults)} className='flex flex-col bg-gray-400 pt-2 pb-2'>
          <div className="w-full md:w-8/12 text-xl md:text-2xl flex flex-row">
            {showRaceResults ?
            <div className="basis-9/12 ml-4 mr-4">Hide Race Results</div> :
            <div className="basis-9/12 ml-4 mr-4">Show Full Race Results</div>}
            {showRaceResults ?
            <div className="text-right basis-4 text-xl"><BsChevronUp/></div> :
            <div className="text-right basis-4 text-xl"><BsChevronDown /></div>}
          </div>
        </div>
        {showRaceResults ?
        <div className='flex flex-col md:flex-row'>
          <h1 className="hidden text-4xl font-bold mb-4 text-red-600 md:block">{showDriversStandings ? "Drivers Standings": "Constructors Standings"}</h1>
          {/* mobile buttons */}
          <div className="flex justify-center md:hidden">
            <div className="basis-1/2" onClick={() => setShowDriversStandings(true)}>
              <button className={`${showDriversStandings ? `text-2xl border-b-4 w-full border-red-500 rounded` : `text-xl`}`}>Drivers</button>
            </div>
            <div className="basis-1/2" onClick={() => setShowDriversStandings(false)}>
              <button className={`${!showDriversStandings ? `text-2xl border-b-4 w-full border-red-500 rounded` : `text-xl`}`}>Constructors</button>
            </div>
          </div>
          {/* desktop buttons */}
          <div className="hidden justify-center md:flex">
            <div className="basis-1/2" onClick={() => setShowDriversStandings(true)}>
              <button className={`${showDriversStandings ? `text-2xl border-b-4 w-full border-red-500 rounded` : `text-xl`}`} onClick={() => setShowDriversStandings(true)}>Drivers</button>
            </div>
            <div className="basis-1/2" onClick={() => setShowDriversStandings(false)}>
              <button className={`${!showDriversStandings ? `text-2xl border-b-4 w-full border-red-500 rounded` : `text-xl`}`} onClick={() => setShowDriversStandings(false)}>Constructors</button>
            </div>
          </div>
          <div className={`flex flex-col-reverse justify-center ${showDriversStandings ? `md:flex-row md:align-center` : `md:flex-row-reverse md:align-center`}`}>
            {/* show appropriate table based on showDriversStandings */}
            {showDriversStandings ? <DriverStandingsTable standings={raceResults} /> : <ConstructorSingleRaceStandingsTable standings={raceResults} />}

          </div>
        </div>
         : null}
          {/* {showRaceResults ? <ConstructorStandingsTable standings={raceResults}/> : null} */}
        {/* Qualifying results */}
        <div onClick={() => setShowQualifyingResults(!showQualifyingResults)} className='flex flex-col bg-gray-300'>
          <div className="w-full md:w-8/12 text-xl md:text-2xl flex flex-row">
            <div className="basis-9/12 ml-4 mr-4">Show Qualifying Results</div>
            <div className="text-right basis-4">D</div>
          </div>
        </div>
        <div>
          {showQualifyingResults ? <DriverStandingsTable standings={raceResults}/> : null}
        </div>
      </div>
    </div>
  )
}

export default ResultsList