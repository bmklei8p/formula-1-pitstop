const UpcomingRace = ({ nextRace }) => {
  const currentDate = new Date();
  const raceDate = new Date(nextRace.date);
  const timeUntilRace = raceDate - currentDate;
  const daysUntilRace = Math.floor(timeUntilRace / (1000 * 60 * 60 * 24));
  const hoursUntilRace = Math.floor(
    (timeUntilRace % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutesUntilRace = Math.floor(
    (timeUntilRace % (1000 * 60 * 60)) / (1000 * 60)
  );

  return (
    <div className="w-full flex flex-col justify-center border-4 bg-black text-white ">
      <div>
        {nextRace.raceName}
      </div>
      <div className="flex justify-center mb-2 mt-1">
          <div>
            {daysUntilRace} Days :{' '}
          </div>
          <div>
            {hoursUntilRace} Hours :{' '}
          </div>
          <div>
            {minutesUntilRace} Minutes
          </div>
        </div>
    </div>
  )
}

export default UpcomingRace