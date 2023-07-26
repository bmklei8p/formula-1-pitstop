import { BiSolidBarChartAlt2} from 'react-icons/bi'
import BriefConstructorsStandings from './BriefConstructorsStandings'
import BriefDriversStandings from './BriefDriversStandings'

const BriefStandings = async () => {
  const driversStandingsResponse = await fetch(`https://ergast.com/api/f1/current/driverStandings.json`, { next: {revalidate: 60}})
  const driversStandingsData = await driversStandingsResponse.json()
  const driversStandingsList = driversStandingsData.MRData.StandingsTable.StandingsLists[0].DriverStandings

  const constructorsStandingsResponse = await fetch(`https://ergast.com/api/f1/current/constructorStandings.json`, { next: {revalidate: 60}})
  const constructorsStandingsData = await constructorsStandingsResponse.json()
  const constructorsStandingsList = constructorsStandingsData.MRData.StandingsTable.StandingsLists[0].ConstructorStandings

  return (
    <div className="border-r-4 border-t-4 border-black rounded-tr-lg pl-2 pr-4 pt-2">
        <div className="flex flex-row justify-between">
          <div className="flex flex-row items-center gap-x-2">
            <div className="overflow-hidden relative">
              <BiSolidBarChartAlt2 size={67} fill='#b30600' />
            </div>
            <div className="flex flex-col">
              <h1 className="text-2xl md:text-3xl text-left text-bold">Standings</h1>
            </div>
          </div>
      </div>
      <div className="flex flex-col gap-y-4">
        <BriefDriversStandings driversStandingsList={driversStandingsList} />
        <BriefConstructorsStandings constructorsStandingsList={constructorsStandingsList} />
      </div>
    </div>
  )
}

export default BriefStandings
