import Image from "next/image"
import TrackInfoBox from "../components/TrackInfoBox"
import ImageCarousel from "@/app/components/ImageCarousel"
import DetailMap from "../components/DetailMap"

const TrackDetailPage = async ({ params }) => {
  const { circuitId } = params

  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/tracks/${circuitId}`, { cache: 'no-store'})
  const track = await res.json()

  return (
    <div className="w-full h-screen flex flex-col items-center bg-gray-100">
      <h1 className="text-2xl md:text-3xl font-bold pt-2 pb-2 md:pb-4">
        {track.circuitName}
      </h1>
      {/* <div className="w-full lg:w-9/12  2xl:w-2/3 flex flex-col  bg-white md:flex-row"> */}
      <div className="w-full lg:w-9/12  2xl:w-2/3 flex flex-col pr-4 md:pr-8 bg-white md:flex-row">
        {/* track layout image */}
        <div className="basis-2/3">
          <Image src={`/assets/images/track/${track.circuitId}.png`} width={750} height={750} priority={true} alt={`${track.locationCity}'s track layout`} />
        </div>
        <div className="w-full md:basis-1/3 pt-8 pl-4">
          <TrackInfoBox track={track} className="basis-full" />
        </div>
      </div>
      <div className="w-full lg:w-9/12 2xl:w-2/3 mx-0 h-auto pt-4 bg-white block md:hidden">
        <ImageCarousel imageURLArray={["001.avif","002.avif","003.avif"]} path={`/assets/images/historic/${track.circuitId}/`} alt={`${track.locationCity} images`} />
      </div>
      <div className="w-full lg:w-9/12 2xl:w-2/3 flex flex-wrap pt-4 md:pt-6 px-4 gap-x-8 bg-white">
        <div className="w-full md:w-1/2 flex flex-col gap-6 pr-2 md:border-t-4 md:border-r-4 md:rounded-tr-lg md:border-black ">
          <h3 className="text-xl md:text-2xl font-bold pt-2">Track Story</h3>
          <p>{track.firstParagraph}</p>
          <p>{track.secondParagraph}</p>
        </div>
        <div className="w-[45%] pl-12 hidden md:block">
          <DetailMap lat={track.lat} long={track.long} circuitName={track.circuitName} locationCity={track.locationCity} locationCountry={track.locationCountry}/>
        </div>
        <div className="w-full mt-4">
          <p>{track.thirdParagraph}</p>
        </div>
      </div>
      <div className="w-full lg:w-9/12 2xl:w-2/3 m-0 pt-4 h-auto bg-white hidden md:block">
        <ImageCarousel imageURLArray={["001.avif","002.avif","003.avif"]} path={`/assets/images/historic/${track.circuitId}/`} alt={`${track.locationCity} images`} />
      </div>
      <div className="w-full px-4 rounded-sm bg-white block md:hidden">
          <DetailMap lat={track.lat} long={track.long} circuitName={track.circuitName} locationCity={track.locationCity} locationCountry={track.locationCountry}/>
        </div>
    </div>
  )
}

export default TrackDetailPage

// not sure i like the bg's of the sections being white for both- but when i do bg-gray-50 it looks worse?


// <div className="w-full lg:w-9/12 2xl:w-2/3 flex flex-col pt-6 px-4 bg-white gap-x-8 md:px-2  md:flex-row">
// <div className="w-full md:w-1/2 text-lg mb-4 border-r-4 border-t-4 rounded-tr-lg border-black">
//   <h3 className="text-2xl md:text-3xl font-bold mb-2 pt-2">Track Story</h3>
//   <div className="flex flex-col gap-6 px-2">
//     <p>{track.firstParagraph}</p>
//     <p>{track.secondParagraph}</p>
//     <p>{track.thirdParagraph}</p>
//   </div>
// </div>
// <div className="w-full md:w-1/2">
//   <DetailMap lat={track.lat} long={track.long} circuitName={track.circuitName} locationCity={track.locationCity} locationCountry={track.locationCountry}/>
// </div>
// </div>