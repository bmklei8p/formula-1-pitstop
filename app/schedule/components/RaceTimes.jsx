'use client'
import { format, parseISO, formatInTimeZone } from 'date-fns-tz';
import { useState } from 'react'

const RaceTimes = ({ race }) => {
  const [showUserTimes, setShowUserTimes] = useState(true)

  const handleTime = (time) => {
    const timeArray = time.split(':')
    const hour = timeArray[0]
    const minute = timeArray[1]
    return `${hour}:${minute}`
    }
    // all times here are in track timezone
    const practiceOneTime = handleTime(race.FirstPractice.time);
    const practiceTwoTime = handleTime(race.SecondPractice.time);
    const practiceThreeTime = handleTime(race.ThirdPractice.time);
    const qualifyingTime = handleTime(race.Qualifying.time);
    const raceTime = handleTime(race.time);
    // these times are for the user's timezone
      // Get user's timezone offset
      const userTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
      // const firstPraceTimeDateFormat = new Date(`${race.FirstPractice.date}T${race.FirstPractice.time}`)
      // const current = new Date(race.FirstPractice.date)
      // console.log(current)
      // console.log(race.FirstPractice.time)
      // console.log(userTimezone)
      // const timeInParis = formatInTimeZone(current, 'Europe/Paris', 'HH:mm');
      // console.log(timeInParis)

      // Convert times to user's timezone
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
            <button className={showUserTimes ? 'border-b-2 border-red-500' : ''} onClick={() => setShowUserTimes(true)} >
              My Times
            </button>
            <button className={!showUserTimes ? 'border-b-2 border-red-500' : ''} onClick={() => setShowUserTimes(false)}>
              Track Times
            </button>
          </div>
        </div>
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