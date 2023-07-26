import ImageCarousel from "@/app/components/ImageCarousel"
import DriverInfoBox from "@/app/drivers/components/DriverInfoBox"
import Image from "next/image"




const DriverDetailPage = async ({ params }) => {
  const driver = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/drivers/${params.driverId}`, { cache: 'no-store'}
  ).then((res) => res.json())


  return (
    <div className="w-full h-screen flex flex-col items-center bg-gray-100">
      <h1 className="text-2xl md:text-3xl font-bold pt-2 pb-2 md:pb-4">
        {driver.givenName} {driver.familyName}
      </h1>
      <div className="w-full md:w-9/12 2xl:w-2/3 justify-between flex flex-col  bg-white md:flex-row">
        <div className="basis-full bg-gray-900 flex justify-center ">
          <Image src={`/assets/images/drivers/${driver.driverId}_front.png`} width={500} height={500} priority={true} alt={`${driver.familyName}'s headshot image`} />
        </div>
        <DriverInfoBox driver={driver} className="basis-full" />
      </div>
      <div className="w-full md:w-9/12 2xl:w-2/3 m-0 pt-4 h-auto bg-white">
        <ImageCarousel imageURLArray={["001.avif","002.avif","003.avif"]} path={`/assets/images/drivers/${driver.driverId}/`} alt={`${driver.familyName} images`} />
      </div>
    </div>
  )
}

export default DriverDetailPage