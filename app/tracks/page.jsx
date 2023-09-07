'use client'
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi';

export default function TracksMap() {
  const API_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
  const [selectedMarker, setSelectedMarker] = useState(null);
  const [mobileScreen, setMobileScreen] = useState(false);
  const [mobileTrackIndex, setMobileTrackIndex] = useState(0);
  const [ centerMobile, setCenterMobile ] = useState({
    lat: 50,
    lng: 10
  });

  // get track list from api linked to db
  const [ trackList, setTrackList ] = useState([]);
  useEffect(() => {
    const fetchTracks = async () => {
      const res = await fetch('/api/tracks', { next: {revalidate: 60}});
      const data = await res.json();
      setTrackList(data);
    };
    fetchTracks();
  }, []);


  useEffect(() => {
    const handleResize = () => {
      const isMobile = window.innerWidth <= 897;
      setMobileScreen(isMobile);
    };

    handleResize();

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleMarkerClick = (marker) => {
    setSelectedMarker(marker);
    setCenterMobile({lat: marker.lat, lng: marker.long});
  };

  const handleCloseInfoWindow = () => {
    setSelectedMarker(null);
  };

  const handleTrackClick = (track) => {
    setSelectedMarker(track);
    setCenterMobile({lat: track.lat, lng: track.long});
  };

  const renderTrackList = () => {
    const sortedTrackList = trackList.sort((a, b) =>
      a.circuitName.localeCompare(b.circuitName)
    );

    const trackBoxes = [];
    let currentBox = [];

    for (let i = 0; i < sortedTrackList.length; i++) {
      currentBox.push(sortedTrackList[i]);

      if (currentBox.length === 6 || i === sortedTrackList.length - 1) {
        trackBoxes.push(currentBox);
        currentBox = [];
      }
    }

    return trackBoxes.map((box, index) => (
      <div key={index} className='border-borderColor border-2 border-solid bg-altGray p-4'>
        {box.map((track, trackIndex) => (
          <p
            key={trackIndex}
            style={{ cursor: 'pointer' }}
            onClick={() => handleTrackClick(track)}
          >
            {track.circuitName}
          </p>
        ))}
      </div>
    ));
  };

  const renderMobileTrackList = () => {
    const sortedTrackList = trackList.sort((a, b) =>
      a.circuitName.localeCompare(b.circuitName)
    );
    const startIndex = mobileTrackIndex * 5;
    const endIndex = startIndex + 5;
    const currentTracks = sortedTrackList.slice(startIndex, endIndex);
    const disablePrevArrow = mobileTrackIndex === 0;
    const disableNextArrow = endIndex >= sortedTrackList.length;

    const handlePrevArrowClick = () => {
      if (!disablePrevArrow) {
        setMobileTrackIndex(mobileTrackIndex - 1);
      }
    };

    const handleNextArrowClick = () => {
      if (!disableNextArrow) {
        setMobileTrackIndex(mobileTrackIndex + 1);
      }
    };


    return (
      <div className='flex flex-row items-center'>
        <div>
        <button
            onClick={handlePrevArrowClick}
            disabled={disablePrevArrow}
            style={{ marginRight: '10px', fontSize: '2rem' }}
          >
            <BiLeftArrowAlt className={`${disablePrevArrow ? 'text-gray-100 dark:text-background' : ''}`} />
          </button>
        </div>
        <div className='border-borderColor bg-altGray border-[1px] border-solid p-4'>
          {currentTracks && currentTracks.map((track, trackIndex) => (
            <p
              key={trackIndex}
              style={{ cursor: 'pointer' }}
              onClick={() => handleTrackClick(track)}
            >
              {track.circuitName}
            </p>
          ))}
        </div>
        <div>
          <button onClick={handleNextArrowClick} disabled={disableNextArrow} style={{ marginLeft: '10px', fontSize: '2rem'}}>
            <BiRightArrowAlt className={`${disableNextArrow ? 'text-gray-100 dark:text-black' : ''}`} />
          </button>
        </div>
      </div>
    );
  };


// data for the map
  const mapContainerStyle = mobileScreen ? { width: '100%', height: '65vh' } : { width: '75%', height: '65vh'}

  const centerDesktop = {
    lat: 10,
    lng: 0
  };

  const mapOptions = {
    disableDefaultUI: true,
  }

  return (
    <div className='tracks-container'>
      <div className='tracks-title-block'>
        <h1 className='font-bold font-sans mb-4 text-2xl md:text-3xl'>Tracks</h1>
        {/* <h1 className='font-bold font-sans mb-2 text-3xl hidden md:block'>2023 Formula 1 Tracks </h1> */}
      </div>
      <div className='flex justify-center'>
        <LoadScript googleMapsApiKey={API_KEY}>
          <GoogleMap
            mapContainerStyle={mapContainerStyle}
            center={mobileScreen ? centerMobile : centerDesktop}
            zoom={mobileScreen ? 4.5 : 3}
            disableDefaultUI={mapOptions}>
              {trackList.map((marker, index) => (
                <Marker
                  icon={"/assets/images/red_flag.png"}
                  key={index}
                  position={{ lat: marker.lat, lng: marker.long }}
                  onClick={() => handleMarkerClick(marker)}
                />
              ))}
              {selectedMarker && (
                <Link href={`/tracks/${selectedMarker.circuitId}`}>
                  <InfoWindow
                    position={{ lat: selectedMarker.lat, lng: selectedMarker.long }}
                    onCloseClick={handleCloseInfoWindow}
                  >
                    <div>
                      <h3 className="px-4"><strong className='text-md text-black font-bold'>{selectedMarker.circuitName}</strong></h3>
                      <p className='text-black'>{selectedMarker.locationCity}, {selectedMarker.locationCountry}</p>
                      <button className='border-red-500 border-2 rounded-lg bg-red-500 text-white px-2 font-bold mt-2'>Track Details</button>
                    </div>
                  </InfoWindow>
                </Link>
              )}
          </GoogleMap>
        </LoadScript>
      </div>

        {/* Container with track list */}
      {/* <div className='tracks-title-block mt-2'>
        <h1 className='font-bold font-sans text-3xl md:hidden'>
          2023 Formula 1 Tracks
        </h1>
      </div> */}
      <div className='track-list-container'>
        {mobileScreen ? renderMobileTrackList() : renderTrackList()}
      </div>
    </div>
  );
}
