import Image from "next/image"

const HomePage = () => {
  return (
    <div className="w-full h-[65vh]">
      <Image src="/assets/images/home-pit-stop-desktop.png" alt="pit-stop" width={4111} height={1100} className="object-contain lg:block" />
    </div>
  )
}

export default HomePage


          {/* Banner */}
      {/* <section className="hidden lg:block">
        <div className="bg-gray-800 overflow-hidden">
          <Image src='/assets/images/pit-stop.avif' alt="pit-stop" priority={true} width={4111} height={1111} className="contain opacity-20"  />
          <h1 className="text-3xl md:text-5xl text-white absolute font-bold top-[10%]">Formula 1 Pitstop</h1>
          <p className="text-2xl md:text-xl text-white absolute top-[20%]">Your <strong>one stop</strong> for all things F1</p>
        </div>
      </section>
      <section className="block lg:hidden">
        <div className="bg-gray-200 overflow-hidden h-[80vh] flex justify-center">
          <Image src='/assets/images/pit-stop-mobile.png' alt="pit-stop" priority={true} width={1895} height={4000} className="object-scale-down opacity-90 md:hidden"  />
          <h1 className="text-3xl md:text-5xl text-white absolute font-bold top-[10%]">Formula 1 Pitstop</h1>
          <p className="text-2xl md:text-xl text-white absolute top-[20%]">Your <strong>one stop</strong> for all things F1</p>
        </div>
      </section> */}
      <div className="w-full bg-gray-200">
        <video autoPlay muted loop={false} className="w-full h-[80vh] object-cover -z-10">
          <source src="/assets/images/pit-stop.mp4" type="video/mp4" />
        </video>
      </div>
      {/* End Banner */}