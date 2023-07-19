const SprintRaceTimes = ({ race }) => {
  const handleTime = (time) => {
    const timeArray = time.split(':')
    const hour = timeArray[0]
    const minute = timeArray[1]
    return `${hour}:${minute}`
    }

    const practiceOneTime = handleTime(race.FirstPractice.time);
    const sprintTime = handleTime(race.Sprint.time)
    const qualifyingTime = handleTime(race.Qualifying.time);
    const raceTime = handleTime(race.time);


  return (
    <div className="flex flex-col justify-center text-center w-full mt-8 md:w-3/4">
        <div className="text-xl md:text-2xl text-left text-red-500">Weekend Schedule</div>
        <div className="bg-gray-300 flex flex-col gap-2 px-4 py-2">
            <div className="flex flex-row text-lg hover:bg-gray-400">
                <div className="basis-1/2 text-left">Practice 1</div>
                <div className="w-full text-right">Fri</div>
                <div className="basis-1/4 text-right">{practiceOneTime}</div>
            </div>
            <div className="flex flex-row text-lg hover:bg-gray-400">
                <div className="basis-1/2 text-left">Qualifying</div>
                <div className="w-full text-right">Fri</div>
                <div className="basis-1/4 text-right">{qualifyingTime}</div>
            </div>
            <div className="flex flex-row text-lg hover:bg-gray-400">
                <div className="basis-1/2 text-left">Sprint Shootout</div>
                <div className="w-full text-right">Sat</div>
                <div className="basis-1/4 text-right">{sprintTime}</div>
            </div>
            <div className="flex flex-row text-lg hover:bg-gray-400">
                <div className="basis-1/2 text-left">Sprint</div>
                <div className="w-full text-right">Sat</div>
                <div className="basis-1/4 text-right">{sprintTime}</div>
            </div>
            <div className="flex flex-row text-lg hover:bg-gray-400">
                <div className="basis-1/2 text-left">Race</div>
                <div className="w-full text-right">Sun</div>
                <div className="basis-1/4 text-right">{raceTime}</div>
            </div>
        </div>
    </div>
  )
}

export default SprintRaceTimes