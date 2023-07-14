import { connectToDB } from "@/utils/database"
import Constructor from "@/models/constructor";

export const GET = async (req, res) => {
    try {
        connectToDB();
        const constructors = await Constructor.find({});
        return new Response(JSON.stringify(constructors), { status: 200 })
    } catch(err) {
        console.log(err);
        return new Response(err, {status: 500});
    }
}
