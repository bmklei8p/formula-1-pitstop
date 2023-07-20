import Image from "next/image"
import TrackInfoBox from "../components/TrackInfoBox"
import ImageCarousel from "@/app/components/ImageCarousel"
import DetailMap from "../components/DetailMap"

const TrackDetailPage = async ({ params }) => {
  const { circuitId } = params

  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/tracks/${circuitId}`)
  const track = await res.json()

  return (
    <div className="w-full h-screen flex flex-col items-center bg-gray-100">
      <h1 className="text-2xl md:text-3xl font-bold pt-2 pb-2 md:pb-4">
        {track.officialRaceName}
      </h1>
      {/* <div className="w-full lg:w-9/12  2xl:w-2/3 flex flex-col  bg-white md:flex-row"> */}
      <div className="w-full lg:w-9/12  2xl:w-2/3 flex flex-col pr-8 bg-white md:flex-row">
        {/* track layout image */}
        <div className="basis-2/3">
          <Image src={`/assets/images/track/${track.circuitId}.png`} width={750} height={750} priority={true} alt={`${track.locationCity}'s track layout`} />
        </div>
        <div className="basis-1/3 pt-8">
          <TrackInfoBox track={track} className="basis-full" />
        </div>
      </div>
      <div className="w-full lg:w-9/12 2xl:w-2/3 mx-0 h-auto pt-4 bg-white block md:hidden">
        <ImageCarousel imageURLArray={["001.avif","002.avif","003.avif"]} path={`/assets/images/historic/${track.circuitId}/`} alt={`${track.locationCity} images`} />
      </div>
      <div className="w-full lg:w-9/12 2xl:w-2/3 flex flex-col pt-6 bg-white gap-4 md:gap-0 md:flex-row">
        <div className="w-full md:w-1/2 text-lg px-2 mb-4">
          <h3 className="text-2xl md:text-3xl font-bold mb-2">Track Story</h3>
          <div className="flex flex-col gap-6 px-4"> 
            <p>{track.firstParagraph}</p>
            <p>{track.secondParagraph}</p>
            <p>{track.thirdParagraph}</p>
          </div>
        </div>
        <div className="w-full md:w-1/2">
          <DetailMap lat={track.lat} long={track.long} officialRaceName={track.officialRaceName} locationCity={track.locationCity} locationCountry={track.locationCountry}/>
        </div>
      </div>
      <div className="w-full lg:w-9/12 2xl:w-2/3 m-0 h-auto bg-gray-100 hidden md:block">
        <ImageCarousel imageURLArray={["001.avif","002.avif","003.avif"]} path={`/assets/images/historic/${track.circuitId}/`} alt={`${track.locationCity} images`} />
      </div>
    </div>
  )
}

export default TrackDetailPage

// not sure i like the bg's of the sections being white for both- but when i do bg-gray-50 it looks worse?