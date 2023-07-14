'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect } from "react"

const DriversPage = () => {
  const [ driversStandings, setDriversStandings ] = useState([])
  // const [ driverInformation, setDriverInformation ] = useState()
  const [ driverInformation, setDriverInformation ] = useState({ "albon": {
    "driverId": "albon",
    "color": "#34bedd",
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
    "careerPoints": "212"
    },
    "alonso": {
        "driverId": "alonso",
        "color": "#368b74",
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
        "careerPoints": "2198"
    },
    "bottas": {
        "driverId": "bottas",
        "color": "#c92d4c",
        "permanentNumber": "77",
        "code": "BOT",
        "url": "http://en.wikipedia.org/wiki/Valtteri_Bottas",
        "givenName": "Valtteri",
        "familyName": "Bottas",
        "dateOfBirth": "1989-08-28",
        "nationality": "Finnish",
        "driverHeadshotImage": "bottas_front.png",
        "flagImage": "Findland_flag.svg",
        "team": "Alfa Romeo",
        "carNumber": "77",
        "podiums": "67",
        "placeOfBirth": "Nastola, Finland",
        "highestGridPosition": "1",
        "highestRaceFinish": "1x10",
        "wins": "10",
        "careerPoints": "1792"
    },
    "de_vries": {
        "driverId": "de_vries",
        "color": "#5e8fab",
        "permanentNumber": "21",
        "code": "DEV",
        "url": "http://en.wikipedia.org/wiki/Nyck_de_Vries",
        "givenName": "Nyck",
        "familyName": "de Vries",
        "dateOfBirth": "1995-02-06",
        "nationality": "Dutch",
        "driverHeadshotImage": "de_vries_front.png",
        "flagImage": "Netherlands_flag.svg",
        "team": "AlphaTauri",
        "carNumber": "21",
        "podiums": "0",
        "placeOfBirth": "Uitwellingerga, Netherlands",
        "highestGridPosition": "8",
        "highestRaceFinish": "9x1",
        "wins": "0",
        "careerPoints": "2"
    },
    "gasly": {
        "driverId": "gasly",
        "color": "#2293d1",
        "permanentNumber": "10",
        "code": "GAS",
        "url": "http://en.wikipedia.org/wiki/Pierre_Gasly",
        "givenName": "Pierre",
        "familyName": "Gasly",
        "dateOfBirth": "1996-02-07",
        "nationality": "French",
        "driverHeadshotImage": "gasly_front.png",
        "flagImage": "France_flag.svg",
        "team": "Alpine",
        "carNumber": "10",
        "podiums": "3",
        "placeOfBirth": "Rouen, France",
        "highestGridPosition": "2",
        "highestRaceFinish": "1x1",
        "wins": "1",
        "careerPoints": "348"
    },
    "hamilton": {
        "driverId": "hamilton",
        "color": "#6cd3c0",
        "permanentNumber": "44",
        "code": "HAM",
        "url": "http://en.wikipedia.org/wiki/Lewis_Hamilton",
        "givenName": "Lewis",
        "familyName": "Hamilton",
        "dateOfBirth": "1985-01-07",
        "nationality": "British",
        "driverHeadshotImage": "hamilton_front.png",
        "flagImage": "UK_flag.svg",
        "team": "Mercedes",
        "carNumber": "44",
        "podiums": "195",
        "placeOfBirth": "Stevenage, England",
        "highestGridPosition": "1",
        "highestRaceFinish": "1x103",
        "wins": "103",
        "careerPoints": "4526.5"
    },
    "hulkenberg": {
        "driverId": "hulkenberg",
        "color": "#b5babd",
        "permanentNumber": "27",
        "code": "HUL",
        "url": "http://en.wikipedia.org/wiki/Nico_Hülkenberg",
        "givenName": "Nico",
        "familyName": "Hülkenberg",
        "dateOfBirth": "1987-08-19",
        "nationality": "German",
        "driverHeadshotImage": "hulkenberg_front.png",
        "flagImage": "German_flag.svg",
        "team": "Haas",
        "carNumber": "27",
        "podiums": "0",
        "placeOfBirth": "Emmerich am Rhein, Germany",
        "highestGridPosition": "1",
        "highestRaceFinish": "4",
        "wins": "0",
        "careerPoints": "530"
    },
    "leclerc": {
        "driverId": "leclerc",
        "color": "#f91437",
        "permanentNumber": "16",
        "code": "LEC",
        "url": "http://en.wikipedia.org/wiki/Charles_Leclerc",
        "givenName": "Charles",
        "familyName": "Leclerc",
        "dateOfBirth": "1997-10-16",
        "nationality": "Monegasque",
        "driverHeadshotImage": "leclerc_front.png",
        "flagImage": "Monaco_flag.svg",
        "team": "Ferrari",
        "carNumber": "16",
        "podiums": "26",
        "placeOfBirth": "Monte Carlo, Monaco",
        "highestGridPosition": "1",
        "highestRaceFinish": "1x5",
        "wins": "5",
        "careerPoints": "942"
    },
    "kevin_magnussen": {
        "driverId": "kevin_magnussen",
        "color": "#b5babd",
        "permanentNumber": "20",
        "code": "MAG",
        "url": "http://en.wikipedia.org/wiki/Kevin_Magnussen",
        "givenName": "Kevin",
        "familyName": "Magnussen",
        "dateOfBirth": "1992-10-05",
        "nationality": "Danish",
        "driverHeadshotImage": "magnussen_front.png",
        "flagImage": "Denmark_flag.svg",
        "team": "Haas",
        "carNumber": "20",
        "podiums": "1",
        "placeOfBirth": "Roskilde, Denmark",
        "highestGridPosition": "4",
        "highestRaceFinish": "2x1",
        "wins": "0",
        "careerPoints": "185"
    },
    "norris": {
        "driverId": "norris",
        "color": "#f5801f",
        "permanentNumber": "4",
        "code": "NOR",
        "url": "http://en.wikipedia.org/wiki/Lando_Norris",
        "givenName": "Lando",
        "familyName": "Norris",
        "dateOfBirth": "1999-11-13",
        "nationality": "British",
        "driverHeadshotImage": "norris_front.png",
        "flagImage": "UK_flag.svg",
        "team": "Mclaren",
        "carNumber": "4",
        "podiums": "7",
        "placeOfBirth": "Bristol, England",
        "highestGridPosition": "1",
        "highestRaceFinish": "2x2",
        "wins": "0",
        "careerPoints": "470"
    },
    "ocon": {
        "driverId": "ocon",
        "color": "#2293d1",
        "permanentNumber": "31",
        "code": "OCO",
        "url": "http://en.wikipedia.org/wiki/Esteban_Ocon",
        "givenName": "Esteban",
        "familyName": "Ocon",
        "dateOfBirth": "1996-09-17",
        "nationality": "French",
        "driverHeadshotImage": "ocon_front.png",
        "flagImage": "France_flag.svg",
        "team": "Alpine",
        "carNumber": "31",
        "podiums": "3",
        "placeOfBirth": "Évreux, Normandy",
        "highestGridPosition": "3",
        "highestRaceFinish": "1x1",
        "wins": "1",
        "careerPoints": "395"
    },
    "perez": {
        "driverId": "perez",
        "color": "#e20b20",
        "permanentNumber": "11",
        "code": "PER",
        "url": "http://en.wikipedia.org/wiki/Sergio_Pérez",
        "givenName": "Sergio",
        "familyName": "Pérez",
        "dateOfBirth": "1990-01-26",
        "nationality": "Mexican",
        "driverHeadshotImage": "perez_front.png",
        "flagImage": "Mexico_flag.svg",
        "team": "Red Bull Racing",
        "carNumber": "11",
        "podiums": "31",
        "placeOfBirth": "Guadalajara, Mexico",
        "highestGridPosition": "1",
        "highestRaceFinish": "1x6",
        "wins": "6",
        "careerPoints": "1357"
    },
    "piastri": {
        "driverId": "piastri",
        "color": "#f5801f",
        "permanentNumber": "81",
        "code": "PIA",
        "url": "http://en.wikipedia.org/wiki/Oscar_Piastri",
        "givenName": "Oscar",
        "familyName": "Piastri",
        "dateOfBirth": "2001-04-06",
        "nationality": "Australian",
        "driverHeadshotImage": "piastri_front.png",
        "flagImage": "Australia_flag.svg",
        "team": "Mclaren",
        "carNumber": "81",
        "podiums": "0",
        "placeOfBirth": "Melbourne, Victoria",
        "highestGridPosition": "3",
        "highestRaceFinish": "4x1",
        "wins": "0",
        "careerPoints": "17"
    },
    "russell": {
        "driverId": "russell",
        "color": "#6cd3c0",
        "permanentNumber": "63",
        "code": "RUS",
        "url": "http://en.wikipedia.org/wiki/George_Russell_%28racing_driver%29",
        "givenName": "George",
        "familyName": "Russell",
        "dateOfBirth": "1998-02-15",
        "nationality": "British",
        "driverHeadshotImage": "russell_front.png",
        "flagImage": "UK_flag.svg",
        "team": "Mercedes",
        "carNumber": "63",
        "podiums": "10",
        "placeOfBirth": "King's Lynn, England",
        "highestGridPosition": "1",
        "highestRaceFinish": "1x1",
        "wins": "1",
        "careerPoints": "376"
    },
    "sainz": {
        "driverId": "sainz",
        "color": "#f91437",
        "permanentNumber": "55",
        "code": "SAI",
        "url": "http://en.wikipedia.org/wiki/Carlos_Sainz_Jr.",
        "givenName": "Carlos",
        "familyName": "Sainz",
        "dateOfBirth": "1994-09-01",
        "nationality": "Spanish",
        "driverHeadshotImage": "sainz_front.png",
        "flagImage": "Spain_flag.svg",
        "team": "Ferrari",
        "carNumber": "55",
        "podiums": "15",
        "placeOfBirth": "Madrid, Spain",
        "highestGridPosition": "1",
        "highestRaceFinish": "1x1",
        "wins": "1",
        "careerPoints": "865.5"
    },
    "sargeant": {
        "driverId": "sargeant",
        "color": "#34bedd",
        "permanentNumber": "2",
        "code": "SAR",
        "url": "http://en.wikipedia.org/wiki/Logan_Sargeant",
        "givenName": "Logan",
        "familyName": "Sargeant",
        "dateOfBirth": "2000-12-31",
        "nationality": "American",
        "driverHeadshotImage": "sargeant_front.png",
        "flagImage": "United_States_flag.svg",
        "team": "Williams",
        "carNumber": "2",
        "podiums": "0",
        "placeOfBirth": "Fort Lauderdale, Florida",
        "highestGridPosition": "14",
        "highestRaceFinish": "11x1",
        "wins": "0",
        "careerPoints": "0"
    },
    "stroll": {
        "driverId": "stroll",
        "color": "#368b74",
        "permanentNumber": "18",
        "code": "STR",
        "url": "http://en.wikipedia.org/wiki/Lance_Stroll",
        "givenName": "Lance",
        "familyName": "Stroll",
        "dateOfBirth": "1998-10-29",
        "nationality": "Canadian",
        "driverHeadshotImage": "stroll_front.png",
        "flagImage": "Canada_flag.svg",
        "team": "Aston Martin",
        "carNumber": "18",
        "podiums": "3",
        "placeOfBirth": "Montreal, Canada",
        "highestGridPosition": "1",
        "highestRaceFinish": "3x3",
        "wins": "0",
        "careerPoints": "238"
    },
    "tsunoda": {
        "driverId": "tsunoda",
        "color": "#5e8fab",
        "permanentNumber": "22",
        "code": "TSU",
        "url": "http://en.wikipedia.org/wiki/Yuki_Tsunoda",
        "givenName": "Yuki",
        "familyName": "Tsunoda",
        "dateOfBirth": "2000-05-11",
        "nationality": "Japanese",
        "driverHeadshotImage": "tsunoda_front.png",
        "flagImage": "Japan_flag.svg",
        "team": "AlphaTauri",
        "carNumber": "22",
        "podiums": "0",
        "placeOfBirth": "Sagamihara, Japan",
        "highestGridPosition": "7",
        "highestRaceFinish": "4x1",
        "wins": "0",
        "careerPoints": "46"
    },
    "max_verstappen": {
        "driverId": "max_verstappen",
        "color": "#e20b20",
        "permanentNumber": "33",
        "code": "VER",
        "url": "http://en.wikipedia.org/wiki/Max_Verstappen",
        "givenName": "Max",
        "familyName": "Verstappen",
        "dateOfBirth": "1997-09-30",
        "nationality": "Dutch",
        "driverHeadshotImage": "max_verstappen_front.png",
        "flagImage": "Netherlands_flag.svg",
        "team": "Red Bull Racing",
        "carNumber": "1",
        "podiums": "87",
        "placeOfBirth": "Hasselt, Belgium",
        "highestGridPosition": "1",
        "highestRaceFinish": "1x43",
        "wins": "43",
        "careerPoints": "2266.5"
    },
    "zhou": {
        "driverId": "zhou",
        "color": "#c92d4c",
        "permanentNumber": "24",
        "code": "ZHO",
        "url": "http://en.wikipedia.org/wiki/Guanyu_Zhou",
        "givenName": "Guanyu",
        "familyName": "Zhou",
        "dateOfBirth": "1999-05-30",
        "nationality": "Chinese",
        "driverHeadshotImage": "zhou_front.png",
        "flagImage": "China_flag.svg",
        "team": "Alfa Romeo",
        "carNumber": "24",
        "podiums": "0",
        "placeOfBirth": "Shanghai, China",
        "highestGridPosition": "9",
        "highestRaceFinish": "8x1",
        "wins": "0",
        "careerPoints": "10"
    }
}
)

  // drivers standings api call from ergast  
  useEffect(() => {
    const getDriverStandings = async () => {
        const res = await fetch('http://localhost:3000/api/standings/drivers')
        const data = await res.json()
        setDriversStandings(data)
        }
    getDriverStandings();
    }, []);
 

  // driver information api call from db
  // useEffect((drivers) => {
  //   const getDriverInformation = async () => {
  //     // const res = await fetch('http://localhost:3000/api/drivers')
  //     // const data = await res.json()
  //     console.log({"driver information": drivers})
  //     setDriverInformation(drivers)
  //   }
  //   getDriverInformation(drivers);
  // }, [])
  // driversStandings.map((driver, index) => {
  //   driver.set('flagImage', driverInformation[driver.driverId].flagImage)
  //   driver.set('color', driverInformation[driver.driverId].color)
  // })
  // console.log({"drivers standings": driversStandings})

  return (
    <div className='w-9/12 mt-4 md:w-3/4'>
      {/* card container */}
      <div className='grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3'>
      {/* card   */}
      {driversStandings  && driverInformation && driversStandings.map((driver, index) => {
          const driverColor = driverInformation[driver.Driver.driverId].color;
          const driverFlag = driverInformation[driver.Driver.driverId].flagImage;
      return (
        <Link key={index} href='drivers/'>
          {/* hidden div for tailwind border custom utility classes to be pre-loaded for driver color's next to name and on hover*/}
          <div className='hidden border-[#e20b20] border-[#368b74] border-[#6cd3c0] border-[#f91437] border-[#f5801f] 
          border-[#2293d1] border-[#34bedd] border-[#b5babd] border-[#c92d4c] border-[#5e8fab]
           hover:border-[#e20b20] hover:border-[#368b74] hover:border-[#6cd3c0] hover:border-[#f91437] hover:border-[#f5801f] 
          hover:border-[#2293d1] hover:border-[#34bedd] hover:border-[#b5babd] hover:border-[#c92d4c] hover:border-[#5e8fab]'>
            There has to be a better way to do this!
          </div>
          <div className={`flex p-2 w-full flex-col border-t-4 border-r-4 hover:border-[${driverColor}] border-black rounded-tr-lg`}>
            <div className='flex flex-row justify-between'>
              <div className='flex justify-center items-center text-xl md:text-2xl'><h1>{index+1}</h1></div>
              <div className='flex flex-col'>
                <div className='text-center text-l md:text-xl'>{driver.points}</div>
                <div className='bg-black text-white font-bold px-2 rounded-lg mb-1'>POINTS</div>
              </div>
            </div>
            <div className='flex flex-row pt-2 pb-2 items-center justify-between border-t-2 border-b-2 border-black '  >
              <div className={`border-l-4 border-solid border-[${driverColor}]`}><h3 className='px-2'>{driver.Driver.givenName + " "}<strong>{driver.Driver.familyName}</strong></h3></div>
              <div className=' overflow-hidden relative border-solid border-gray-300 rounded-md border-2 w-14 h-8'><Image src={`/assets/images/flag/${driverFlag}`} alt={`${driver.Driver.nationality} flag`} className='object-cover' fill={true}/></div>
            </div>
            <div className='flex flex-row justify-between items-end'>
              <div className='overflow-hidden relative w-14 h-10'><Image className='object-cover' src={`/assets/images/drivers/car_numbers/${driver.Driver.driverId}_car_number.avif`} alt={`${driver.Driver.givenName}'s car number stylized`} fill={true} /></div>
              <div><Image src={`/assets/images/drivers/${driver.Driver.driverId}_front.png`} alt={`${driver.Driver.givenName} image`} height={200} width={200} /></div>
            </div>
          </div>
        </Link>
        )})}
    </div>
    </div>
  )
}

export default DriversPage