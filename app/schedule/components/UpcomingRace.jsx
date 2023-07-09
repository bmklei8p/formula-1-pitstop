'use client'

import { useScheduleContext } from "./ScheduleProvider"

const UpcomingRace = ({ nextRace }) => {

  return (
    <div>
        <p>{nextRace.raceName}</p>
    </div>
  )
}

export default UpcomingRace