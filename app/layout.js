import '../styles/global.css'
import Header from './components/Header'
import mongoose from 'mongoose';
import { Titillium_Web } from 'next/font/google'
import { Providers } from './components/Providers';

export const metadata = {
  title: 'Formula 1 Pitstop',
  description: 'Your one stop for all things Formula 1',
}

const titilliumWeb = Titillium_Web({
  weight: ['300', '400', '600', '700', '900'],
  style: 'normal',
  subsets: ['latin'],
  display: 'swap',
  variable:
    '--font-titillium-web',
})

export default function RootLayout({ children }) {
  const initialConnectToDB = async () => {
    mongoose.set('strictQuery', true);
    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            dbName: "f1-pitstop",
            useNewURLParser: true,
            useUnifiedTopology: true,
        })

        // check if collections are empty
        const dataTrack = await mongoose.connection.collection('tracks').find({}).toArray();
        const dataDriver = await mongoose.connection.collection('drivers').find({}).toArray();
        const dataConstructor = await mongoose.connection.collection('constructors').find({}).toArray();
        if (dataTrack.length > 0 && dataDriver.length > 0 && dataConstructor.length > 0) {
            console.log("All data already uploaded to database");
            return;
        }
        // upload all tracks to database
        if (dataTrack.length === 0) {
          const tracks = require('../utils/tracks.json');
          await mongoose.connection.collection('tracks').insertMany(tracks);
          console.log("Tracks uploaded to database");
        }
        // upload all drivers to database
        if (dataDriver.length === 0) {
          const drivers = require('../utils/drivers.json');
          await mongoose.connection.collection('drivers').insertMany(drivers);
          console.log("Drivers uploaded to database");
        }
        // upload all teams to database
        if (dataConstructor.length === 0) {
          const constructors = require('../utils/constructors.json');
          await mongoose.connection.collection('constructors').insertMany(constructors);
          console.log("Constructors uploaded to database");
        }
    } catch (error) {
        console.log(error);
    }
  }

  // initialConnectToDB();

  return (
    <html suppressHydrationWarning lang="en" className={`${titilliumWeb.variable}`}>
      <body className=' bg-background'>
        <main className='relative z-10 flex flex-col w-full justify-center items-center'>
          <Providers>
            <Header />
            {children}
          </Providers>
        </main>
      </body>
    </html>
  )
}
