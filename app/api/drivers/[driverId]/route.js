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

export const PATCH = async (req, { params }) => {
  const body = await req.json();
  try {
    connectToDB();
    const driver = await Driver.findOne({ driverId: params.driverId });
    // console.log(body);
    
    if (!driver) {
      return new Response("Driver not found", { status: 404 });
    }
    driver.podiums = body.podiums;
    driver.careerPoints = body.points;
    driver.grandPrixEntered = body.grands_prix_entered;
    driver.worldChampionships = body.world_championships;
    driver.highestRaceFinish = body.highest_race_finish;
    driver.highestGridPosition = body.highest_grid_position;
    const number1 = body.highest_race_finish.split(' ')[0];
    const number2 = body.highest_race_finish.split(' ')[1];
    driver.wins = number1 === '1' ? number2.slice(2, number2.length - 1) : 0;   
    await driver.save();

    return new Response("Successfully updated the Driver", { status: 200 });
  } catch(err) {
    console.log(err);
    return new Response(err, {status: 500});
  }
}