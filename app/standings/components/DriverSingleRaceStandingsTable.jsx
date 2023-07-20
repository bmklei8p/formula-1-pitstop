import Link from "next/link"

const DriverSingleRaceStandingsTable = ({standings}) => {
  return (
      <div className='xl:w-1/2 w-full sm:pt-6 overflow-y-hidden'>
          {/* table header */}
          <div className="bg-slate-300 px-6 py-4 w-1/10 max-w-xl mx-auto shadow-lg flex items-start border-solid border-red-500 border-b-[3px]">
              <div className="basis-1/5 shrink-0">
                  <h1 className='font-medium text-lg'>Position</h1>
              </div>
              <div className="w-full basis-3/5 md:flex-row">
                  <div className="text-xl font-medium text-black">Driver</div>
              </div>
              <div className="w-full basis-3/5 md:flex-row">
                  <div className="text-xl font-medium text-black">Finish</div>
              </div>
              <p className='font-medium text-lg basis-1/5'>Points</p>
          </div>
          {/* map through standings and display each position */}
          {standings.map((pos) => (
              <div key={pos.position} className="px-6 py-4 max-w-xl mx-auto shadow-lg flex items-start even:bg-slate-200 odd:bg-slate-300">
                  <div className="shrink-0 basis-1/5">
                      <h1 className='text-center'>{pos.position}</h1>
                  </div>
                  <Link href={`/drivers/${pos.Driver.driverId}`} className="w-full md:flex-row basis-3/5">
                      <div className="text-l md:text-xl text-black">{pos.Driver.givenName + " " + pos.Driver.familyName}</div>
                  </Link>
                  <div className="w-full basis-2/5 md:flex-row">
                    <div className="text-l font-medium text-black">{pos.status === "Finished" ? pos.Time.time : "DNF" } </div>
                  </div>
                  <p className='text-center basis-1/5'>{pos.points}</p>
              </div>
          ))}
      </div>
  )
}

export default DriverSingleRaceStandingsTable
