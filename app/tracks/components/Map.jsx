'use client'

import { GoogleMap, Marker, InfoWindow } from '@react-google-maps/api';


const Map = () => {
  return (
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
  )
}

export default Map



// export default function TracksMap() {
//     const API_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
//     const [selectedMarker, setSelectedMarker] = useState(null);
//     const [mobileScreen, setMobileScreen] = useState(false);
//     const [mobileTrackIndex, setMobileTrackIndex] = useState(0);
//     const [ centerMobile, setCenterMobile ] = useState({
//       lat: 50,
//       lng: 10
//     });

//     // get track list from api linked to db
//     const [ trackList, setTrackList ] = useState([]);
//     useEffect(() => {
//       const fetchTracks = async () => {
//         const res = await fetch('/api/tracks', { next: {revalidate: 360000}});
//         const data = await res.json();
//         setTrackList(data);
//       };
//       fetchTracks();
//     }, []);


//     useEffect(() => {
//       const handleResize = () => {
//         const isMobile = window.innerWidth <= 897;
//         setMobileScreen(isMobile);
//       };

//       handleResize();

//       window.addEventListener('resize', handleResize);
//       return () => {
//         window.removeEventListener('resize', handleResize);
//       };
//     }, []);

//     const handleMarkerClick = (marker) => {
//       setSelectedMarker(marker);
//       setCenterMobile({lat: marker.lat, lng: marker.long});
//     };

//     const handleCloseInfoWindow = () => {
//       setSelectedMarker(null);
//     };

//     const handleTrackClick = (track) => {
//       setSelectedMarker(track);
//       setCenterMobile({lat: track.lat, lng: track.long});
//     };

//     const renderTrackList = () => {
//       const sortedTrackList = trackList.sort((a, b) =>
//         a.circuitName.localeCompare(b.circuitName)
//       );

//       const trackBoxes = [];
//       let currentBox = [];

//       for (let i = 0; i < sortedTrackList.length; i++) {
//         currentBox.push(sortedTrackList[i]);

//         if (currentBox.length === 6 || i === sortedTrackList.length - 1) {
//           trackBoxes.push(currentBox);
//           currentBox = [];
//         }
//       }

//       return trackBoxes.map((box, index) => (
//         <div key={index} className='border-borderColor border-2 border-solid bg-altGray p-4'>
//           {box.map((track, trackIndex) => (
//             <p
//               key={trackIndex}
//               style={{ cursor: 'pointer' }}
//               onClick={() => handleTrackClick(track)}
//             >
//               {track.circuitName}
//             </p>
//           ))}
//         </div>
//       ));
//     };

//     const renderMobileTrackList = () => {
//       const sortedTrackList = trackList.sort((a, b) =>
//         a.circuitName.localeCompare(b.circuitName)
//       );
//       const startIndex = mobileTrackIndex * 5;
//       const endIndex = startIndex + 5;
//       const currentTracks = sortedTrackList.slice(startIndex, endIndex);
//       const disablePrevArrow = mobileTrackIndex === 0;
//       const disableNextArrow = endIndex >= sortedTrackList.length;

//       const handlePrevArrowClick = () => {
//         if (!disablePrevArrow) {
//           setMobileTrackIndex(mobileTrackIndex - 1);
//         }
//       };

//       const handleNextArrowClick = () => {
//         if (!disableNextArrow) {
//           setMobileTrackIndex(mobileTrackIndex + 1);
//         }
//       };