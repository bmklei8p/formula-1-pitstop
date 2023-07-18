import Image from "next/image"
import TrackInfoBox from "../components/TrackInfoBox"
import ImageCarousel from "@/app/teams/components/ImageCarousel"
// import DetailMap from "../components/DetailMap"

const TrackDetailPage = async ({ params }) => {
  const { circuitId } = params
  
  const res = await fetch(`http://localhost:3000/api/tracks/${circuitId}`)
  const track = await res.json()

  return (
    <div className="w-full h-screen flex flex-col items-center bg-gray-100">
      <h1 className="text-2xl md:text-3xl font-bold pt-2 pb-2 md:pb-4">
        {track.officialRaceName}
      </h1>
      <div className="w-full md:w-9/12 2xl:w-2/3 flex flex-col  bg-white md:flex-row">
        {/* track layout image */}
        <div className="basis-2/3">
          <Image src={`/assets/images/track/${track.circuitId}.png`} width={750} height={750} priority={true} alt={`${track.locationCity}'s track layout`} />
        </div>
        <div className="basis-1/3"> 
          <TrackInfoBox track={track} className="basis-full" />
        </div>
      </div>
      <div className="w-full md:w-9/12 2xl:w-2/3 flex flex-col-reverse md:flex-row">
        <div className="w-1/2">
          <p>{track.firstParagraph}</p>
          <p>{track.secondParagraph}</p>
          <p>{track.thirdParagraph}</p>
        </div>
        <div>
          {/* <DetailMap /> */}
          <p>map</p>
        </div>
      </div>
      <div className="w-full md:w-9/12 2xl:w-2/3 m-0 h-auto bg-gray-100">
        {/* <ImageCarousel /> */}
        <ImageCarousel imageURLArray={["001.avif","002.avif","003.avif"]} path={`/assets/images/historic/${track.circuitId}/`} alt={`${track.locationCity} images`} />
      </div>
    </div>
  )
}

export default TrackDetailPage