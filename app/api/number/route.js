import PhoneNumber from "@/models/phoneNumber"
import { connectToDB } from "@/utils/database"

export const GET = async (req, { params }) => {
  try {
    connectToDB();
    const res = await PhoneNumber.find();
    return new Response(JSON.stringify(res), { status: 200 })
  } catch(err) {
    console.log(err);
    return new Response(err, {status: 500});
  }
}

export const POST = async (req, { params }) => {
  const body = await req.json();
  console.log(body)
  try {
    connectToDB();

    const phoneNumber = new PhoneNumber({
      phoneNumber: body.phoneNumber,
      allRaces: body.allRaces,
    })

    await phoneNumber.save();
    return new Response("Successfully stored the phone number", { status: 200 });
  } catch(err) {
    console.log(err);
    return new Response(err, {status: 500});
  }
}