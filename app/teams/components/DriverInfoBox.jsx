import Image from "next/image"
import Link from "next/link"

const DriverInfoBox = ({ pictureURL, driverName, driverId }) => {
  return (
    <div className="md:border-l-2 border-white">
      <div className="bg-gray-900 object-center relative ">
        <div className="flex justify-center">
         <Image priority={true} src={`/assets/images/drivers/${pictureURL}`} alt={`${driverName} headshot`} width={300} height={300} />  
        </div>
        {driverId === "de_vries" ? <Image className="absolute top-9 left-[1rem]  md:top-8 md:left-1" src={"/assets/images/red_x.svg"} height={300} width={300} alt="red x going across driver image to denote termination" /> : <></>}
      </div>
    {/* driver info box */}
    <div className="h-24 md:h-36 xl:border-l-2 border-slate-200">
      <div className="ml-4 font-light">
        <Link href={`/drivers/${driverId}`}><h3 className="pt-2 text-xl md:text-2xl">{driverName}</h3></Link>
        <div className="overflow-hidden relative w-14 h-10 mt-3">
        {driverId === "ricciardo" ?
                      <h1 className="font-medium text-4xl text-black">3</h1>
                      :
                      <Image
                        className="object-contain"
                        src={`/assets/images/drivers/car_numbers/${driverId}_car_number.avif`}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        alt={`${driverName}'s car number stylized`}
                        fill={true}
                      />}
        </div>
      </div>
    </div>
  </div>
  )
}

export default DriverInfoBox