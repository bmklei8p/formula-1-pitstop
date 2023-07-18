import ImageCarousel from "@/app/teams/components/ImageCarousel"
import DriverInfoBox from "@/app/drivers/components/DriverInfoBox"
import Image from "next/image"

const DriverDetailPage = async ({ params }) => {
  const driver = await fetch(`http://localhost:3000/api/drivers/${params.driverId}`
  ).then((res) => res.json())


  return (
    <div className="w-full h-screen flex flex-col items-center bg-gray-100">
      <h1 className="text-2xl md:text-3xl font-bold pt-2 pb-2 md:pb-4">
        {driver.givenName} {driver.familyName}
      </h1>
      <div className="w-full md:w-9/12 2xl:w-2/3 justify-between flex flex-col  bg-white md:flex-row">
        {/* driver image */}
        <div className="basis-full">
          <Image src={`/assets/images/drivers/${driver.driverHeadshotImage}`} width={500} height={500} priority={true} alt={`${driver.familyName}'s headshot image`} />
        </div>
        <DriverInfoBox driver={driver} className="basis-full" />
      </div>
      <div className="w-full md:w-9/12 2xl:w-2/3 m-0 h-auto bg-gray-100">
        {/* <ImageCarousel /> */}
        <ImageCarousel imageURLArray={["001.avif","002.avif","003.avif"]} path={`/assets/images/drivers/${driver.driverId}/`} alt={`${driver.familyName} images`} />
      </div>
    </div>
  )
}

export default DriverDetailPage