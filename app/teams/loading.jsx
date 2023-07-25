'use client'
import Image from 'next/image';

import { useState, useEffect } from 'react';

const ConstructorLoading = () => {
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    setIsAnimating(true);

    // After 5 seconds (same duration as the CSS transition), stop the animation
    const timer = setTimeout(() => {
      setIsAnimating(false);
    }, 5000);

    // Cleanup the timer when the component unmounts
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`w-full h-96 flex justify-center items-center ${
        isAnimating ? 'animate-moveRightAnimation' : 'transform-none'
      }`}
    >
      <Image
        className="h-48 w-48 object-contain" /* Adjust the size as per your requirement */
        src={"/assets/images/cars/red_bull_car.avif"}
        alt="Car moving left to right as page loading notification to denote progress"
        width={200}
        height={200}
      />
    </div>
  );
};

export default ConstructorLoading;






// import Image from "next/image"

// const ConstructorLoading = () => {
//   return (
//     <div className='w-full h-96 flex justify-center align-middle items-center'>
//       <Image className="" src={"/assets/images/cars/red_bull_car.avif"} priority={true} height={200} width={200} alt="Driver helmet spinning as page loading notification" />
//     </div>
//   )
// }

// export default ConstructorLoading