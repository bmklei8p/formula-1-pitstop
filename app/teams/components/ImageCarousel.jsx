"use client";
import { useState } from "react";
import Image from "next/image";

const ImageCarousel = ({ imageURLArray, path }) => {
  const [currentIndex, setCurrentIndex] = useState(1);

  const handleNext = () => {
    setCurrentIndex(
      (currentIndex) => (currentIndex + 1) % imageURLArray.length
    );
  };
  const handlePrev = () => {
    setCurrentIndex((currentIndex) =>
      currentIndex === 0
        ? currentIndex
        : (currentIndex - 1) % imageURLArray.length
    );
  };

  return (
    <div>
     <div className="bg-white border-t-2 border-gray-100 flex justify-center">
        {/* <button className="z-10 text-3xl" onClick={handlePrev}>Prev</button> */}
        <Image
            src={`${path}${imageURLArray[currentIndex]}`}
            className="object-contain z-0"
            fill={false}
            width={1080}
            height={608}
            priority={true}
            alt=""
        />
        {/* <button className="z-10 text-3xl" onClick={handleNext}>Next</button> */}
      </div>
    </div>
  );
};

export default ImageCarousel;
