'use client'
import { createContext, useContext } from "react"

const ScheduleContext = createContext()

export const useScheduleContext = () => useContext(ScheduleContext)

import { useState, useEffect } from "react"


const ScheduleProvider = ({ children }) => {
    const [schedule, setSchedule] = useState([])

    useEffect(() => {
    const getRaceSchedule = async () => {
        const res = await fetch('http://localhost:3000/api/schedule/season')
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