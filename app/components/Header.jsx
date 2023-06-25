'use client'

import React, { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="flex w-full items-center justify-between bg-red-500 p-4">
      <div className="flex items-center">
        <img src="/path/to/logo.png" alt="Logo" className="h-8 mr-4" />
      </div>
      <div>
        <h3 className="text-white font-bold text-xl">Formula 1</h3>
      </div>
      <div className="flex items-center">
        <ul className="hidden sm:flex space-x-4">
          <li>
            <Link href="/schedule" className='text-white'>
              Schedule
            </Link>
          </li>
          <li>
            <Link href="/standings" className='text-white'>
              Standings
            </Link>
          </li>
          <li>
            <Link href="/teams" className='text-white'>
              Teams
            </Link>
          </li>
          <li>
            <Link href="/drivers" className="text-white"> 
                Drivers
            </Link>
          </li>
          <li>
            <Link href="/tracks" className="text-white">
              Tracks
            </Link>
          </li>
        </ul>
        <button
          className="sm:hidden text-white ml-4 focus:outline-none"
          onClick={toggleMenu}
        >
          Menu
        </button>
      </div>
      {isMenuOpen && (
        <div className="sm:hidden bg-red-500 p-4 absolute top-16 right-0 z-50">
          <ul className="space-y-2">
            <li>
              <Link href="/schedule" className="text-white block"> 
                Schedule
              </Link>
            </li>
            <li>
              <Link href="/standings" className="text-white block">  
                Standings
              </Link>
            </li>
            <li>
              <Link href="/teams" className="text-white block"> 
                Teams
              </Link>
            </li>
            <li>
              <Link href="/drivers" className="text-white block">
                Drivers
              </Link>
            </li>
            <li>
              <Link href="/tracks" className="text-white block">
                Tracks
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
