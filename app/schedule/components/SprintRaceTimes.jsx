'use client'
import { formatInTimeZone } from 'date-fns-tz';
import { useState } from 'react'

const SprintRaceTimes = ({ race, trackTimeZone }) => {
  const [showUserTimes, setShowUserTimes] = useState(true)

    const practiceOneTime = formatInTimeZone(new Date(`${race.FirstPractice.date}T${race.FirstPractice.time}`), trackTimeZone, 'HH:mm');
    const qualifyingTime = formatInTimeZone(new Date(`${race.Qualifying.date}T${race.Qualifying.time}`), trackTimeZone, 'HH:mm');
    const sprintShootoutTime = formatInTimeZone(new Date(`${race.SecondPractice.date}T${race.SecondPractice.time}`), trackTimeZone, 'HH:mm');
    const sprintTime = formatInTimeZone(new Date(`${race.Sprint.date}T${race.Sprint.time}`), trackTimeZone, 'HH:mm');
    const raceTime = formatInTimeZone(new Date(`${race.date}T${race.time}`), trackTimeZone, 'HH:mm');

    // Convert times to user's timezone
    const userTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    const practiceOneTimeUserTZ = formatInTimeZone(new Date(`${race.FirstPractice.date}T${race.FirstPractice.time}`), userTimezone, 'HH:mm');
    const qualifyingTimeUserTZ = formatInTimeZone(new Date(`${race.Qualifying.date}T${race.Qualifying.time}`), userTimezone, 'HH:mm');
    const sprintShootoutTimeUserTZ = formatInTimeZone(new Date(`${race.SecondPractice.date}T${race.SecondPractice.time}`), userTimezone, 'HH:mm');
    const sprintTimeUserTz = formatInTimeZone(new Date(`${race.Sprint.date}T${race.Sprint.time}`), userTimezone, 'HH:mm');
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
        <div className="flex flex-col gap-2 px-4 py-2">
            <div className="flex flex-row text-lg hover:bg-gray-400">
                <div className="w-full text-left">Practice 1</div>
                <div className="basis-1/2 text-right">Fri</div>
                <div className="basis-1/4 text-right">{showUserTimes ? practiceOneTimeUserTZ : practiceOneTime}</div>
            </div>
            <div className="flex flex-row text-lg hover:bg-gray-400">
                <div className="basis-1/2 text-left">Qualifying</div>
                <div className="w-full text-right">Fri</div>
                <div className="basis-1/4 text-right">{showUserTimes ? qualifyingTimeUserTZ : qualifyingTime}</div>
            </div>
            <div className="flex flex-row text-lg hover:bg-gray-400">
                <div className="w-full text-left">Sprint Shootout</div>
                <div className="basis-1/2 text-right">Sat</div>
                <div className="basis-1/4 text-right">{showUserTimes ? sprintShootoutTimeUserTZ : sprintShootoutTime}</div>
            </div>
            <div className="flex flex-row text-lg hover:bg-gray-400">
                <div className="basis-1/2 text-left">Sprint</div>
                <div className="w-full text-right">Sat</div>
                <div className="basis-1/4 text-right">{showUserTimes ? sprintTimeUserTz : sprintTime}</div>
            </div>
            <div className="flex flex-row text-lg hover:bg-gray-400">
                <div className="basis-1/2 text-left">Race</div>
                <div className="w-full text-right">Sun</div>
                <div className="basis-1/4 text-right">{showUserTimes ? raceTimeUserTZ : raceTime}</div>
            </div>
        </div>
    </div>
  )
}

export default SprintRaceTimes