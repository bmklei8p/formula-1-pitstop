import PhoneNumber from "@/models/phoneNumber";
import { connectToDB } from "@/utils/database";

export const GET = async (req, { params }) => {
  try {
    connectToDB();
    const res = await PhoneNumber.find();
    return new Response(JSON.stringify(res), { status: 200 });
  } catch (err) {
    return new Response(err, { status: 500 });
  }
};

export const POST = async (req, { params }) => {
  const body = await req.json();
  try {
    connectToDB();

    // check if we need to update AllRaces flag and if not return 400 error
    try {
      const res = await PhoneNumber.findOne({ phoneNumber: body.phoneNumber });
      if (res.phoneNumber.length > 0 && res.allRaces === body.allRaces) {
        return new Response("Phone number already exists", { status: 400 });
      } else if (res.phoneNumber.length > 0 && res.allRaces !== body.allRaces) {
        res.allRaces = body.allRaces;
        await res.save();
        return new Response("Successfully updated the races preference", {
          status: 200,
        });
      }
    } catch (err) {
      try {
        const phoneNumber = new PhoneNumber({
          phoneNumber: body.phoneNumber,
          allRaces: body.allRaces,
        });
        await phoneNumber.save();
        return new Response("Successfully stored the phone number", {
          status: 200,
        });
      } catch (err) {
        return new Response(err, { status: 500 });
      }
    }
  } catch {
    return new Response("Unable to store the phone number", { status: 500 });
  }
};
