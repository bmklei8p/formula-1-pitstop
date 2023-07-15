import Image from "next/image"

const DriverInfoBox = ({ pictureURL, driverName }) => {
  return (
    <div className="border-l-2 border-white">
      <div className="bg-gray-900">
        <Image src={`/assets/images/drivers/${pictureURL}`} alt={`${driverName} headshot`} width={300} height={300} />
      </div>
    {/* driver info box */}
    <div className="h-36 border-l-2 border-slate-200">
      <div className="font-bold text-center">
        <h3 className="pt-2 text-lg md:text-xl">{driverName}</h3>
      </div>
    </div>
  </div>
  )
}

export default DriverInfoBox