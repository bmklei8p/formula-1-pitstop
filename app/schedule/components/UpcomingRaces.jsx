import Image from "next/image"
import Link from "next/link"

const UpcomingRaces = ({races}) => {

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-3 gap-y-3 mt-4 mx-2">
      {races && races.map((race, index) => {
        return (
          <Link key={index} className="bg-gray-300 hover:bg-gray-400 w-9/10 border-8 border-solid rounded-md border-gray-300" href={`schedule/current/${race.round}`}>
            <div className="flex flex-row px-2 items-center">
              {/* <div className="basis-1/6 flex align-middle box-border ">  
                 <Image src={`/assets/images/flag/${race.Circuit.Location.country.replace(/ /g, '_')}_flag.svg`} alt={`${race.Circuit.Location.country} flag`} width={100} height={100} className="object-contain"  />
              </div> */}
                  <div className=" overflow-hidden relative border-solid border-gray-300 rounded-md border-2 w-16 md:w-24 h-10">
                      <Image
                        src={`/assets/images/flag/${race.Circuit.Location.country.replace(/ /g, '_')}_flag.svg`}
                        alt={`${race.Circuit.Location.country} flag`}
                        sizes="(max-width: 768px) 100vw"
                        className="object-cover"
                        fill={true}
                      />
                    </div>
              <div className="flex flex-col basis-2/3 md:basis-full w-full text-left">
                <div className="flex-grow w-11/12  ml-auto">
                  <div className="text-xl lg:text-2xl font-bold">{race.Circuit.Location.country === 'USA' || race.Circuit.Location.country === 'United States' ?
                    `United States` : race.Circuit.Location.country} </div>
                  <div className="text-l lg:text-xl">{race.Circuit.circuitName}</div>
                </div>
              </div>
              <div className="text-l lg:text-xl text-right basis-1/4">
                {race.FirstPractice.date.split('-').slice(1).join('/')} - {race.date.slice(8)}
              </div>
            </div>
          </Link>
        )})}
    </div>
  )
}


export default UpcomingRaces


