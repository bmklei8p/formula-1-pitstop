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
      <div className="flex flex-col justify-center text-center mt-6">
        {/* race results */}
        <div onClick={() => setShowRaceResults(!showRaceResults)} className='flex flex-col border-2 border-gray-500 bg-slate-300 pt-2 pb-2'>
          <div className="w-full flex flex-row justify-center text-xl md:text-2xl ">
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
            <div className="basis-1/2">
              <h1 className='text-xl md:text-2xl'>Drivers</h1>
            </div>
            <div className="basis-1/2">
              <h1 className='text-xl md:text-2xl'>Constructors</h1>
            </div>
          </div>
          {/* show appropriate table based on showDriversStandings */}
          <div className={`flex flex-col justify-center md:hidden`}>
            {showDriversStandings ? <DriverStandingsTable standings={raceResults} /> : <ConstructorSingleRaceStandingsTable standings={raceResults} />}
          </div>
          <div className="hidden md:flex md:flex-row">
              <DriverStandingsTable standings={raceResults} />
              <ConstructorSingleRaceStandingsTable standings={raceResults} />
            </div>
        </div>
         : null}
        {/* Qualifying results */}
        <div onClick={() => setShowQualifyingResults(!showQualifyingResults)} className='flex flex-col mt-4 border-2 border-gray-500 bg-slate-300 pt-2 pb-2'>
          <div className="w-full flex flex-row justify-center text-xl md:text-2xl ">
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
      </div>
  )
}

export default ResultsList


// return (
//   <div className="flex flex-col justify-center text-center mt-6">
//     {/* race results */}
//     <div onClick={() => setShowRaceResults(!showRaceResults)} className='flex flex-col mb-4 border-2 border-gray-500 bg-gray-300 pt-2 pb-2'>
//       <div className="w-full flex flex-row md:justify-center text-xl md:text-2xl ">
//         {showRaceResults ?
//         <>
//           <div className="basis-9/12 md:basis-1/2 ml-4 mr-4">Hide Race Results</div>
//           <div className="flex justify-center basis-8 text-xl"><BsChevronUp/></div>
//         </> :
//         <div className="basis-9/12 md:basis-1/2 ml-4 mr-4">Show Full Race Results</div>}
//         {showRaceResults ?
//         <div className="flex justify-center basis-8 text-xl"><BsChevronUp/></div> :
//         <div className="flex justify-center basis-8 text-xl"><BsChevronDown /></div>}
//       </div>
//     </div>
//     {showRaceResults ?
//     <div className='flex flex-col md:flex-col'>
//       {/* mobile buttons */}
//       <div className="flex justify-center md:hidden">
//         <div className="basis-1/2" onClick={() => setShowDriversStandings(true)}>
//           <button className={`${showDriversStandings ? `text-2xl border-b-4 w-full border-red-500 rounded` : `text-xl`}`}>Drivers</button>
//         </div>
//         <div className="basis-1/2" onClick={() => setShowDriversStandings(false)}>
//           <button className={`${!showDriversStandings ? `text-2xl border-b-4 w-full border-red-500 rounded` : `text-xl`}`}>Constructors</button>
//         </div>
//       </div>
//       {/* desktop buttons */}
//       <div className="hidden justify-center md:flex">
//         <div className="basis-1/2">
//           <h1 className='text-xl md:text-2xl'>Drivers</h1>
//         </div>
//         <div className="basis-1/2">
//           <h1 className='text-xl md:text-2xl'>Constructors</h1>
//         </div>
//       </div>
//       <div className={`flex flex-col-reverse justify-center ${showDriversStandings ? `md:flex-row md:align-center` : `md:flex-row-reverse md:align-center`}`}>
//         {/* show appropriate table based on showDriversStandings */}
//         {showDriversStandings ? <DriverStandingsTable standings={raceResults} /> : <ConstructorSingleRaceStandingsTable className=" md:hidden " standings={raceResults} />}
//       </div>
//     </div>
//      : null}
//      {/* <div className='hidden md:block'>
//       {showRaceResults ? <ConstructorSingleRaceStandingsTable standings={raceResults}/> : null}
//      </div> */}
//     {/* Qualifying results */}
//     <div onClick={() => setShowQualifyingResults(!showQualifyingResults)} className='flex flex-col border-2 transition-shadow border-gray-500 bg-gray-300 pt-2 pb-2'>
//       <div className="w-full md:w-8/12 text-xl md:text-2xl flex flex-row">
//           {showQualifyingResults ?
//           <div className="basis-9/12 ml-4 mr-4">Hide Qualifying Results</div> :
//           <div className="basis-9/12 ml-4 mr-4">Show Qualifying Results</div>}
//           {showQualifyingResults ?
//           <div className="flex justify-center basis-8 text-xl"><BsChevronUp/></div> :
//           <div className="flex justify-center basis-8 text-xl"><BsChevronDown /></div>}
//       </div>
//     </div>
//   </div>
// )
// }

// export default ResultsList