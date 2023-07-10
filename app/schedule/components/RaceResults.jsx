'use client'
import Image from "next/image"
import Link from "next/link"

const RaceResults = ({raceResults}) => {

  return (
    <div className="flex flex-col text-left gap-y-4">
        <div className="flex flex-row gap-x-4">
            <div>
                <Image src="/assets/images/first_place.png" alt="first place trophy" width={50} height={50} />
            </div>
            <div>{raceResults[0].Driver.givenName + " " + raceResults[0].Driver.familyName}</div>
            <div>{raceResults[0].Time.time}</div>
        </div>           
        <div className="flex flex-row gap-x-4">
            <div>
                <Image src="/assets/images/first_place.png" alt="first place trophy" width={50} height={50} />
            </div>
            <div>{raceResults[1].Driver.givenName + " " + raceResults[1].Driver.familyName}</div>
            <div>{raceResults[1].Time.time}</div>
        </div>
        <div className="flex flex-row gap-x-4">
            <div>
                <Image src="/assets/images/first_place.png" alt="first place trophy" width={50} height={50} />
            </div>
            <div>{raceResults[2].Driver.givenName + " " + raceResults[2].Driver.familyName}</div>
            <div>{raceResults[2].Time.time}</div>
        </div>  
    </div>
  )
}

export default RaceResults