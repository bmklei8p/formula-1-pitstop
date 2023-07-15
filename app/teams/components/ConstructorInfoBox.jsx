
const ConstructorInfoBox = ({ constructor }) => {

  return (
    <div className="flex flex-col w-full gap-4 pl-4 pt-2">
        <div className="">
            <h3 className="text-xl md:text-2xl font-bold">Team Info</h3>
            <ul className="ml-4 text-lg md:text-xl">
                <li>Team Principal: {constructor.teamChief}</li>
                <li>Technical Chief: {constructor.technicalChief}</li>
                <li>Chassis: {constructor.chassis}</li>
                <li>Power Unit: {constructor.powerUnit}</li>
            </ul>
        </div>
        <div>
            <h3 className="text-xl md:text-2xl font-bold">Team Stats</h3>
            <ul className="ml-4 text-lg md:text-xl">
                <li>First Team Entry: {constructor.firstEntry}</li>
                <li>World Championships: {constructor.worldChampionships}</li>
                <li>Pole Positions: {constructor.polePositions}</li>
                <li>Highest Race Finish: {constructor.highestRaceFinish}</li>
            </ul>
        </div>
    </div>
  )
}

export default ConstructorInfoBox