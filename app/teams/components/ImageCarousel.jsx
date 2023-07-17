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
    <div className="bg-white border-t-2 border-gray-100 max-w-full m-0 relative group">
        <Image src={`${path}${imageURLArray[currentIndex]}`} className="object-contain z-0  md:rounded-2xl" fill={false} width={1440} height={608} priority={true} alt="" />
        {/* left arrow */}
        <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
            <BsChevronCompactLeft onClick={handlePrev} size={30} />
        </div>
        {/* right arrow */}
        <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
            <BsChevronCompactRight onClick={handleNext} size={30} />
        </div>
        <div onClick={handlePrev} className="hidden h-full group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] w-1/5 bg-black/10 md:w-2/12 text-white cursor-pointer">
        </div>
        {/* right arrow */}
        <div onClick={handleNext} className="hidden h-full group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-0 w-1/5 bg-black/10 md:w-2/12 text-white cursor-pointer">
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

//     {/* <div className="bg-white border-t-2 border-gray-100 w-full m-auto px-2 relative group"> */}
        {/* <div style={{backgroundImage: `url(${path}${imageURLArray[currentIndex]})`}} className="w-full h-auto block rounded-2xl bg-no-repeat bg-top bg-contain duration-500">
        </div> */}

export default ImageCarousel;
