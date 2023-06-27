'use client'

import { useState } from 'react'
import React from 'react'

import Link from 'next/link'
import Image from 'next/image'
import { RiMenuFill } from 'react-icons/ri'
import { BiSolidBarChartAlt2, BiSolidCalendar } from 'react-icons/bi'
import { GiFullMotorcycleHelmet } from 'react-icons/gi'
import { PiFlagCheckeredFill } from 'react-icons/pi'

const Header = () => {
  const [showSideBar, setShowSideBar] = useState(false)

  const navLinks = [{
    title: "Schedule",
    href: '/schedule',
    icon: <BiSolidCalendar />,
    }, {
    title: "Standings",
    href: '/standings',
    icon: <BiSolidBarChartAlt2 />,
    }, {
    title: "Drivers",
    href: '/drivers',
    icon: <GiFullMotorcycleHelmet />,    
    }, {
    title: "Teams",
    href: '/teams',
    icon: <PiFlagCheckeredFill />,    
    }, {
    title: "Tracks",
    href: '/tracks',
    icon: "",
    img: '/assets/images/race-track-icon.svg',
    }, 
]

return (
    // desktop header
    <div className='header-container'>
        <div className="header-box">
            <div className="logo">
                <Image className="logo-img" src='/assets/images/logo.png' alt='f1-logo' width={50} height={50} />
                <h2 className={showSideBar ? "hidden" : "title"}>Formula 1 Pitstop</h2>
            </div>
            <div className="md:flex hidden" style={{padding: "1rem"}}>
                <div className='links'>
                {navLinks.map((link) => (
                        <div key={link.href} className='desktop-link-box'>
                            <Link href={link.href}>{link.title}</Link>
                        </div>
                    ))}
                </div>
            </div>
            {/* mobile header - sidebar */}
            <div className="md:hidden flex justify-end">
                <RiMenuFill size={30} onClick={() => setShowSideBar((prev) => !prev)} />
                {showSideBar && (
                    <div className="sidebar">
                        <div className="sidebar-header">
                            <Image className="logo-img" src='/assets/images/logo.png' alt='f1-logo' width={50} height={50} />
                            <h2 className="sidebar-title">Formula 1 Pitstop</h2>
                        </div>
                        <div className="sidebar-links">
                            {navLinks.map((link) => (
                            <div key={link.href} className="sidebar-link-block">
                                <div className="sidebar-link-box">
                                    {link.icon && React.cloneElement(link.icon, { size: 25 })}
                                    {link.img && <Image src={link.img} alt='f1-logo' width={25} height={25} />}
                                </div>
                                <Link href={link.href} onClick={() => setShowSideBar(false)}>
                                    {link.title}
                                </Link>
                            </div>
                            ))}
                        </div>
                        <div className="sidebar-close">
                            <button className="btn btn-primary" onClick={() => setShowSideBar(false)}>Close</button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    </div>
  )
}


// mobile menu with 
//  <RiMenuFill size={30} onClick={() => setShowSideBar((prev) => !prev)} />
    // {showSideBar && (
    //     <div className="mobile-menu">
    //         {navLinks.map((link) => (
    //             <Link key={link.href} href={link.href}>{link.title}</Link>
    //         ))}
    //         <div>
    //             <button className="btn btn-primary" onClick={() => setShowSideBar((prev) => !prev)}>Close</button>
    //         </div>
    //     </div>
    // )}


// Header with icon left, title center, and links right but not working with responsive:
// the title is not centered when the screeen is smaller than a large desktop   uses flex-basis-30/40/30
//   return (
//     // desktop header
//     <div className='header-container'>
//         <div className="header-box">
//             <div className="logo">
//                 <Image src='/assets/images/logo.png' alt='f1-logo' width={45} height={45} />
//             </div>
//             <div className="md:flex hidden">
//                 <h2 className="title">Formula 1 Pitstop</h2>
//             </div>
//             <div className="md:flex hidden" >
//                 <div className='flex-basis-30 flex justify-end gap-15'>
//                 {navLinks.map((link) => (
//                         <Link key={link.href} href={link.href}>{link.title}</Link>
//                     )
//                 )}
//                 </div>
//             </div>
//         </div>
//     </div>
//   )
// }

export default Header