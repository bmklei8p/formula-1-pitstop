'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect } from "react"

const TeamsPage = () => {
  const [ constructorsStandings, setConstructorsStandings ] = useState([])
  const [ constructorsInformation, setConstructorsInformation ] = useState(null)


  // drivers standings api call from ergast
  useEffect(() => {
    const getConstructorsStandings = async () => {
        const res = await fetch('http://localhost:3000/api/standings/constructors')
        const data = await res.json()
        console.log(data)
        setConstructorsStandings(data)
        }
      getConstructorsStandings();
    }, []);


  // driver information api call from db
  useEffect(() => {
    const getConstructorsInformation = async () => {
      const res = await fetch('http://localhost:3000/api/constructors/mdb')
      const data = await res.json()
      // convert to map for faster lookup
      const constructorsMap = new Map();
      data.forEach(constructor => {
        constructorsMap.set(constructor.constructorId, constructor)})
        console.log({"constructorsMap": constructorsMap})
        setConstructorsInformation(constructorsMap)
    }
    getConstructorsInformation();
  }, [])

  // if (constructorsStandings || constructorsInformation) return null

  return (
    <div className='w-full mx-4 mt-4 md:w-3/4'>
      {/* card container */}
      <div className='flex justify-center'>
        <h1 className='font-bold text-2xl md:text-3xl'>2023 Formula 1 Teams</h1>
      </div>
      <div className='grid grid-cols-1 mx-3 gap-8 md:grid-cols-2'>
      {/* card   */}
      {constructorsStandings  && constructorsInformation && constructorsStandings.map((constructor, index) => {
          const constructorId = constructor.Constructor.constructorId;
          const constructorLogoURL = constructorsInformation.get(constructorId)['teamLogoURL'];
          const constructorCarURL = constructorsInformation.get(constructorId)['carURL'];
          const driverOne = constructorsInformation.get(constructorId)['driverOne'];
          const driverOneFirst = driverOne.split(' ')[0];
          const driverOneLast = driverOne.split(' ')[1];
          const driverTwo = constructorsInformation.get(constructorId)['driverTwo'];
          const driverTwoFirst = driverTwo.split(' ')[0];
          const driverTwoLast = driverTwo.split(' ')[1];
      return (
        <Link key={index} href={`constructors/${constructor.Constructor.constructorId}`}>
          {/* hidden div for tailwind border custom utility classes to be pre-loaded for driver color's next to name and on hover*/}
          <div className='hidden border-[#e20b20] border-[#368b74] border-[#6cd3c0] border-[#f91437] border-[#f5801f]
          border-[#2293d1] border-[#34bedd] border-[#b5babd] border-[#c92d4c] border-[#5e8fab]
           hover:border-[#e20b20] hover:border-[#368b74] hover:border-[#6cd3c0] hover:border-[#f91437] hover:border-[#f5801f]
          hover:border-[#2293d1] hover:border-[#34bedd] hover:border-[#b5babd] hover:border-[#c92d4c] hover:border-[#5e8fab]'>
            There has to be a better way to do this
          </div>
          <div className={`flex p-2 w-full flex-col border-t-2 border-r-2 border-black rounded-tr-lg`}>
            <div className='flex flex-row justify-between'>
              <div className='flex justify-center items-center font-bold text-3xl md:text-4xl'><h1>{index+1}</h1></div>
              <div className='flex flex-col'>
                <div className='text-center text-2xl md:text-3xl'>{constructor.points}</div>
                <div className='bg-black text-white font-bold px-2 rounded-lg mb-1'>POINTS</div>
              </div>
            </div>
            <div className='flex flex-row pt-2 pb-2 items-center justify-between border-t-2 border-b-2 border-black '  >
              <div className={`border-l-4 border-solid `}><h3 className='px-2 text-xl md:text-2xl font-bold'>{constructor.Constructor.name}</h3></div>
              <div className=' overflow-hidden relative w-12 h-12'><Image src={`/assets/images/logos/${constructorLogoURL}`} alt={`${constructor.Constructor.name} logo`} sizes="(max-width: 768px) 100vw" className='object-cover' fill={true}/></div>
            </div>
            <div className='flex flex-row w-full pt-2 pb-2 items-center gap-4'  >
              <div className={`basis-1/2 border-r-2 border-b-2 border-solid border-black rounded-br-lg `}>
                {/* split driver on two rows here- next */}
                <div>
                  <h3 className='flex flex-row'>
                    {driverOneFirst}
                    <strong className='text-l'>
                    {driverOneLast}
                    </strong>
                  </h3>
                </div>
              </div>
              <div className={`basis-1/2 border-r-2 border-b-2 border-solid border-black rounded-br-lg `}><h3 className='px-2'><strong className='text-l'>{driverOneLast}</strong></h3></div>
            </div>
            <div className='flex flex-row justify-between items-end'>
              <div className='overflow-hidden relative w-14 h-10'><Image className='object-cover' src={`/assets/images/cars/${constructorCarURL}`} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" alt={`${constructor.Constructor.name}'s car`} fill={true} /></div>
            </div>
          </div>
        </Link>
        )})}
    </div>
    </div>
  )
}

export default TeamsPage