"use client";
import { useState } from "react";
import Image from "next/image";
import { BsChevronCompactLeft, BsChevronCompactRight, BsCircle } from "react-icons/bs";
import { LuRectangleHorizontal } from "react-icons/lu";

const ImageCarousel = ({ imageURLArray, path, alt }) => {
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
    <div className="bg-white border-t-2 border-gray-100 max-w-full m-0 relative flex justify-center group">
        <div className="flex flex-row absolute top-4 gap-x-2">
          {/* dashes to denote carousel */}
          {imageURLArray.map((image, index) => (
            <div key={index} onClick={() => setCurrentIndex(index)} className={` text-white rounded-full text-lg md:text-xl z-10 ${index === currentIndex ? "bg-gray-100" : ""}`}><BsCircle size={"1em"} /></div>
            ))}
          {/* <div className="bg-black/20 text-white rounded-full z-10"><BsCircle /></div> */}
        </div>
        <Image src={`${path}${imageURLArray[currentIndex]}`} className="object-contain z-0  md:rounded-2xl" fill={false} width={1440} height={608} priority={true} alt={alt} />
        {/* left arrow */}
        <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
            <BsChevronCompactLeft onClick={handlePrev} size={30} />
        </div>
        {/* right arrow */}
        <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
            <BsChevronCompactRight onClick={handleNext} size={30} />
        </div>
        {/* left box */}
        <div onClick={handlePrev} className="hidden h-full group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-0 w-1/6 bg-black/5 md:w-2/12 text-white cursor-pointer">
        </div>
        {/* right box */}
        <div onClick={handleNext} className="hidden h-full group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-0 w-1/6 bg-black/5 md:w-2/12 text-white cursor-pointer">
        </div>
    </div>
  )
  };


export default ImageCarousel;
