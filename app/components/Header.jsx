'use client'
import React from 'react'
import { useState } from 'react'

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
    //  desktop header
    <div className='header-container'>
        <div className="header-box">
            <div className="logo">
                <Image className="logo-img" src='/assets/images/logo.png' alt='f1-logo' width={50} height={50} />
                <h2 className="text-2xl font-semibold">Formula 1 Pitstop</h2>
            </div>
            <div className="hidden lg:p-2 lg:block">
                <div className='grid grid-cols-5 divide-x-2 justify-center '>
                {navLinks.map((link) => (
                        <Link key={link.href} className='text-xl hover:bg-white text-light hover:text-black flex px-4 items-center justify-center' href={link.href}>{link.title}</Link>
                    ))}
                </div>
            </div>
            {/* mobile header - sidebar */}
            <div className="lg:hidden flex justify-end">
                <RiMenuFill size={30} onClick={() => setShowSideBar((prev) => !prev)} />
                {showSideBar && (
                    <div className="sidebar">
                        <div className="sidebar-links">
                            {navLinks.map((link) => (
                                <Link key={link.href} href={link.href} onClick={() => setShowSideBar(false)}>
                                    <div className="sidebar-link-block">
                                        <div className="sidebar-link-box">
                                            {link.icon && React.cloneElement(link.icon, { size: 25 })}
                                            {link.img && <Image src={link.img} alt='f1-logo' width={25} height={25} />}
                                        </div>
                                        {link.title}
                                    </div>
                                </Link>
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

export default Header