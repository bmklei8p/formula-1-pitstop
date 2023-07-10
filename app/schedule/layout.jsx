'use client'

import ScheduleProvider from "./components/ScheduleProvider"

const StandingsLayout = ({children}) => {

  return (
    <div className="w-full flex justify-center">
        <ScheduleProvider>
            {children}
        </ScheduleProvider>
    </div>
  )
}

export default StandingsLayout