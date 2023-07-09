'use client' 

import ScheduleProvider from "./components/ScheduleProvider"

const StandingsLayout = ({children}) => {

  return (
    <div>
        <ScheduleProvider>
            {children}
        </ScheduleProvider>
    </div>
  )
}

export default StandingsLayout