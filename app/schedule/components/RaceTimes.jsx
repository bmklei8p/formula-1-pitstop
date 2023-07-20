const RaceTimes = ({ race }) => {
  const handleTime = (time) => {
    const timeArray = time.split(':')
    const hour = timeArray[0]
    const minute = timeArray[1]
    return `${hour}:${minute}`
    }

    const practiceOneTime = handleTime(race.FirstPractice.time);
    const practiceTwoTime = handleTime(race.SecondPractice.time);
    const practiceThreeTime = handleTime(race.ThirdPractice.time);
    const qualifyingTime = handleTime(race.Qualifying.time);
    const raceTime = handleTime(race.time);


  return (
    <div className="flex flex-col border-r-4 border-t-4 border-black max-w-xl rounded-tr-lg w-full md:w-3/4">
        <div className="text-xl md:text-2xl font-bold text-left">Weekend Schedule</div>
        <div className="flex flex-col gap-2 px-4 py-2">
            <div className="flex flex-row text-lg hover:bg-gray-400">
                <div className="basis-1/2 text-left">Practice 1</div>
                <div className="w-full text-right">Fri</div>
                <div className="basis-1/4 text-right">{practiceOneTime}</div>
            </div>
            <div className="flex flex-row text-lg hover:bg-gray-400">
                <div className="basis-1/2 text-left">Practice 2</div>
                <div className="w-full text-right">Fri</div>
                <div className="basis-1/4 text-right">{practiceTwoTime}</div>
            </div>
            <div className="flex flex-row text-lg hover:bg-gray-400">
                <div className="basis-1/2 text-left">Practice 3</div>
                <div className="w-full text-right">Sat</div>
                <div className="basis-1/4 text-right">{practiceThreeTime}</div>
            </div>
            <div className="flex flex-row text-lg hover:bg-gray-400">
                <div className="basis-1/2 text-left">Qualifying</div>
                <div className="w-full text-right">Sat</div>
                <div className="basis-1/4 text-right">{qualifyingTime}</div>
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

export default RaceTimes