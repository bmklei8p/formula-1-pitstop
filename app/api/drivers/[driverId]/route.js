import Driver from "@/models/driver"
import { connectToDB } from "@/utils/database"

export const GET = async (req, { params }) => {
  try {
    connectToDB();
    const res = await Driver.findOne({ driverId: params.driverId });
    return new Response(JSON.stringify(res), { status: 200 })
  } catch(err) {
    console.log(err);
    return new Response(err, {status: 500});
  }
}