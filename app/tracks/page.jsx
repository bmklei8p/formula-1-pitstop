'use client'
import { useState, useEffect } from 'react';
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';

export default function TracksMap() {
  const API_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
  const [selectedMarker, setSelectedMarker] = useState(null);
  const [mobileScreen, setMobileScreen] = useState(false);
  const [mobileTrackIndex, setMobileTrackIndex] = useState(0);

  // get track list from api
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
      <div>
        <div>
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
          <button
            onClick={handlePrevArrowClick}
            disabled={disablePrevArrow}
            style={{ marginRight: '10px' }}
          >
            {'<'}
          </button>
          <button onClick={handleNextArrowClick} disabled={disableNextArrow}>{'>'}</button>
        </div>
      </div>
    );
  };


// data for the map
  const mapContainerStyle = {
    width: '100%',
    height: '70vh'
  };

  const centerDesktop = {
    lat: 10,
    lng: 0
  };
  const centerMobile = {
    lat: 50,
    lng: 10
  };

  return (
    <div className='tracks-container'>
      <h1>
        2023 Formula 1 Tracks
      </h1>
      <LoadScript googleMapsApiKey={API_KEY}>
        <GoogleMap
          mapContainerStyle={mapContainerStyle}
          center={mobileScreen ? centerMobile : centerDesktop}
          zoom={mobileScreen ? 4.5 : 3}
        >
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
                <h3>{selectedMarker.officialName}</h3>
                <p>{selectedMarker.des}</p>
              </div>
            </InfoWindow>
          )}
        </GoogleMap>
      </LoadScript>
        {/* Container with track list */}
      <div className='track-list-container'>
        {mobileScreen ? renderMobileTrackList() : renderTrackList()}
      </div>
    </div>
  );
}
