'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect } from "react"

const TeamsPage = () => {
  const [constructorsStandings, setConstructorsStandings] = useState([])
  const [constructorsInformation, setConstructorsInformation] = useState(null)


  // drivers standings api call from ergast
  useEffect(() => {
    const getConstructorsStandings = async () => {
      const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/standings/constructors`)
      const data = await res.json()
      setConstructorsStandings(data)
    }
    getConstructorsStandings();
  }, []);


  // driver information api call from db
  useEffect(() => {
    const getConstructorsInformation = async () => {
      const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/constructors/mdb`)
      const data = await res.json()
      // convert to map for faster lookup
      const constructorsMap = new Map();
      data.forEach(constructor => {
        constructorsMap.set(constructor.constructorId, constructor)
      })
      setConstructorsInformation(constructorsMap)
    }
    getConstructorsInformation();
  }, [])


  return (
    <div className='w-full mx-4 mt-4 md:w-3/4'>
      {/* card container */}
      <div className='flex justify-center'>
        <h1 className='font-bold text-2xl md:text-3xl mb-4'>2023 Formula 1 Teams</h1>
      </div>
      <div className='grid grid-cols-1 mx-3 gap-8 lg:grid-cols-2 lg:gap-16'>
        {/* card   */}
        {constructorsStandings && constructorsInformation && constructorsStandings.map((constructor, index) => {
          const constructorId = constructor.Constructor.constructorId;
          const constructorCarURL = constructorsInformation.get(constructorId)['carURL'];
          const driverOne = constructorsInformation.get(constructorId)['driverOne'];
          const driverOneFirst = driverOne.split(' ')[0];
          const driverOneLast = driverOne.split(' ')[1];
          const driverTwo = constructorsInformation.get(constructorId)['driverTwo'];
          const driverTwoFirst = driverTwo.split(' ')[0];
          const driverTwoLast = driverTwoFirst === "Nyck" ? "de Vries" : driverTwo.split(' ')[1];
          const color = constructorsInformation.get(constructorId)['color'];
          // const _id = constructorsInformation.get(constructorId)['_id'];
          return (
            <Link key={index} href={`teams/${constructorId}`}>
              {/* hidden div for tailwind border custom utility classes to be pre-loaded for driver color's next to name and on hover*/}
              <div className='hidden border-[#3471c5] border-[#6cd3be] border-[#358c75] border-[#f91435] border-[#f5801f]
          border-[#2293d2] border-[#37bedd] border-[#b6babd] border-[#c92d4b] border-[#5e8faa]
           hover:border-[#3471c5] hover:border-[#6cd3be] hover:border-[#358c75] hover:border-[#f91435] hover:border-[#f5801f]
          hover:border-[#2293d2] hover:border-[#37bedd] hover:border-[#b6babd] hover:border-[#c92d4b] hover:border-[#5e8faa]'>
                There has to be a better way to do this
              </div>
              <div className={`flex p-2 w-full flex-col border-t-2 border-r-2 border-black rounded-tr-lg hover:border-[${color}] hover:border-t-4 hover:border-r-4 `}>
                <div className='flex flex-row justify-between'>
                  <div className='flex justify-center items-center font-bold text-3xl md:text-4xl'><h1>{index + 1}</h1></div>
                  <div className='flex flex-col'>
                    <div className='text-center text-2xl md:text-3xl'>{constructor.points}</div>
                    <div className='bg-black text-white font-bold px-2 rounded-lg mb-1'>POINTS</div>
                  </div>
                </div>
                <div className={`flex flex-row pt-2 pb-2 items-center justify-between border-t-2 border-b-2 border-black`}  >
                  <div className={`border-l-4 border-solid border-[${color}]`}><h3 className='px-2 text-xl md:text-2xl font-bold'>{constructor.Constructor.name}</h3></div>
                  <div className=' overflow-hidden relative w-12 h-12'><Image src={`/assets/images/logo/${constructorId}_logo.avif`} alt={`${constructor.Constructor.name} logo`} sizes="(max-width: 768px) 100vw" className='object-cover' fill={true} /></div>
                </div>
                <div className='flex flex-row w-full pt-2 pb-2 items-center gap-4'  >
                  <div className={`basis-1/2 border-r-2 border-b-2 border-solid border-black rounded-br-lg `}>
                    {/* split driver on two rows here- next */}
                    <div className='flex flex-col md:flex-row md:gap-1'>
                      <h3 className='text-lg'>
                        {driverOneFirst}
                      </h3>
                      <strong className='text-lg'>
                        {driverOneLast}
                      </strong>
                    </div>
                  </div>
                  <div className={`basis-1/2 border-r-2 border-b-2 border-solid border-black rounded-br-lg `}>
                    {/* split driver on two rows here- next */}
                    <div className='flex flex-col md:flex-row md:gap-1'>
                      <h3 className='text-lg'>
                        {driverTwoFirst}
                      </h3>
                      <strong className='text-lg'>
                        {driverTwoLast}
                      </strong>
                    </div>
                  </div>
                </div>
                <div className='w-full flex justify-center'>
                  <div className='overflow-hidden relative w-full lg:w-11/12 h-24 md:h-32 '><Image className='object-contain' src={`/assets/images/cars/${constructorCarURL}`} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw" alt={`${constructor.Constructor.name}'s car`} fill={true} /></div>
                </div>
              </div>
            </Link>
          )
        })}
      </div>
    </div>
  )
}
// h-24 sm:h-32 md:h-32 lg:h-40

export default TeamsPage