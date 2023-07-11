'use client'
import { useState } from 'react'
import DriverStandingsTable from '@/app/standings/components/DriverStandingsTable'
import StandingsPage from '@/app/standings/page'
import { BsArrowUp, BsArrowDown } from 'react-icons/bs'


const ResultsList = ({ raceResults }) => {
  const [showRaceResults, setShowRaceResults] = useState(false)
  const [showQualifyingResults, setShowQualifyingResults] = useState(false)
  const [showPracticeOneResults, setShowPracticeOneResults] = useState(false)
  const [showPracticeTwoResults, setShowPracticeTwoResults] = useState(false)
  const [showPracticeThreeResults, setShowPracticeThreeResults] = useState(false)
  

  return (
    <div className=''>
      {/* results accordions */}
      <div className="flex flex-col justify-center text-center">
        {/* race results */}
        <div onClick={() => setShowRaceResults(!showRaceResults)} className='flex flex-col bg-gray-400 pt-2 pb-2'>
          <div className="w-full md:w-8/12 text-xl md:text-2xl flex flex-row">
            {showRaceResults ? 
            <div className="basis-9/12 ml-4 mr-4">Hide Full Race Results</div>
            :
            <div className="basis-9/12 ml-4 mr-4">Show Full Race Results</div>
            }
            {showRaceResults ? 
            <div className="text-right basis-4 text-xl"><BsArrowUp/></div>
            :
            <div className="text-right basis-4 text-xl"><BsArrowDown /></div>
            }
          </div>
        </div>
        <div>
          {showRaceResults ? <DriverStandingsTable standings={raceResults}/> : null}
        </div>
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