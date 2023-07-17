import ImageCarousel from "@/app/teams/components/ImageCarousel"
import DriverInfoBox from "@/app/drivers/components/DriverInfoBox"
import Image from "next/image"

const DriverDetailPage = async ({ params }) => {
  const driver = await fetch(`http://localhost:3000/api/drivers/${params.driverId}`
  ).then((res) => res.json())


  return (
    <div>
      <div className="flex md:flex-row">
        {/* driver image */}
        <div className="basis-full">
          <Image src={`/assets/images/drivers/${driver.driverHeadshotImage}`} width={500} height={500} priority={true} alt={`${driver.familyName}'s headshot image`} />
        </div>
        <DriverInfoBox driver={driver} className="basis-full" />
      </div>
      <div>
        {/* <ImageCarousel /> */}
      </div>
    </div>
  )
}

export default DriverDetailPage