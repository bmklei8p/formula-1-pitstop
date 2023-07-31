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


    if (!track) {
      return new Response("track not found", { status: 404 });
    }


    if(body.official_track_name) {
      track.circuitName = body.official_track_name;
    }

    if(body.circuit_name) {
      track.circuitName = body.circuit_name;
    }
    if(body.first_grand_prix) {
      track.trackStartDate = body.first_grand_prix;
    }
    if(body.number_of_laps) {
      track.numberOfLaps = body.number_of_laps;
    }
    if(body.circuit_length) {
      track.raceDistance = body.circuit_length;
    }
    if(body.lap_record) {
      const lapRecord = body.lap_record.split(" ");
      const lastIndex  = lapRecord.length - 1;
      track.fastestLapTime = lapRecord[0];
      track.fastestLapYear = lapRecord[lastIndex].replace("(", "").replace(")", "");
      lapRecord.pop();
      lapRecord.shift();
      track.fastestLapDriver = lapRecord.join(" ");
    }
    await track.save();
    const updatedTrack = await Track.findOne({ circuitId: params.circuitId });


    return new Response(`Successfully updated the track: ${updatedTrack}`, { status: 200 });
  } catch(err) {
    console.log(err);
    return new Response(err, {status: 500});
  }
}