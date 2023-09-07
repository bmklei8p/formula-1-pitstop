"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

const DriversPage = async () => {
  const [driversStandings, setDriversStandings] = useState([]);
  const [driverInformation, setDriverInformation] = useState(null);

  // drivers standings api call from ergast
  useEffect(() => {
    const getDriverStandings = async () => {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/standings/drivers`,
        { next: { revalidate: 60 } }
      );
      const data = await res.json();
      setDriversStandings(data);
    };
    getDriverStandings();
  }, []);

  // driver information api call from db
  useEffect(() => {
    const getDriverInformation = async () => {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/drivers/mdb`,
        { next: { revalidate: 60} }
      );
      const data = await res.json();
      // convert to map for faster lookup
      const driversMap = new Map();
      data.forEach((driver) => {
        driversMap.set(driver.driverId, driver);
      });
      setDriverInformation(driversMap);
    };
    getDriverInformation();
  }, []);

  return (
    <div className="w-full mx-4 mt-4 md:w-3/4 mb-4">
      {/* card container */}
      <div className="flex justify-center">
        {/* <div classname='flex justify-left mx-3'> */}
        <h1 className="font-bold text-2xl md:text-3xl mb-4">Drivers</h1>
      </div>
      <div className="grid grid-cols-1 mx-3 gap-8 xl:gap-16 md:grid-cols-2 lg:grid-cols-3 ">
        {/* card   */}
        {driversStandings &&
          driverInformation &&
          driversStandings.map((driver, index) => {
            const driverId = driver.Driver.driverId;
            const driverColor = driverInformation.get(driverId)["color"];
            const driverFlag = driverInformation.get(driverId)["flagImage"];
            return (
              <Link key={index} href={`drivers/${driverId}`}>
                {/* hidden div for tailwind border custom utility classes to be pre-loaded for driver color's next to name and on hover*/}
                <div
                  className="hidden border-[#e20b20] border-[#368b74] border-[#6cd3c0] border-[#f91437] border-[#f5801f]
          border-[#2293d1] border-[#34bedd] border-[#b5babd] border-[#c92d4c] border-[#5e8fab]
           hover:border-[#e20b20] hover:border-[#368b74] hover:border-[#6cd3c0] hover:border-[#f91437] hover:border-[#f5801f]
          hover:border-[#2293d1] hover:border-[#34bedd] hover:border-[#b5babd] hover:border-[#c92d4c] hover:border-[#5e8fab]"
                >
                  There has to be a better way to do this
                </div>
                <div
                  className={`flex group p-2 w-full flex-col border-t-4 border-r-4 hover:border-[${driverColor}] border-borderColor rounded-tr-lg`}
                >
                  <div className="flex flex-row justify-between">
                    <div className="flex justify-center items-center text-xl md:text-2xl">
                      <h1>{index + 1}</h1>
                    </div>
                    <div className="flex flex-col">
                      <div className="text-center text-l md:text-xl">
                        {driver.points}
                      </div>
                      <div className="bg-black dark:bg-white dark:text-black text-white font-bold px-2 rounded-lg mb-1">
                        POINTS
                      </div>
                    </div>
                  </div>
                  <div
                    className={`flex flex-row pt-2 pb-2 items-center justify-between border-t-2 border-b-2 border-borderColor group-hover:border-[${driverColor}]`}
                  >
                    <div
                      className={`border-l-4 border-solid border-[${driverColor}]`}
                    >
                      <h3 className="px-2">
                        {driver.Driver.givenName + " "}
                        <strong>{driver.Driver.familyName}</strong>
                      </h3>
                    </div>
                    <div
                      className={`overflow-hidden relative border-solid border-gray-300 dark:border-black rounded-md border-2 w-14 h-8`}
                    >
                      <Image
                        src={`/assets/images/flag/${driverFlag}`}
                        alt={`${driver.Driver.nationality} flag`}
                        sizes="(max-width: 768px) 10vw"
                        className="object-cover"
                        fill={true}
                      />
                    </div>
                  </div>
                  <div className="flex flex-row justify-between items-end">
                    <div className={`overflow-hidden relative w-16 h-10`}>
                      <Image
                        className="object-cover"
                        src={`/assets/images/drivers/car_numbers/${driver.Driver.driverId}_car_number.avif`}
                        sizes="(max-width: 768px) 10vw, (max-width: 1200px) 10vw, 10vw"
                        alt={`${driver.Driver.givenName}'s car number stylized`}
                        fill={true}
                      />
                    </div>
                    <div>
                      <Image
                        src={`/assets/images/drivers/${driver.Driver.driverId}_front.png`}
                        priority={true}
                        alt={`${driver.Driver.givenName} image`}
                        height={200}
                        width={200}
                      />
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
      </div>
    </div>
  );
};

export default DriversPage;
