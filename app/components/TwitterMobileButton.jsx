'use client'
import { FaTwitter } from 'react-icons/fa'
import { useState, useEffect, useRef } from 'react'
import TwitterTimeLine from './TwitterTimeline'

const TwitterMobileButton = ({ twitterHandle }) => {
  const [showModal, setShowModal] = useState(false)
  const [ animationComplete, setAnimationComplete ] = useState(false)
  const modalRef = useRef(null);

  const handleTwitterIconOpen = () => {
    setShowModal(true)
    // setAnimationComplete(true)
    setTimeout(() => {
      setAnimationComplete(true)
    }
    , 1000)
  }

  const handleTwitterIconClose = () => {
    setShowModal(false)
    setAnimationComplete(false)
  }

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        handleTwitterIconClose();
      }
    };

    if (showModal) {
      document.addEventListener('click', handleClickOutside);
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [showModal]);

  return (
    <>
      {!showModal && <button>
        <FaTwitter onClick={() => handleTwitterIconOpen()} />
      </button>
      }

      {showModal && !animationComplete && (
        <div id='animate' className='w-16 h-16 duration-2000 absolute animate-twitter-circular-animation animate-spin'>
          <FaTwitter />
        </div>
        )}

      {showModal && animationComplete ? (
        <>
          <div className="fixed inset-0 flex items-center justify-center z-50 bg-slate-800 bg-opacity-90 transition-opacity">
          <div className="modal-overlay" ref={modalRef}>
          <div className='transform translate-y-[5%]'>
          {/* <div className='absolute -top-12 right-2'>
            <button onClick={() => handleTwitterIconClose()}>X</button>
          </div> */}
          <TwitterTimeLine
            twitterHandle={twitterHandle}
            height={"800px"}
            width={"350px"}
          />
          </div>
          </div>
        </div>
        </>
      ) : null}
    </>
  )
}

export default TwitterMobileButton