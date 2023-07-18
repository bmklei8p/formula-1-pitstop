

import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';
const API_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

const DetailMap = ({ lat, long }) => {
  return (
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
              position={{ lat: lat, lng: long}}
            
            />
          ))}
          {selectedMarker && (
              <InfoWindow
                position={{ lat: lat, lng: long }}
                onCloseClick={handleCloseInfoWindow}
              >
                <div>
                  <h3 style={{fontWeight: 'bold'}}>Official Name: {selectedMarker.officialRaceName}</h3>
                  <p>Location: {selectedMarker.locationCity}, {selectedMarker.locationCountry}</p>
                </div>
              </InfoWindow>
          )}
      </GoogleMap>
    </LoadScript>
  </div>
  )
}

export default DetailMap