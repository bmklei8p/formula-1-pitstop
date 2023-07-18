import Image from "next/image"

const DriverInfoBox = ({ driver }) => {

  return (
    <div className="flex flex-col w-full gap-4 pl-4 pt-2">
        <div className="">
            <h3 className="text-xl md:text-2xl font-bold">Driver Info</h3>
            <ul className="ml-4 text-lg md:text-xl">
                <li>Place of birth: {driver.placeOfBirth}</li>
                <li>Date of birth: {driver.dateOfBirth}</li>
                <li>Team: {driver.team}</li>
                <li></li>
            </ul>
        </div>
        <div>
            <h3 className="text-xl md:text-2xl font-bold">Driver Stats</h3>
            <ul className="ml-4 text-lg md:text-xl">
              <li>World Championships: {driver.worldChampionships}</li>
              <li>Wins: {driver.wins}</li>
              <li>Podiums: {driver.podiums}</li>
              <li>Highest race finish: {driver.highestRaceFinish}</li>
              <li>Career points: {driver.careerPoints}</li>
              <li>Grand Prix Entered: {driver.grandPrixEntered}</li>
            </ul>
        </div>
    </div>
  )
}

export default DriverInfoBox