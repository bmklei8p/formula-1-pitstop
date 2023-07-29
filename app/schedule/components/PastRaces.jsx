import Link from "next/link"
import Image from "next/image"

const PastRaces = ({races}) => {

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-3 gap-y-3 lg:gap-x-4 lg:gap-y-4 mt-4 mx-2">
      {races && races.map((race, index) => {
        return (
          <Link key={index} className={`bg-gray-300 dark:bg-slate-700 hover:bg-gray-400 w-9/10 border-8 border-solid rounded-md border-gray-300 dark:border-slate-700 ${index === 0 ? 'hidden' : ''}`} href={`schedule/current/completed/${race.round}`}>
            <div className="flex flex-row px-2">
              <div className="basis-1/6 flex align-middle box-border h-95">
                  {/* replacing all spaces in the country name with _ for the image path */}
                 <Image src={`/assets/images/flag/${race.Circuit.Location.country.replace(/ /g, '_')}_flag.svg`} alt={`${race.Circuit.Location.country} flag`} width={100} height={85} className="h-full object-contain"  />
              </div>
              <div className="flex flex-col basis-2/3 md:basis-full w-full text-left">
                <div className="flex-grow w-11/12  ml-auto">
                  <div className="text-xl md:text-2xl font-bold">{race.Circuit.Location.country === 'USA' || race.Circuit.Location.country === 'United States' ?
                    `United States` : race.Circuit.Location.country} </div>
                  <div className="text-l md:text-xl">{race.raceName}</div>
                </div>
              </div>
              <div className="text-l md:text-xl text-right basis-1/4">
                {race.FirstPractice.date.split('-').slice(1).join('/')} - {race.date.slice(8)}
              </div>
            </div>
          </Link>
        )})}
    </div>
  )
}


export default PastRaces