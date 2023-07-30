'use client'
import { createContext, useContext } from "react"

const ScheduleContext = createContext()

export const useScheduleContext = () => useContext(ScheduleContext)

import { useState, useEffect } from "react"


const ScheduleProvider = ({ children }) => {
    const [schedule, setSchedule] = useState([])

    useEffect(() => {
    const getRaceSchedule = async () => {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/schedule/season`, { cache: 'no store'})
        const data = await res.json()
        setSchedule(data);
        }
        getRaceSchedule();
    }, []);

  return (
    <ScheduleContext.Provider value={schedule}>
        {children}
    </ScheduleContext.Provider>
  )
}

export default ScheduleProvider;