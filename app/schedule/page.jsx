'use client'

import UpcomingRace from 'app/schedule/components/UpcomingRace'
import UpcomingRaces from 'app/schedule/components/UpcomingRaces'
import PastRaces from 'app/schedule/components/PastRaces'
import { useScheduleContext } from './components/ScheduleProvider';

import { useState, useEffect } from 'react';

const SchedulePage = () => {
  const schedule = useScheduleContext();
  const [upcomingRaces, setUpcomingRaces] = useState([]);
  const [pastRaces, setPastRaces] = useState([]);
  const [nextRace, setNextRace] = useState(null);
  const [ showUpcomingRaces, setShowUpcomingRaces ] = useState(true);

  useEffect(() => {
    const currentDate = new Date();

    const upcoming = [];
    const past = [];

    for (let i = 0; i < schedule.length; i++) {
      const raceDate = new Date(schedule[i].date + 'T' + schedule[i].time);

      if (raceDate > currentDate) {
        upcoming.push(schedule[i]);
      } else {
        past.unshift(schedule[i]);  //bad time complexity but list is short
      }
    }

    setUpcomingRaces(upcoming.slice(1));
    past.unshift(upcoming[0]);
    setPastRaces(past);

    if (upcoming.length > 0) {
      setNextRace(upcoming[0]);
    } else if (past.length > 0) {
      setNextRace(null);
    }
  }, [schedule]);
  <h1 className='font-bold text-2xl md:text-3xl mb-4'>Constructors</h1>

  return (
      <div className="flex flex-col justify-center w-full md:w-9/12 text-center mt-4 mb-4">
          <h1 className="hidden text-4xl font-bold mb-4 md:block">{showUpcomingRaces ? "Upcoming Races": "Completed Races"}</h1>
          {/* mobile buttons */}
          <div className="flex justify-center md:hidden">
            <div className="basis-1/2" onClick={() => setShowUpcomingRaces(true)}>
              <button className={`${showUpcomingRaces ? `text-2xl font-bold md:text-3xl border-b-4 w-full border-red-500 rounded` : `text-xl`}`}>Upcoming Races</button>
            </div>
            <div className="basis-1/2" onClick={() => setShowUpcomingRaces(false)}>
              <button className={`${!showUpcomingRaces ? `text-2xl font-bold md:text-3xl border-b-4 w-full border-red-500 rounded` : `text-xl`}`}>Completed Races</button>
            </div>
          </div>
          {/* desktop buttons */}
          <div className="hidden justify-center md:flex">
            <div className="basis-1/2" onClick={() => setShowUpcomingRaces(true)}>
              <button className={`${showUpcomingRaces ? `text-2xl border-b-4 w-full border-red-500 rounded` : `text-xl`}`}>Upcoming Races</button>
            </div>
            <div className="basis-1/2" onClick={() => setShowUpcomingRaces(false)}>
              <button className={`${!showUpcomingRaces ? `text-2xl border-b-4 w-full border-red-500 rounded` : `text-xl`}`}>Completed Races</button>
            </div>
          </div>
          { nextRace && showUpcomingRaces ? <UpcomingRace nextRace={nextRace} /> : null}
          {upcomingRaces && pastRaces && showUpcomingRaces ? <UpcomingRaces races={upcomingRaces} /> : <PastRaces races={pastRaces} />}
     </div>
  );
};


export default SchedulePage;
