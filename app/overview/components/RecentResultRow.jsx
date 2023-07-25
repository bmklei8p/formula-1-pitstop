import Image from 'next/image'
import Link from 'next/link'

const RecentResultRow = ({raceResults, index, qualy}) => {
  return (
    <div className="flex flex-row justify-between mt-2">
      <div className="flex flex-row items-center gap-x-4">
        <p className="text-2xl md:text-3xl font-bold">{index+1}</p>
        <Link href={`drivers/${raceResults[index].Driver.driverId}`}>
          <div className="w-[75px] h-[75px] rounded-full overflow-hidden bg-gray-900">
          <Image className="object-contain" src={`/assets/images/drivers/${raceResults[index].Driver.driverId}_front.png`} alt={raceResults[index].Driver.familyName} width={75} height={75} />
          </div>
        </Link>
        <div className="flex flex-col">
            <Link href={`drivers/${raceResults[index].Driver.driverId}`}>
            <p className="text-xl md:text-2xl">{raceResults[index].Driver.givenName} <strong>{raceResults[index].Driver.familyName}</strong></p>
            </Link>
            <Link href={`teams/${raceResults[index].Constructor.constructorId}`}>
            <p className="text-l md:text-xl">{raceResults[index].Constructor.name}</p>
            </Link>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center">
        <p className="text-xl md:text-2xl">{qualy ? raceResults[index].Q1 : (raceResults[index].Time.time.length > 8 ? raceResults[index].Time.time.slice(0,7) : raceResults[index].Time.time)}</p>      </div>
  </div>
  )
}

export default RecentResultRow