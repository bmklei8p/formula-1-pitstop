import ImageCarousel from "@/app/components/ImageCarousel"
import DriverInfoBox from "@/app/drivers/components/DriverInfoBox"
import Image from "next/image"




const DriverDetailPage = async ({ params }) => {
  const driver = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/drivers/${params.driverId}`, { next: {revalidate: 360000}}
  ).then((res) => res.json())


  return (
    <div className="w-full h-screen flex flex-col items-center bg-background dark:bg-background">
      <h1 className="text-2xl md:text-3xl font-bold pt-2 pb-2 md:pb-4">
        {driver.givenName} {driver.familyName}
      </h1>
      <div className="w-full md:w-9/12 2xl:w-2/3 justify-between flex flex-col bg-contentBackground dark:bg-contentBackground md:flex-row">
        <div className="basis-full bg-gray-900 flex justify-center ">
          <Image src={`/assets/images/drivers/${driver.driverId}_front.png`} width={500} height={500} priority={true} alt={`${driver.familyName}'s headshot image`} />
        </div>
        <DriverInfoBox driver={driver} className="basis-full" />
      </div>
      <div className="w-full md:w-9/12 2xl:w-2/3 m-0 h-auto bg-contentBackground dark:bg-contentBackground">
        <ImageCarousel imageURLArray={["001.avif","002.avif","003.avif"]} path={`/assets/images/drivers/${driver.driverId}/`} alt={`${driver.familyName} images`} />
      </div>
    </div>
  )
}

export default DriverDetailPage