import Image from "next/image"

const DriversLoading = () => {
  return (
    <div className='w-full h-96 flex justify-center align-middle items-center'>
      {/* <div>Loading...</div> */}
      <Image className="animate-spin duration-300" src={"/assets/images/red_bull_helmet.png"} priority={true} height={200} width={200} alt="Driver helmet spinning as page loading notification" />
    </div>
  )
}

export default DriversLoading