'use client'
import { useState, useEffect } from 'react';
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';

export default function TracksMap() {
  const API_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
  const [selectedMarker, setSelectedMarker] = useState(null);
  const [mobileScreen, setMobileScreen] = useState(false);
  const [mobileTrackIndex, setMobileTrackIndex] = useState(0);

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
      a.trackName.localeCompare(b.trackName)
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
            {track.trackName}
          </p>
        ))}
      </div>
    ));
  };

  const renderMobileTrackList = () => {
    const sortedTrackList = trackList.sort((a, b) =>
      a.trackName.localeCompare(b.trackName)
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
              {track.trackName}
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

  // Below is data for the map
  const trackList = [
    { trackName: 'Bahrain International Circuit', des: 'Sakhir, Bahrain', lat: 26.0325, lon: 50.5106 },
    { trackName: 'Albert Park Circuit', des: 'Melbourne, Australia', lat: -37.8497, lon: 144.968 },
    { trackName: 'Circuit de Barcelona-Catalunya', des: 'Barcelona, Spain', lat: 41.5664, lon: 2.2617 },
    { trackName: 'Circuit de Monaco', des: 'Monte Carlo, Monaco', lat: 43.7347, lon: 7.4206 },
    { trackName: 'Baku City Circuit', des: 'Baku, Azerbaijan', lat: 40.3725, lon: 49.8532 },
    { trackName: 'Circuit Paul Ricard', des: 'Le Castellet, France', lat: 43.2506, lon: 5.7917 },
    { trackName: 'Red Bull Ring', des: 'Spielberg, Austria', lat: 47.2197, lon: 14.7647 },
    { trackName: 'Silverstone Circuit', des: 'Silverstone, United Kingdom', lat: 52.0786, lon: -1.0169 },
    { trackName: 'Hungaroring', des: 'Budapest, Hungary', lat: 47.5833, lon: 19.2483 },
    { trackName: 'Circuit de Spa-Francorchamps', des: 'Spa, Belgium', lat: 50.4372, lon: 5.9714 },
    { trackName: 'Zandvoort Circuit', des: 'Zandvoort, Netherlands', lat: 52.3883, lon: 4.5444 },
    { trackName: 'Autodromo Nazionale di Monza', des: 'Monza, Italy', lat: 45.6156, lon: 9.2811 },
    { trackName: 'Sochi Autodrom', des: 'Sochi, Russia', lat: 43.4057, lon: 39.9578 },
    { trackName: 'Marina Bay Street Circuit', des: 'Singapore', lat: 1.2914, lon: 103.8636 },
    { trackName: 'Suzuka Circuit', des: 'Suzuka, Japan', lat: 34.8431, lon: 136.5381 },
    { trackName: 'Circuit of the Americas', des: 'Austin, United States', lat: 30.1333, lon: -97.6411 },
    { trackName: 'Autódromo Hermanos Rodríguez', des: 'Mexico City, Mexico', lat: 19.4042, lon: -99.0907 },
    { trackName: 'Interlagos Circuit', des: 'São Paulo, Brazil', lat: -23.7036, lon: -46.6997 },
    { trackName: 'Melbourne Grand Prix Circuit', des: 'Melbourne, Australia', lat: -37.8497, lon: 144.968 },
    { trackName: 'Jeddah Street Circuit', des: 'Jeddah, Saudi Arabia', lat: 21.5012, lon: 39.1723 },
    { trackName: 'Yas Marina Circuit', des: 'Abu Dhabi, United Arab Emirates', lat: 24.4717, lon: 54.6057 },
    { trackName: 'Circuit of the Americas', des: 'Austin, United States', lat: 30.1333, lon: -97.6411 },
    { trackName: 'Interlagos Circuit', des: 'São Paulo, Brazil', lat: -23.7036, lon: -46.6997 },
    { trackName: 'Suzuka Circuit', des: 'Suzuka, Japan', lat: 34.8431, lon: 136.5381 },
  ];


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
              position={{ lat: marker.lat, lng: marker.lon }}
              onClick={() => handleMarkerClick(marker)}
            />
          ))}
          {selectedMarker && (
            <InfoWindow
              position={{ lat: selectedMarker.lat, lng: selectedMarker.lon }}
              onCloseClick={handleCloseInfoWindow}
            >
              <div>
                <h3>{selectedMarker.trackName}</h3>
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
