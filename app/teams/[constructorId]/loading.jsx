import Image from "next/image"

const ConstructorLoading = () => {
  return (
    <div className='w-full h-96 flex justify-center align-middle items-center'>
      <div>Loading...</div>
      <Image className="animate-spin duration-300" src={"/assets/images/cars/red_bull_car.avif"} priority={true} height={200} width={200} alt="Driver helmet spinning as page loading notification" />
    </div>
  )
}

export default ConstructorLoading