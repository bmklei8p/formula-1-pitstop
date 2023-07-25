import Image from "next/image"
import Link from "next/link"

const BriefConstructorsStandingsRow = ({ constructorsStandingsList, index}) => {
  return (
    <div className="flex flex-row justify-between mt-2">
      <div className="flex flex-row items-center gap-x-4">
        <p className="text-2xl md:text-3xl font-bold">{index+1}</p>
        <Link href={`teams/${constructorsStandingsList[index].Constructor.constructorId}`}>
          <div className="w-[75px] h-[75px] rounded-full overflow-hidden bg-gray-900">
          <Image className="object-contain" src={`/assets/images/logos/${constructorsStandingsList[index].Constructor.constructorId}_team_logo.png`} alt={`${constructorsStandingsList[index].Constructor.name}'s logo`} width={75} height={75} />
          </div>
        </Link>
        <div className="flex flex-col">
            <Link href={`teams/${constructorsStandingsList[index].Constructor.constructorId}`}>
            <p className="text-xl md:text-2xl"><strong>{constructorsStandingsList[index].Constructor.name}</strong></p>
            </Link>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center">
        <p className="text-xl md:text-2xl">{constructorsStandingsList[index].points}</p></div>
  </div>
  )
}

export default BriefConstructorsStandingsRow