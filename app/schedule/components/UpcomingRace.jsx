import Link from "next/link";
import NotificationButton from "./NotificationButton";

const UpcomingRace = ({ nextRace, justify, frontPage }) => {
  const currentDate = new Date();
  const raceDate = new Date(`${nextRace.date}T${nextRace.time}`);
  const timeUntilRace = raceDate - currentDate;
  const daysUntilRace = Math.floor(timeUntilRace / (1000 * 60 * 60 * 24));
  const hoursUntilRace = Math.floor(
    (timeUntilRace % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutesUntilRace = Math.floor(
    (timeUntilRace % (1000 * 60 * 60)) / (1000 * 60)
  );

  return (
    <div
      className={`w-full flex justify-${
        justify ? justify : "center"
      } text-center`}
    >
      <div
        className="w-full lg:w-2/3 grid border-4 bg-gray-500 dark:bg-slate-800 text-white pt-2 mt-2"
      >
        <div className="text-xl md:text-2xl flex justify-center relative">
          {frontPage ? <h3>Race Countdown</h3> : <Link
        href={`schedule/current/${nextRace.round}`}>{nextRace.raceName}</Link>}
          <div className="absolute right-8 text-xl">
            <NotificationButton />
          </div>
        </div>
        <Link
        href={`schedule/current/${nextRace.round}`} className="justify-self-center w-full md:w-8/12">
          <div className="grid grid-cols-3 mb-2 mt-1 divide-x-2 md:divide-x-4  justify-center">
            <div className="flex flex-col">
              <div>{daysUntilRace}</div>
              <div>Days</div>
            </div>
            <div className="flex flex-col">
              <div>{hoursUntilRace}</div>
              <div>Hours</div>
            </div>
            <div className="flex flex-col">
              <div>{minutesUntilRace}</div>
              <div>Minutes</div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default UpcomingRace;
