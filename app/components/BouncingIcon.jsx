import { FaRegArrowAltCircleDown } from "react-icons/fa";

const BouncingIcon = () => {
  return (
    <div className="bg-gray-100">
      <div className="">
        {/* Pointer down icon */}
        <div className="animate-bounce text-6xl text-red-500">
            <FaRegArrowAltCircleDown />
        </div>
      </div>
    </div>
  );
};

export default BouncingIcon;
