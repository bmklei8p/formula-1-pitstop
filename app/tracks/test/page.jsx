import {LoadScript} from '@react-google-maps/api';
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi';
import TrackList from '../components/TrackList';
import Map from '../components/Map';


export default function TracksMap() {
  const API_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

  return (
    <div className='tracks-container'>
      <div className='tracks-title-block'>
        <h1 className='font-bold font-sans mb-4 text-2xl md:text-3xl'>Tracks</h1>
        {/* <h1 className='font-bold font-sans mb-2 text-3xl hidden md:block'>2023 Formula 1 Tracks </h1> */}
      </div>
      <div className='flex justify-center'>
        <LoadScript googleMapsApiKey={API_KEY}>
          <Map />
        </LoadScript>
      </div>
      <TrackList />
    </div>
  );
}
