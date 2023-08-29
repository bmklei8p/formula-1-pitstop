import Image from "next/image";
import RecentResults from "./components/RecentResults";
import BriefStandings from "./components/BriefStandings";
import BannerImageDesktop from '../public/assets/images/home-pit-stop-desktop-cropped.png'
import BannerImageMobile from '../public/assets/images/home-banner-mobile.png'
import TwitterTimeLine from "./components/TwitterTimeline";
// import { FaRegArrowAltCircleDown } from "react-icons/fa";

const getScheduleData = async () => {
  const res = await fetch("https://ergast.com/api/f1/current.json", { cache: 'no-store' }
  );
  const data = await res.json();
  const schedule = data.MRData.RaceTable.Races;
  const currentDateTime = new Date();
  const upcomingRaces = [];
  const pastRaces = [];
  for (let i = 0; i < schedule.length; i++) {
    // results of previous week will not switch over until first practice of the next race weekend
    const raceDate = new Date(
      schedule[i].FirstPractice.date + "T" + schedule[i].FirstPractice.time
    );

    if (raceDate > currentDateTime) {
      upcomingRaces.push(schedule[i]);
    } else {
      pastRaces.unshift(schedule[i]); //bad time complexity but list is short
    }
  }
  const nextRace = upcomingRaces[0];
  const nextRaceRound = nextRace.round;
  const resultsRace = pastRaces[0];
  const resultsRaceRound = resultsRace.round;
  return { nextRace, nextRaceRound, resultsRace, resultsRaceRound}
}

const OverviewPage = async () => {

  const { nextRace, nextRaceRound, resultsRace, resultsRaceRound } = await getScheduleData();

  return (
    <div className="w-full flex flex-col items-center bg-[60 3.23% 12.16%] -z-50">
      {/* Desktop Banner Image */}
      <div className="hidden md:flex justify-center items-end lg:items-start relative -z-40 ">
        <div className="h-36 lg:h-56 xl:h-56 w-2/4 absolute z-40 flex flex-col justify-center items-center opacity-95">
          <h1 className=" text-4xl lg:text-6xl font-bold text-white z-10">
            Formula 1 Pitstop
          </h1>
          <p className="text-white text-3xl lg:text-5xl z-10 ">
            Your <strong>one-stop</strong> for F1
          </p>
        </div>
        <div className="">
          <Image
            src={BannerImageDesktop}
            priority={true}
            alt="pit-stop"
            width={2000}
            height={1170}
            quality={25}
            placeholder="blur"
            className="-z-10 opacity-95"
            sizes="(min-width: 777px) 100vw"
          />
        </div>
      </div>
      {/* Mobile Banner Image */}
      <div className="flex max-h-[80vh] md:hidden overflow-clip relative justify-center items-end -z-40 ">
        <div className="h-26 w-full absolute z-40 flex flex-col justify-end py-2 items-center bg-gradient-to-t opacity-75 to-[#494949] from-[#2b2b2b]">
          <h1 className="text-white font-bold text-4xl">Formula 1 Pitstop</h1>
          <p className="text-white text-3xl">
            Your <strong>one-stop</strong> for F1
          </p>
        </div>
        <Image
          src={BannerImageMobile}
          priority={true}
          alt="pit-stop"
          width={750}
          height={422}
          className="-z-10 object-fill"
          placeholder="blur"
          sizes="(max-width: 777px) 100vw, 0vw"
          quality={25}
        />
      </div>
      {/* Content */}
      <div className="w-full xl:w-9/12 flex flex-col gap-y-8 lg:flex-row lg:mt-4 mb-4 p-2 lg:p-0 gap-x-8 justify-evenly">
        <div className="flex flex-col gap-y-8 w-full">
          <div className="basis-1/2">
            {/* Recent Results */}
            <RecentResults raceRound={resultsRaceRound} race={resultsRace} />
          </div>
          <div className="basis-1/2">
            {/* Standings */}
            <BriefStandings />
          </div>
        </div>
        <div className="flex justify-center overflow-hidden w-full" >
          <TwitterTimeLine twitterHandle={"f1"} height={"1000px"} />
        </div>
      </div>
    </div>
  );
};

export default OverviewPage;


