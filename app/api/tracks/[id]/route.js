import { connectToDB } from "@utils/database";
import Track from "@/models/track";

export const GET = async ( req, { params }) => {
    try {
        connectToDB();
        const track = await Track.findById(params.id);
        return new Response(JSON.stringify(track), { status: 200 })
    } catch (error) {
        console.log(error);
        return new Response(error.message, { status: 500 })
    }
}