// 'use client'
import Image from "next/image"
import Link from "next/link"
import { IoChevronBackSharp } from "react-icons/io5";

const RacePodiumResults = ({raceResults, raceCircuitId}) => {

  return (
    <div className="flex flex-col text-center items-center gap-y-4">
        <div className="relative" >
            <Link className="border-2 hover:bg-gray-800 left-0 border-gray-800 text-red-500 absolute" href={"/schedule"}>
                <IoChevronBackSharp size={45} />
            </Link>
            <Image className="" priority={true} fill={false} width={1353} height={447} src={`/assets/images/podium/${raceCircuitId}_podium.jpeg`} alt="podium"/>
        </div>
        <div className="grid grid-cols-3 w-full text-lg md:text-xl">
            <div className="justify-self-center">
                <Image src="/assets/images/first_place.png" alt="first place trophy" width={50} height={50} />
            </div>
            <div>{raceResults[0].Driver.givenName + " " + raceResults[0].Driver.familyName}</div>
            <div>{raceResults[0].Time.time}</div>
        </div>           
        <div className="grid grid-cols-3 w-full text-lg md:text-xl">
        <div className="justify-self-center">
                <Image src="/assets/images/first_place.png" alt="first place trophy" width={50} height={50} />
            </div>
            <div>{raceResults[1].Driver.givenName + " " + raceResults[1].Driver.familyName}</div>
            <div>{raceResults[1].Time.time}</div>
        </div>
        <div className="grid grid-cols-3 w-full text-lg md:text-xl">
        <div className="justify-self-center">
                <Image src="/assets/images/first_place.png" alt="first place trophy" width={50} height={50} />
            </div>
            <div>{raceResults[2].Driver.givenName + " " + raceResults[2].Driver.familyName}</div>
            <div>{raceResults[2].Time.time}</div>
        </div>  
    </div>
  )
}

export default RacePodiumResults