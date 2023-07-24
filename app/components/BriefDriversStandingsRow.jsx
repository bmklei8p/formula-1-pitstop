import Image from "next/image"
import Link from "next/link"

const BriefDriversStandingsRow = ({ driversStandings, index}) => {
  return (
    <div className="flex flex-row justify-between mt-2">
      <div className="flex flex-row items-center gap-x-4">
        <p className="text-2xl md:text-3xl font-bold">{index+1}</p>
        <Link href={`drivers/${driversStandings[index].Driver.driverId}`}>
          <div className="w-[75px] h-[75px] rounded-full overflow-hidden bg-gray-200">
          <Image className="object-contain" src={`/assets/images/drivers/${driversStandings[index].Driver.driverId}_front.png`} alt={driversStandings[index].Driver.familyName} width={75} height={75} />
          </div>
        </Link>
        <div className="flex flex-col">
            <Link href={`drivers/${driversStandings[index].Driver.driverId}`}>
            <p className="text-xl md:text-2xl">{driversStandings[index].Driver.givenName} <strong>{driversStandings[index].Driver.familyName}</strong></p>
            </Link>
            <Link href={`teams/${driversStandings[index].Constructors.constructorId}`}>
            <p className="text-l md:text-xl">{driversStandings[index].Constructors.name}</p>
            </Link>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center">
        <p className="text-xl md:text-2xl">{driversStandings[index].points}</p></div>
  </div>
  )
}

export default BriefDriversStandingsRow