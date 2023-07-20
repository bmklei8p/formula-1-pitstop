
const TrackInfoBox = ({ track }) => {

  return (
    <div className="flex flex-col w-full gap-4 pt-2 border-t-4 border-r-4 rounded-tr-lg border-black ">
        <div className="">
            <h3 className="text-xl md:text-2xl font-bold">Track Info</h3>
            <ul className="ml-4 text-lg md:text-xl">
                <li>First Entry: {track.trackStartDate}</li>
                <li>Race Distance: {track.raceDistance}</li>
                <li>Number of Laps: {track.numberOfLaps}</li>
            </ul>
        </div>
        <div>
            <h3 className="text-xl md:text-2xl font-bold">Fastest Lap</h3>
            <ul className="ml-4 text-lg md:text-xl">
              <li>Time: {track.fastestLapTime}</li>
              <li>Driver: {track.fastestLapDriver}</li>
              <li>Team: {track.fastestLapTeam}</li>
              <li>Year: {track.fastestLapYear}</li>
            </ul>
        </div>
    </div>
  )
}

export default TrackInfoBox