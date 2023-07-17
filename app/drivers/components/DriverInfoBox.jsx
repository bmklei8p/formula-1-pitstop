import Image from "next/image"

const DriverInfoBox = ({ driver }) => {

  return (
    <div className="flex flex-col w-full gap-4 pl-4 pt-2">
        <div className="">
            <h3 className="text-xl md:text-2xl font-bold">Driver Info</h3>
            <ul className="ml-4 text-lg md:text-xl">
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
        </div>
        <div>
            <h3 className="text-xl md:text-2xl font-bold">Driver Stats</h3>
            <ul className="ml-4 text-lg md:text-xl">
              <li>World Championships: {driver.worldChampionships}</li>
              <li>Wins: {driver.wins}</li>
              <li>Pole Positions: {driver.polePositions}</li>
              <li>Highest Race Finish: {driver.highestRaceFinish}</li>
              <li>Career Points: {driver.careerPoints}</li>
            </ul>
        </div>
    </div>
  )
}

export default DriverInfoBox