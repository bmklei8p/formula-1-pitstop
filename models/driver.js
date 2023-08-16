import {Schema, model, models} from "mongoose";

const DriverSchema = new Schema({
    driverId: {
        type: String,
        required: [true, "Please provide the driver's id"],
    },
    color: {
        type: String,
        required: [true, "Please provide the driver's color"],
    },
    permanentNumber: {
        type: String,
        required: [true, "Please provide the driver's permanent number"],
    },
    code: {
        type: String,
        required: [true, "Please provide the driver's code"],
    },
    url: {
        type: String,
        required: [false, "Please provide the driver's url"],
    },
    givenName: {
        type: String,
        required: [true, "Please provide the driver's given name"],
    },
    familyName: {
        type: String,
        required: [true, "Please provide the driver's family name"],
    },
    dateOfBirth: {
        type: String,
    },
    nationality: {
        type: String,
    },
    driverHeadshotImage: {
        type: String,
    },
    flagImage: {
        type: String,
    },
    team: {
        type: String,
    },
    carNumber: {
        type: String,
    },
    podiums: {
        type: String,
    },
    placeOfBirth: {
        type: String,
    },
    highestGridPosition: {
        type: String,
    },
    highestRaceFinish: {
        type: String,
    },
    wins: {
        type: String,
    },
    careerPoints: {
        type: String,
    },
    grandPrixEntered: {
        type: String,
    },
    worldChampionships: {
        type: String, 
    },
    polePositions: {
        type: String,
    },
    twitterHandle: {
        type: String,
    },  
});



const Driver = models.Driver || model("Driver", DriverSchema);

export default Driver;