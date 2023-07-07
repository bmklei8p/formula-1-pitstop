'use client'
import { useState, useEffect } from 'react';
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';

import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi';

export default function TracksMap() {
  const API_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
  const [selectedMarker, setSelectedMarker] = useState(null);
  const [mobileScreen, setMobileScreen] = useState(false);
  const [mobileTrackIndex, setMobileTrackIndex] = useState(0);

  // get track list from api linked to db
  const [ trackList, setTrackList ] = useState([]);
  useEffect(() => {
    const fetchTracks = async () => {
      const res = await fetch('/api/tracks');
      const data = await res.json();
      setTrackList(data);
    };
    fetchTracks();
  }, []);


  useEffect(() => {
    const handleResize = () => {
      const isMobile = window.innerWidth <= 768;
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
  };

  const handleCloseInfoWindow = () => {
    setSelectedMarker(null);
  };

  const handleTrackClick = (track) => {
    setSelectedMarker(track);
  };

  const renderTrackList = () => {
    const sortedTrackList = trackList.sort((a, b) =>
      a.officialName.localeCompare(b.officialName)
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
      <div key={index} className='track-list-box'>
        {box.map((track, trackIndex) => (
          <p
            key={trackIndex}
            style={{ cursor: 'pointer' }}
            onClick={() => handleTrackClick(track)}
          >
            {track.officialName}
          </p>
        ))}
      </div>
    ));
  };

  const renderMobileTrackList = () => {
    const sortedTrackList = trackList.sort((a, b) =>
      a.officialName.localeCompare(b.officialName)
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
      <div className='mobile-track-list-container'>
        <div>
        <button
            onClick={handlePrevArrowClick}
            disabled={disablePrevArrow}
            style={{ marginRight: '10px', fontSize: '2rem' }}
          >
            <BiLeftArrowAlt />
          </button>
        </div>
        <div className='track-list-box'>
          {currentTracks.map((track, trackIndex) => (
            <p
              key={trackIndex}
              style={{ cursor: 'pointer' }}
              onClick={() => handleTrackClick(track)}
            >
              {track.officialName}
            </p>
          ))}
        </div>
        <div>
          <button onClick={handleNextArrowClick} disabled={disableNextArrow} style={{ marginLeft: '10px', fontSize: '2rem'}}>
            <BiRightArrowAlt />
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
  const centerMobile = {
    lat: 50,
    lng: 10
  };

  const mapOptions = {
    disableDefaultUI: true,
  }

  return (
    <div className='tracks-container'>
      <div className='tracks-title-block'>
        <h1 className='page-title'>
          2023 Formula 1 Tracks
        </h1>
      </div>
      <div className='map-container'>
        <LoadScript googleMapsApiKey={API_KEY}>
          <GoogleMap
            mapContainerStyle={mapContainerStyle}
            center={mobileScreen ? centerMobile : centerDesktop}
            zoom={mobileScreen ? 4.5 : 3}
            disableDefaultUI={mapOptions}>
              {trackList.map((marker, index) => (
                <Marker
                  key={index}
                  position={{ lat: marker.lat, lng: marker.long }}
                  onClick={() => handleMarkerClick(marker)}
                />
              ))}
              {selectedMarker && (
                <InfoWindow
                  position={{ lat: selectedMarker.lat, lng: selectedMarker.long }}
                  onCloseClick={handleCloseInfoWindow}
                >
                  <div>
                    <h3 style={{fontWeight: 'bold'}}>Official Name: {selectedMarker.officialName}</h3>
                    <p>Location: {selectedMarker.locationCity}, {selectedMarker.locationCountry}</p>
                  </div>
                </InfoWindow>
              )}
          </GoogleMap>
        </LoadScript>
      </div>
        {/* Container with track list */}
      <div className='track-list-container'>
        {mobileScreen ? renderMobileTrackList() : renderTrackList()}
      </div>
    </div>
  );
}
