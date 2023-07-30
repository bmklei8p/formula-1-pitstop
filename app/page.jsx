import Image from "next/image";
import RecentResults from "./components/RecentResults";
import BriefStandings from "./components/BriefStandings";
import BannerImageDesktop from '../public/assets/images/home-pit-stop-desktop.png'
import BannerImageMobile from '../public/assets/images/home-banner-mobile.png'
import { FaRegArrowAltCircleDown } from "react-icons/fa";

const OverviewPage = async () => {

  const getScheduleData = async () => {
    const res = await fetch("https://ergast.com/api/f1/current.json", { cache: 'no store'});
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
    console.log(typeof resultsRaceRound, resultsRaceRound)
    return { nextRace, nextRaceRound, resultsRace, resultsRaceRound}
  }

  const { nextRace, nextRaceRound, resultsRace, resultsRaceRound } = await getScheduleData();

  return (
    <div className="w-full flex flex-col items-center bg-[60 3.23% 12.16%] -z-50">
      <div className="hidden md:flex justify-center items-end lg:items-start relative -z-40 ">
        <div className="h-36 lg:h-56 xl:h-56 w-2/4 absolute z-40 flex flex-col justify-center items-center opacity-95">
          <h1 className=" text-4xl lg:text-6xl font-bold text-white z-10">
            Formula 1 Pitstop
          </h1>
          <p className="text-white text-3xl lg:text-5xl z-10 ">
            Your <strong>one-stop</strong> for F1
          </p>
        </div>
        <Image
          src={BannerImageDesktop}
          priority={true}
          alt="pit-stop"
          width={2670}
          height={1100}
          quality={75}
          placeholder="blur"
          className="-z-10 opacity-95"
          sizes="(min-width: 777px) 100vw"
        />
      <div className="absolute hidden xl:block xl:bottom-20 2xl:bottom-40 right-20 h-8">
          <div className="animate-bounce text-6xl text-[#b30600]">
              <FaRegArrowAltCircleDown />
          </div>
        </div>
      </div>
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
          width={1100}
          height={1100}
          className="-z-10 object-fill"
          placeholder="blur"
          sizes="(max-width: 777px) 100vw, 0vw"
        />
      </div>
      {/* Content */}
      <div className="w-full xl:w-9/12 flex flex-col gap-y-8 lg:flex-row lg:mt-4 mb-4 p-2 lg:p-0 gap-x-8 ">
        <div className="w-full">
          {/* Recent Results */}
          <RecentResults raceRound={resultsRaceRound} race={resultsRace} />
        </div>
        <div className="w-full">
          {/* Standings */}
          <BriefStandings />
        </div>
      </div>
    </div>
  );
};

export default OverviewPage;
