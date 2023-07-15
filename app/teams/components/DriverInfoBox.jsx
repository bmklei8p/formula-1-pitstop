import Image from "next/image"

const DriverInfoBox = ({ pictureURL, driverName, driverId }) => {
  return (
    <div className="border-l-2 border-white">
      <div className="bg-gray-900">
        <Image priority={true} src={`/assets/images/drivers/${pictureURL}`} alt={`${driverName} headshot`} width={300} height={300} />
      </div>
    {/* driver info box */}
    <div className="h-36 border-l-2 border-slate-200">
      <div className="ml-4 font-light">
        <h3 className="pt-2 text-xl md:text-2xl">{driverName}</h3>
        <div className="overflow-hidden relative w-14 h-10 mt-3">
                      <Image
                        className="object-cover"
                        src={`/assets/images/drivers/car_numbers/${driverId}_car_number.avif`}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        alt={`${driverName}'s car number stylized`}
                        fill={true}
                      />
        </div>
      </div>
    </div>
  </div>
  )
}

export default DriverInfoBox