import Track from "@/models/track"
import { connectToDB } from "@/utils/database"


export const GET = async ( req, { params }) => {
    try {
        connectToDB();
        const track = await Track.findOne({ circuitId: params.circuitId });
        return new Response(JSON.stringify(track), { status: 200 })
    } catch (error) {
        console.log(error);
        return new Response(error.message, { status: 500 })
    }
}

export const PATCH = async (req, { params }) => {
  const body = await req.json();
  try {
    connectToDB();
    const track = await Track.findOne({ circuitId: params.circuitId });
    // console.log(body);
    
    if (!track) {
      return new Response("track not found", { status: 404 });
    }
    track.officialRaceName = body.official_track_name;
    console.log(officialRaceName)
    track.trackStartDate = body.first_grand_prix;
    track.numberOfLaps = body.number_of_laps;
    track.raceDistance = body.circuit_length;
    const lapRecord = body.lap_record.split(" ");
    const lastIndex  = lapRecord.length - 1;
    track.fastestLapTime = lapRecord[0];
    track.fastestLapYear = lapRecord[lastIndex].replace("(", "").replace(")", "");
    lapRecord.pop();
    lapRecord.shift();
    track.fastestLapDriver = lapRecord.join(" ");


    await track.save();

    return new Response("Successfully updated the track", { status: 200 });
  } catch(err) {
    console.log(err);
    return new Response(err, {status: 500});
  }
}