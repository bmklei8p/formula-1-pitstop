import ImageCarousel from "@/app/components/ImageCarousel";
import TwitterTimeLine from "@/app/components/TwitterTimeline";
import DriverInfoBox from "@/app/drivers/components/DriverInfoBox";
import Image from "next/image";
import TwitterMobileButton from "@/app/components/TwitterMobileButton";

export async function GenerateStaticParams() {
  // may not need a revalidate here as this is just used to generate a list of paths that can be statically generated
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/drivers/mdb/`,
    { cache: 'no-store' } 
  );
  const data = await res.json();
  const paths = data.map((driver) => ({
    params: { driverId: driver.driverId.toString() },
  }));
  return {
    paths,
    fallback: false,
  };
}

export const dynamicParams = false;

const DriverDetailPage = async ({ params }) => {
  const driver = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/drivers/${params.driverId}`,
    { tags: ["driver"] }
  ).then((res) => res.json());

  return (
    <div className="w-full h-screen flex flex-col items-center bg-background dark:bg-background">
      <h1 className="text-2xl md:text-3xl font-bold pt-2 pb-2 md:pb-4">
        {driver.givenName} {driver.familyName}
      </h1>
      <div className="w-full 2xl:w-2/3 justify-between flex flex-col bg-contentBackground dark:bg-contentBackground md:flex-row relative">
        <div className="basis-full bg-gray-900 flex justify-center ">
          <Image
            src={`/assets/images/drivers/${driver.driverId}_front.png`}
            width={500}
            height={500}
            priority={true}
            alt={`${driver.familyName}'s headshot image`}
          />
          <div className="text-5xl text-blue-300 md:hidden absolute right-8 top-10" >
            <TwitterMobileButton twitterHandle={driver.twitterHandle}/>
          </div>
        </div>
        <div className="hidden md:flex lg:justify-start mt-8 xl:mt-0">
          <TwitterTimeLine
            twitterHandle={driver.twitterHandle}
            height={"500px"}
            width={"500px"}
          />
        </div>
      </div>
      <div className="w-full 2xl:w-2/3 bg-contentBackground">
        <DriverInfoBox driver={driver} />
      </div>
      <div className="w-full 2xl:w-2/3 m-0 h-auto bg-contentBackground dark:bg-contentBackground">
        <ImageCarousel
          imageURLArray={["001.avif", "002.avif", "003.avif"]}
          path={`/assets/images/drivers/${driver.driverId}/`}
          alt={`${driver.familyName} images`}
        />
      </div>
    </div>
  );
};

export default DriverDetailPage;
