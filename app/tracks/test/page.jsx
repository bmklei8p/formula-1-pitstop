'use client'
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi';
import Image from 'next/image';

export default function TrackTestMap() {
  // ... (your existing code)
  const [ centerMobile, setCenterMobile ] = useState({
    lat: 50,
    lng: 10
  });
  const [mobileScreen, setMobileScreen] = useState(false);
    const centerDesktop = {
    lat: 10,
    lng: 0
  };
  const [ trackList, setTrackList ] = useState([]);
  useEffect(() => {
    const fetchTracks = async () => {
      const res = await fetch('/api/tracks', { next: {revalidate: 360000}});
      const data = await res.json();
      setTrackList(data);
    };
    fetchTracks();
  }, []);

  // Construct the URL for the static map image
  const mapContainerStyle = mobileScreen ? { width: '100%', height: '65vh' } : { width: '640', height: '640' };
  const mapCenter = mobileScreen ? centerMobile : centerDesktop;
  const zoomLevel = mobileScreen ? 4.5 : 3;
  const googleMapsStaticAPIKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
  const mapImageUrl = `https://maps.googleapis.com/maps/api/staticmap?center=${mapCenter.lat},${mapCenter.lng}&zoom=${zoomLevel}&size=${mapContainerStyle.width}x${mapContainerStyle.height}&markers=${trackList.map(marker => marker.lat + ',' + marker.long).join('|')}&key=${googleMapsStaticAPIKey}`;

  return (
    <div className='tracks-container'>
      <div className='tracks-title-block'>
        <h1 className='font-bold font-sans mb-4 text-2xl md:text-3xl'>Tracks</h1>
      </div>
      <div className='flex justify-center'>
        {/* Use the Image component for the static map */}
        <Image src={mapImageUrl} alt="Tracks Map" width={mapContainerStyle.width} height={mapContainerStyle.height} />
      </div>

      {/* Container with track list */}
      {/* <div className='track-list-container'>
        {mobileScreen ? renderMobileTrackList() : renderTrackList()}
      </div> */}
    </div>
  );
}
