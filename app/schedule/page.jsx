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

    setUpcomingRaces(upcoming);
    setPastRaces(past);

    if (upcoming.length > 0) {
      setNextRace(upcoming[0]);
    } else if (past.length > 0) {
      setNextRace(null);
    }
  }, [schedule]);

  return (
     <>
          { nextRace ? <UpcomingRace nextRace={nextRace} /> : null}
          {showUpcomingRaces ? <UpcomingRaces /> : <PastRaces />}
     </>
  );
};

export default SchedulePage;
