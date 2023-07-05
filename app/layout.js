import '../styles/global.css'
import Header from './components/Header'
import mongoose from 'mongoose';

export const metadata = {
  title: 'Formula 1 Pitstop',
  description: 'Your one stop for all things Formula 1',
}

export default function RootLayout({ children }) {
  const initialConnectToDB = async () => {
    mongoose.set('strictQuery', true);
    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            dbName: "f1-pitstop",
            useNewURLParser: true,
            useUnifiedTopology: true,
        })
  
        // upload all tracks to database
        // check if tracks collection is empty
        const data = await mongoose.connection.collection('tracks').find({}).toArray();
        if (data.length > 0) {
            console.log("Tracks already uploaded to database");
            return;
        }
        const tracks = require('../utils/tracks.json');
        await mongoose.connection.collection('tracks').insertMany(tracks);
        console.log("Tracks uploaded to database");
        // upload all drivers to database
        // const drivers = require('./drivers.json');
        // await mongoose.connection.collection('drivers').insertMany(drivers);
        // console.log("Drivers uploaded to database");
        // // upload all teams to database
        // const teams = require('./teams.json');
        // await mongoose.connection.collection('teams').insertMany(teams);
        // console.log("Teams uploaded to database");
    } catch (error) {
        console.log(error);
    }
  }

  initialConnectToDB();
  
  return (
    <html lang="en">
      <body>
        <div className='main'>
          <div className='gradient'/>
        </div>
        <main className='app'>
          <Header />
          {children}
        </main>
      </body>
    </html>
  )
}

