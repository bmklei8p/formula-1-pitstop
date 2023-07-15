import Image from "next/image";
import DriverInfoBox from "../components/DriverInfoBox";

// export async function generateStaticParams() {
//     const races = await fetch('http://localhost:3000/api/schedule/season').then((res) => res.json())

//     return races.map((race) => ({
//       round: race.round,
//     }))
//   }

const ConstructorDetailPage = async ({ params }) => {

  const constructor = await fetch(`http://localhost:3000/api/constructors/${params.constructorId}`
  ).then((res) => res.json())

  return (
    <div className="w-full flex justify-center">
      <div className="w-full md:w-9/12 bg-white flex flex-col md:flex-row md:justify-between">
        {/* constructor info container */}
        <div className=""> 
          <p>hi?</p>
        </div>
        {/* diver pictures container */}
        <div className="">
          <div className="flex flex-row">
            <DriverInfoBox pictureURL={constructor.driverOnePictureURL} driverName={constructor.driverOne} />
            <DriverInfoBox pictureURL={constructor.driverTwoPictureURL} driverName={constructor.driverTwo} />
            {/* alphatauri additional box for d-ric pic box */}
            {constructor.constructorId === "alphatauri" && <DriverInfoBox pictureURL={constructor.driverOnePictureURL} driverName={constructor.driverOne} />}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ConstructorDetailPage


// sianz, magnussen, alphatauri