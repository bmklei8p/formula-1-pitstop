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

export const PATCH = async (req, { params }) => {
  const body = await req.json();
  try {
    connectToDB();
    const constructor = await Constructor.findOne({ constructorId: params.constructorId });
    console.log(body);

    if (!constructor) {
      return new Response("Constructor not found", { status: 404 });
    }
    if(body.chassis) {
      constructor.chassis = body.chassis;
    }
    if(body.world_championships) {
      constructor.worldChampionships = body.world_championships != 'N/A' ? body.world_championships : 0;
    }
    if(body.pole_positions) {
      constructor.polePositions = body.pole_positions;
    }
    if(body.highest_race_finish) {
      constructor.highestRaceFinish = body.highest_race_finish
    }
    if(body.twitter_handle) {
      constructor.twitterHandle = body.twitter_handle;
    }


    
    await constructor.save();
    // try {
    //   console.log("revalidating")
    //   const res = await fetch(`https://formula-1-pitstop.vercel.app/api/revalidate?path=${encodeURIComponent("/drivers/")}`)
    //   if (res.status !== 200) {
    //     console.log("error revalidating");
    //   }
    // } catch(err) {
    //   console.log("error revalidating");
    // }
    return new Response("Successfully updated the Constructor", { status: 200 });
  } catch(err) {
    console.log(err);
    return new Response(err, {status: 500});
  }
}