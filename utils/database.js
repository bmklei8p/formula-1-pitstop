import mongoose from 'mongoose';

let isConnected = false;

export const connectToDB = async () => {
    mongoose.set('strictQuery', true);
    if (isConnected) {
        console.log('MongoDb is already connected');
        return;
    }
    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            dbName: "f1-pitstop",
            useNewURLParser: true,
            useUnifiedTopology: true,
        })
    } catch (error) {
        console.log(error);
    }

}