import { connectToDB } from "../../../utils/database"
import Track from "../../../models/track"

export const GET = async () => {
    try {
        connectToDB();
        const tracks = await Track.find({});
        return new Response(JSON.stringify(tracks), { status: 200 })
    } catch(error) {
        console.log(error);
        return new Response(error.message, { status: 500 })
    }
}