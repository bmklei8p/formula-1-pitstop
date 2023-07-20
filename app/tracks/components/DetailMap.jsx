'use client'

import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';
import { useState } from 'react';

const DetailMap = ({ lat, long, officialRaceName, locationCity, locationCountry }) => {
  const API_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
  const [selectedMarker, setSelectedMarker] = useState(null);
  // const [mobileScreen, setMobileScreen] = useState(false);
  const [ center, setCenter ] = useState({
    lat: lat,
    lng: long
  })

  const mapContainerStyle =  { width: '100%', height: '45vh' }

  
  const handleMarkerClick = (marker) => {
    setSelectedMarker(marker);
  };

  const handleCloseInfoWindow = () => {
    setSelectedMarker(null);
  };


  return (
    <div className='w-full flex justify-center'>
    <LoadScript googleMapsApiKey={API_KEY}>
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        center={center}
        zoom={ 4.5 }
        disableDefaultUI={true}
        >
            <Marker
              position={{ lat: lat, lng: long}}
              onClick={() => handleMarkerClick({ lat: lat, lng: long})}
            />
          {selectedMarker && (
              <InfoWindow
                position={{ lat: lat, lng: long }}
                onCloseClick={handleCloseInfoWindow}
              >
                <div>
                  <h3 style={{fontWeight: 'bold'}}>{officialRaceName}</h3>
                  <p>Location: {locationCity}, {locationCountry}</p>
                </div>
              </InfoWindow>
          )}
      </GoogleMap>
    </LoadScript>
  </div>
  )
}

export default DetailMap