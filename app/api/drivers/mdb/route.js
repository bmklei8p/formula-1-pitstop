import { connectToDB } from "@/utils/database"
import Driver from "@/models/driver";

export const GET = async (req, res) => {
    try {
        connectToDB();
        const drivers = await Driver.find({});
        return new Response(JSON.stringify(drivers), { status: 200 })
    } catch (err) {
        console.log(err);
        return new Response(err, {status: 500});
    }
}