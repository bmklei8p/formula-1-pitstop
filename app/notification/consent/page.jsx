import Image from "next/image"
import consent from '../../../public/assets/images/notification_consent.png'
import desktopConsent from '../../../public/assets/images/desktop_consent.png'


const NotificationConsentPage = () => {
  return (
    <div className='flex flex-row gap-x-16 align-middle items-center mt-20'>
      <div className="flex text-center flex-col">
        <h2>Mobile SMS consent image</h2>
      <Image src={consent} width={300} height={100} />
      </div>
      <div className="flex text-center flex-col">
        <h2>Desktop SMS consent image</h2>
      <Image src={desktopConsent} width={1200} height={800} />
      </div>
    </div>
  )
}

export default NotificationConsentPage