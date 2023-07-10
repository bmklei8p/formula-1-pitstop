const RaceTimes = ({ race }) => {
  return (
    <div className="flex flex-col justify-center text-center w-full mt-8 md:w-3/4">
        <div className="text-xl md:text-2xl text-left text-red-500">Weekend Schedule</div>
        <div className="bg-gray-300 flex flex-col">
        <div className="flex flex-row">
                <div className="basis-1/2 text-left">Practice 1</div>
                <div className="basis-1/2 text-right">Time</div>
            </div>
            <div className="flex flex-row">
                <div className="basis-1/2 text-left">Practice 2</div>
                <div className="basis-1/2 text-right">Time</div>
            </div>
            <div className="flex flex-row">
                <div className="basis-1/2 text-left">Practice 3</div>
                <div className="basis-1/2 text-right">Time</div>
            </div>
            <div className="flex flex-row">
                <div className="basis-1/2 text-left">Qualifying</div>
                <div className="basis-1/2 text-right">Time</div>
            </div>
            <div className="flex flex-row">
                <div className="basis-1/2 text-left">Race</div>
                <div className="basis-1/2 text-right">Time</div>
            </div>
        </div>
    </div>
  )
}

export default RaceTimes