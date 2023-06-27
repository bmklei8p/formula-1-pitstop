'use client'
import { useState } from 'react';
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';

export default function TracksMap() {
  const API_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
  const [selectedMarker, setSelectedMarker] = useState(null);

  const handleMarkerClick = (marker) => {
    setSelectedMarker(marker);
  };

  const handleCloseInfoWindow = () => {
    setSelectedMarker(null);
  };

  // Below is data for the map
  const trackList = [
    { trackName: 'Marker 1', des: 'Description 1', lat: 12, lon: -3 },
    { trackName: 'Marker 2', des: 'Description 2', lat: 8, lon: 2 },
    { trackName: 'Marker 3', des: 'Description 3', lat: 15, lon: -5 },
  ];

  const mapContainerStyle = {
    width: '100%',
    height: '70vh' 
  };

  const center = {
    lat: 10,
    lng: 0
  };

  return (
    <LoadScript googleMapsApiKey={API_KEY}> 
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        center={center}
        zoom={3} 
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
  );
}
