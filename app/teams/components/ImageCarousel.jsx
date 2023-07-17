"use client";
import { useState } from "react";
import Image from "next/image";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";

const ImageCarousel = ({ imageURLArray, path }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex(
      (currentIndex) => (currentIndex + 1) % imageURLArray.length
    );
  };
  const handlePrev = () => {
    setCurrentIndex((currentIndex) =>
      currentIndex === 0
        ? 2
        : (currentIndex - 1) % imageURLArray.length
    );
  };



  return (
    <div className="bg-white border-t-2 border-gray-100 max-w-[1400px] h-[780px] w-full m-auto px-2 relative group">
        <div style={{backgroundImage: `url(${path}${imageURLArray[currentIndex]})`}} className="w-full h-full rounded-2xl bg-no-repeat bg-top bg-contain duration-500">
        {/* left arrow */}
        </div>
        <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
            <BsChevronCompactLeft onClick={handlePrev} size={30} />
        </div>
        {/* right arrow */}
        <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
            <BsChevronCompactRight onClick={handleNext} size={30} />
        </div>
    </div>
  )
  };

//   return (
//      <div className="bg-white border-t-2 border-gray-100 flex flex-row justify-center relative">
//         <button className="absolute z-10 right-[92%] w-32 top-2/4 text-3xl border-2 border-black" onClick={handlePrev}>Prev</button>
//         <Image
//             src={`${path}${imageURLArray[currentIndex]}`}
//             className="object-contain z-0"
//             fill={false}
//             width={1080}
//             height={608}
//             priority={true}
//             alt=""
//         />
//         <button className="absolute z-10 left-[92%] w-32 top-2/4 text-3xl border-2 border-black" onClick={handleNext}>Next</button>
//       </div>
//   );
// };

export default ImageCarousel;


        {/* <button className="relative left-20 z-10 h-1/2 w-1/5 text-3xl border-2 border-black" onClick={handlePrev}>Prev</button> */}
        {/* <button className="relative z-10 h-1/2 right-20 text-3xl border-2 border-black" onClick={handleNext}>Next</button> */}
