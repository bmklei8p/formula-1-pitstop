import Image from "next/image";
import Link from "next/link";

const DriverPodium = ({ firstPlace, secondPlace, thirdPlace }) => {
  return (
    <div className="md:w-1/2">
      <div className="driver-podium-container">
        <Image
          priority="high"
          src="/assets/images/podium.png"
          alt="podium"
          width={300}
          height={300}
        />
        <div className="driver-podium-first-container">
          <Link href={`drivers/${firstPlace.driverId}`}>
            <div className="w-[100px] h-[100px] rounded-full overflow-hidden bg-background">
              <Image
                className="object-contain"
                src={`/assets/images/drivers/${firstPlace.driverId}_front.png`}
                alt={`${firstPlace.familyName}'s image`}
                width={100}
                height={100}
              />
            </div>
          </Link>
        </div>
        <div className="driver-podium-second-container">
          <Link href={`drivers/${secondPlace.driverId}`}>
            <div className="w-[100px] h-[100px] rounded-full overflow-hidden bg-background">
              <Image
                className="object-contain"
                src={`/assets/images/drivers/${secondPlace.driverId}_front.png`}
                alt={`${secondPlace.familyName}'s image`}
                width={100}
                height={100}
              />
            </div>
          </Link>
        </div>
        <div className="driver-podium-third-container">
          <Link href={`drivers/${thirdPlace.driverId}`}>
            <div className="w-[100px] h-[100px] rounded-full overflow-hidden bg-background">
              <Image
                className="object-contain"
                src={`/assets/images/drivers/${thirdPlace.driverId}_front.png`}
                alt={`${thirdPlace.familyName}'s image`}
                width={100}
                height={100}
              />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DriverPodium;
