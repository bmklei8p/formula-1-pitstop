import Image from 'next/image'
import Link from 'next/link'

const DriversPage = () => {
  const getDrivers = async () => {
    const driverInformation = await fetch('')
  }
  const drivers = [
    {
      "driverId": "albon",
      "permanentNumber": "23",
      "code": "ALB",
      "url": "http://en.wikipedia.org/wiki/Alexander_Albon",
      "givenName": "Alexander",
      "familyName": "Albon",
      "dateOfBirth": "1996-03-23",
      "nationality": "Thai",
      "driverHeadshotImage": "albon_front.png",
      "flagImage": "thailand_flag.avif",
      "team": "Williams",
      "carNumber": "23",
      "podiums": "2",
      "placeOfBirth": "London, England",
      "highestGridPosition": "4",
      "highestRaceFinish": "3x2",
      "wins": "0",
      "points": "212"
  }, 
  {
    "driverId": "alonso",
    "permanentNumber": "14",
    "code": "ALO",
    "url": "http://en.wikipedia.org/wiki/Fernando_Alonso",
    "givenName": "Fernando",
    "familyName": "Alonso",
    "dateOfBirth": "1981-07-29",
    "nationality": "Spanish",
    "driverHeadshotImage": "alosno_front.png",
    "flagImage": "Spain_flag.svg",
    "team": "Aston Martin",
    "carNumber": "14",
    "podiums": "104",
    "placeOfBirth": "Oviedo, Spain",
    "highestGridPosition": "1",
    "highestRaceFinish": "1x32",
    "wins": "32",
    "points": "2198"
},
]

  return (
    <div className='w-9/12 mt-4 md:w-3/4'>
      {/* card container */}
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 space-y-10 md:space-y-0 md:space-x-10'>
      {/* card   */}
      {drivers.map((driver, index) => (
        <Link href='drivers/'>
          <div key={index} className={`flex p-2 w-full flex-col border-t-4 border-r-4 hover:border-${driver.color} border-black rounded-md `}>
            <div className='flex flex-row justify-between'>
              <div className='flex justify-center items-center text-xl md:text-2xl'><h1>{index+1}</h1></div>
              <div className='flex flex-col'>
              {/* this needs to be updated to this seasons points */}
                <div className='text-center text-l md:text-xl'>{driver.points}</div>  
                <div className='bg-black text-white font-bold px-2 rounded-lg mb-1' >POINTS</div>
              </div>
            </div>
            <div className='flex flex-row pt-2 pb-2 items-center justify-between border-t-2 border-b-2 border-black '  >
              <div className={`border-l-4 border-solid border-${driver.color} border-red-500`}><h3 className='px-2'>{driver.givenName + " "}  <strong>{driver.familyName}</strong></h3></div>
              <div className=' overflow-hidden relative border-solid border-gray-300 rounded-md border-2 w-14 h-8'><Image src={`/assets/images/flag/${driver.flagImage}`} alt={`${driver.nationality} flag`} className='object-cover' fill={true}/></div>
            </div>
            <div className='flex flex-row justify-between items-end'>
              {/* <div>{driver.carNumber}</div> */}
              <div className='overflow-hidden relative w-14 h-10'><Image className='object-cover' src={`/assets/images/drivers/car_numbers/${driver.driverId}_car_number.avif`} alt={`${driver.givenName}'s car number stylized`} fill={true} /></div>
              <div><Image src={`/assets/images/drivers/${driver.driverId}_front.png`} alt={`${driver.givenName} image`} height={200} width={200} /></div>
            </div>
          </div>
        </Link>
        ))}
    </div>
    </div>
  )
}

export default DriversPage