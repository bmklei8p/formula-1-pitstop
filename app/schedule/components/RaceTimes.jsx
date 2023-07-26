'use client'
import { formatInTimeZone } from 'date-fns-tz';
import { useState } from 'react'

const RaceTimes = ({ race, trackTimezone }) => {
    const [showUserTimes, setShowUserTimes] = useState(false);  

    // all times here are in UTC timezone
    const practiceOneTime = formatInTimeZone(new Date(`${race.FirstPractice.date}T${race.FirstPractice.time}`), trackTimezone, 'HH:mm');
    const practiceTwoTime = formatInTimeZone(new Date(`${race.SecondPractice.date}T${race.SecondPractice.time}`), trackTimezone, 'HH:mm');
    const practiceThreeTime = formatInTimeZone(new Date(`${race.ThirdPractice.date}T${race.ThirdPractice.time}`), trackTimezone, 'HH:mm');
    const qualifyingTime = formatInTimeZone(new Date(`${race.Qualifying.date}T${race.Qualifying.time}`), trackTimezone, 'HH:mm');
    const raceTime = formatInTimeZone(new Date(`${race.date}T${race.time}`), trackTimezone, 'HH:mm');

    // convert to the time of the track's timezone


    // Convert times to user's timezone
    const userTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    const practiceOneTimeUserTZ = formatInTimeZone(new Date(`${race.FirstPractice.date}T${race.FirstPractice.time}`), userTimezone, 'HH:mm');
    const practiceTwoTimeUserTZ = formatInTimeZone(new Date(`${race.SecondPractice.date}T${race.SecondPractice.time}`), userTimezone, 'HH:mm');
    const practiceThreeTimeUserTZ = formatInTimeZone(new Date(`${race.ThirdPractice.date}T${race.ThirdPractice.time}`), userTimezone, 'HH:mm');
    const qualifyingTimeUserTZ = formatInTimeZone(new Date(`${race.Qualifying.date}T${race.Qualifying.time}`), userTimezone, 'HH:mm');
    const raceTimeUserTZ = formatInTimeZone(new Date(`${race.date}T${race.time}`), userTimezone, 'HH:mm');


  return (
    <div className="flex flex-col border-r-4 border-t-4 border-black max-w-xl rounded-tr-lg w-full md:w-3/4">
        <div className="w-full pt-2 flex flex-row justify-between">
          <div className='text-xl md:text-2xl font-bold text-left'>Weekend Schedule</div>
          <div className='flex flex-row gap-x-2 pr-4'>
            <button className={showUserTimes ? 'border-b-2 border-red-500 font-bold' : ''} onClick={() => setShowUserTimes(true)} >
              My Times
            </button>
            <button className={!showUserTimes ? 'border-b-2 border-red-500 font-bold' : ''} onClick={() => setShowUserTimes(false)}>
              Track Times
            </button>
          </div>
        </div>
        {/* <div className='px-4 '>
          <h2 className='text-lg'>July 31  - 02 </h2>
        </div> */}
        <div className="flex flex-col gap-2 px-4 py-2">
            <div className="flex flex-row text-lg hover:bg-gray-400">
                <div className="w-full text-left">Practice 1</div>
                <div className="basis-1/2 text-center">Fri</div>
                <div className="basis-1/4 text-right">{showUserTimes ? practiceOneTimeUserTZ : practiceOneTime}</div>
            </div>
            <div className="flex flex-row text-lg hover:bg-gray-400">
                <div className="w-full text-left">Practice 2</div>
                <div className="basis-1/2 text-center">Fri</div>
                <div className="basis-1/4 text-right">{showUserTimes ? practiceTwoTimeUserTZ : practiceTwoTime}</div>
            </div>
            <div className="flex flex-row text-lg hover:bg-gray-400">
                <div className="w-full text-left">Practice 3</div>
                <div className="basis-1/2 text-center">Sat</div>
                <div className="basis-1/4 text-right">{showUserTimes ? practiceThreeTimeUserTZ : practiceThreeTime}</div>
            </div>
            <div className="flex flex-row text-lg hover:bg-gray-400">
                <div className="w-full text-left">Qualifying</div>
                <div className="basis-1/2 text-center">Sat</div>
                <div className="basis-1/4 text-right">{showUserTimes ? qualifyingTimeUserTZ : qualifyingTime}</div>
            </div>
            <div className="flex flex-row text-lg hover:bg-gray-400">
                <div className="w-full text-left">Race</div>
                <div className="basis-1/2 text-center">Sun</div>
                <div className="basis-1/4 text-right">{showUserTimes ? raceTimeUserTZ : raceTime}</div>
            </div>
        </div>
    </div>
  )
}

export default RaceTimes