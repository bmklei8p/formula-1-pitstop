// 'use client'
import Image from "next/image"
// import Link from "next/link"
// import { IoChevronBackSharp } from "react-icons/io5";

const RacePodiumResults = ({raceResults, raceCircuitId}) => {

  return (
    <div className="flex flex-col md:flex-row text-center items-center">
        {/* <div className="">
            <Link className="border-2 hover:bg-gray-400 text-black-500 absolute" href={"/schedule"}>
                <IoChevronBackSharp size={45} />
            </Link>
        </div> */}
        {/* need to put this image in a box for larger screens  width={1353} height={447} */}
        <div className="relative border-black border-4 h-72 md:h-96  w-full">
            <Image className="" priority={true} fill={true} sizes="100vw" src={`/assets/images/podium/${raceCircuitId}_podium.jpeg`} alt="podium"/>
        </div>
        <div className="w-full p-x-4 mt-4 hidden md:block">
            <div className="flex flex-row w-full text-xl md:text-2xl mb-3">
                <div className="basis-1/5 flex justify-center">
                    <Image src="/assets/images/first.png" alt="first place trophy" width={50} height={50} />
                </div>
                <div className="basis-3/5 ">{raceResults[0].Driver.givenName + " " + raceResults[0].Driver.familyName}</div>
                <div className="basis-1/5">{raceResults[0].Time.time.slice(0,7)}</div>
            </div>
            <div className="flex flex-row w-full text-xl md:text-2xl mb-3">
                <div className="flex justify-center basis-1/5">
                    <Image src="/assets/images/second_place.png" alt="second place trophy" width={50} height={50} />
                </div>
                <div className="basis-3/5">{raceResults[1].Driver.givenName + " " + raceResults[1].Driver.familyName}</div>
                <div className="basis-1/5">{raceResults[1].Time.time}</div>
            </div>
            <div className="flex flex-row w-full text-xl md:text-2xl">
                <div className="flex justify-center basis-1/5">
                    <Image src="/assets/images/third_place.png" alt="third place trophy" width={50} height={50} />
                </div>
                <div className="basis-3/5">{raceResults[2].Driver.givenName + " " + raceResults[2].Driver.familyName}</div>
                <div className="basis-1/5">{raceResults[2].Time.time}</div>
            </div>
        </div>
    </div>
  )
}

export default RacePodiumResults