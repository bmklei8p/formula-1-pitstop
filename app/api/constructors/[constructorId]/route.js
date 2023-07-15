import { connectToDB } from "@/utils/database"
import Constructor from "@/models/constructor";

export const GET = async (req, { params }) => {
  try {
    connectToDB();
    const res = await Constructor.findOne({ constructorId: params.constructorId});
    return new Response(JSON.stringify(res), { status: 200 })
  } catch(err) {
    console.log(err);
    return new Response(err, {status: 500});
  }
}