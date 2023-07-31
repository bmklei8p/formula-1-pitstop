import Driver from "@/models/driver"
import { connectToDB } from "@/utils/database"
import { revalidateTag } from "next/cache";

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

export const PATCH = async (req, { params }) => {
  const body = await req.json();
  try {
    connectToDB();
    const driver = await Driver.findOne({ driverId: params.driverId });
    // console.log(body);
    
    if (!driver) {
      return new Response("Driver not found", { status: 404 });
    }
    if(body.podiums) {
      driver.podiums = body.podiums;
    }
    if(body.points) {
      driver.careerPoints = body.points;
    }
    if(body.grands_prix_entered) {
      driver.grandPrixEntered = body.grands_prix_entered;
    }
    if(body.world_championships) {
      driver.worldChampionships = body.world_championships;
    }

    if(body.highest_grid_position) {
      driver.highestGridPosition = body.highest_grid_position;
    }

    try {
      driver.highestRaceFinish = body.highest_race_finish;
      const raceFinishSplit = body.highest_race_finish.split(' ');
      if (raceFinishSplit.length === 2) {
        const number1 = body.highest_race_finish.split(' ')[0];
        const number2 = body.highest_race_finish.split(' ')[1];
        driver.wins = number1 === '1' ? number2.slice(2, number2.length - 1) : 0;
      } else {
        driver.wins = 0;
      }
    } catch(err) {
      return new Response(err, {status: 500});
    }   

    await driver.save();
    revalidateTag("driver")
    
    return new Response("Successfully updated the Driver", { status: 200 });
  } catch(err) {
    console.log(err);
    return new Response(err, {status: 500});
  }
}