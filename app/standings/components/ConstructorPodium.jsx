import Image from 'next/image'

const ConstructorPodium = ({ firstPlace, secondPlace, thirdPlace}) => {
  if (!firstPlace || !secondPlace || !thirdPlace) return null
  return (
    <div className="podium-container">
        <Image className='h-1/2' priority="high" src='/assets/images/podium.png' alt='podium' width={300} height={300} />
        <div className="podium-first-container">
            <Image src={`/assets/images/logos/${firstPlace}_team_logo.png`} alt='mercedes-logo' width={80} height={80} />
        </div>
        <div className="podium-second-container">
            <Image src={`/assets/images/logos/${secondPlace}_team_logo.png`} alt='mercedes-logo' width={80} height={80} />
        </div>
        <div className="podium-third-container">
            <Image src={`/assets/images/logos/${thirdPlace}_team_logo.png`} alt='mercedes-logo' width={80} height={80} />
        </div>
    </div>
  )
}

export default ConstructorPodium