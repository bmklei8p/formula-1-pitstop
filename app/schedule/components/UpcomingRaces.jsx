import Image from "next/image"

const UpcomingRaces = ({races}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      {races && races.map((race, index) => {
        return (
            <div key={index} className=" m-2 w-9/10 flex flex-row px-4 max-h-26 bg-gray-300 border-4 border-solid rounded-md border-gray-300">
              <div className="basis-1/3 flex align-middle box-border">
                <Image src={`/assets/images/flag/${race.Circuit.Location.country}_flag.svg`} alt={`${race.Circuit.Location.country} flag`} width={100} height={50} />
              </div>
              <div className="flex flex-col basis-1/3 text-left flex-nowrap">
                <div className="text-xl">{race.Circuit.Location.country === 'USA' || race.Circuit.Location.country === 'United States' ?
                  `United States` : race.Circuit.Location.country} </div>
                <div>{race.raceName}</div>
              </div>
              <div className="text-right basis-1/3">
                {race.FirstPractice.date.split('-').slice(1).join('/')} - {race.date.slice(8)}
              </div>
            </div>
        )})}
    </div>
  )
}

export default UpcomingRaces

// onClick of the whole div should lead to a detail page about the timings of qualy/event/practice
// `${race.Circuit.Location.locality},
