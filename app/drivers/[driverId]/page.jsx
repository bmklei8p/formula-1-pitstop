import ImageCarousel from "@/app/teams/components/ImageCarousel"
import DriverInfoBox from "@/app/drivers/components/DriverInfoBox"

const DriverDetailPage = async ({ params }) => {
  const driver = await fetch(`http://localhost:3000/api/drivers/${params.driverId}`
  ).then((res) => res.json())


  return (
    <div>
      <div>
        {/* driver image */}
        <DriverInfoBox driver={driver} />
      </div>
      <div>
        {/* <ImageCarousel /> */}
      </div>
    </div>
  )
}

export default DriverDetailPage