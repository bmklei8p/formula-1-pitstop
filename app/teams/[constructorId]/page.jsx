import DriverInfoBox from "../components/DriverInfoBox";
import ConstructorInfoBox from "../components/ConstructorInfoBox";
import ImageCarousel from "../components/ImageCarousel";
import Image from "next/image";

// export async function generateStaticParams() {
//     const races = await fetch('http://localhost:3000/api/schedule/season').then((res) => res.json())

//     return races.map((race) => ({
//       round: race.round,
//     }))
//   }

const ConstructorDetailPage = async ({ params }) => {
  const constructor = await fetch(
    `http://localhost:3000/api/constructors/${params.constructorId}`
  ).then((res) => res.json());

  return (
    <div className="w-full h-screen flex flex-col items-center bg-gray-100">
      <div className="w-full h-full flex flex-col items-center bg-gray-100">
        <h1 className="text-2xl md:text-3xl font-bold flex pt-2 pb-2 md:pb-4 ">
          {constructor.fullTeamName}
        </h1>
        <div className="w-full md:w-9/12 2xl:w-2/3 bg-white flex flex-col gap-4 lg:flex-row lg:justify-between md:gap-0 ">
          {/* constructor info container */}
          <div className="">
            <ConstructorInfoBox constructor={constructor} />
          </div>
          {/* diver pictures container */}
          <div className="">
          {(constructor.constructorId === "alphatauri") ?  (
            <div className="flex flex-col md:flex-row">
              <DriverInfoBox
                pictureURL={constructor.driverOnePictureURL}
                driverId={constructor.driverOneId}
                driverName={constructor.driverOne}
              />
              <DriverInfoBox
                pictureURL={constructor.driverTwoPictureURL}
                driverId={constructor.driverTwoId}
                driverName={constructor.driverTwo}
              />
              {/* alphatauri additional box for d-ric pic box */}
              <DriverInfoBox pictureURL={"de_Vries_front.png"} driverId={"de_vries"} driverName={"Nyck de Vries"} />
            </div>
          ) :  (
            <div className="flex flex-row">
                <DriverInfoBox
                  pictureURL={constructor.driverOnePictureURL}
                  driverId={constructor.driverOneId}
                  driverName={constructor.driverOne}
                />
                <DriverInfoBox
                  pictureURL={constructor.driverTwoPictureURL}
                  driverId={constructor.driverTwoId}
                  driverName={constructor.driverTwo}
              />
              </div>)}
          </div>
        </div>
        <div className="w-full md:w-9/12 2xl:w-2/3 m-0 h-auto bg-gray-100">
          <ImageCarousel imageURLArray={["001.avif","002.avif","003.avif"]} path={`/assets/images/teams/${constructor.constructorId}/`} />
            {/* <Image src={`/assets/images/historic/albert_park_001.webp`} alt="sdf" priority={true} width={1920} height={1080} /> */}
        </div>
      </div>
    </div>
  );
};

export default ConstructorDetailPage;

// sianz, magnussen, alphatauri
