import {Schema, model, models} from "mongoose";

const ConstructorSchema = new Schema({
    fullTeamName: {
        type: String,
        required: true,
        unique: true,
    },
    teamName: {
        type: String,
        required: true,
    },
    constructorId: {
        type: String,
        required: true,
    },
    nationality: {
        type: String,
    },
    base: {
        type: String,
    },
    teamChief: {
        type: String,
    },
    technicalChief: {
        type: String,
    },
    powerUnit: {
        type: String,
    },
    firstEntry: {
        type: Number,
    },
    worldChampionships: {
        type: Number,
    },
    highestRaceFinish: {
        type: String,
    },
    polePositions: {
        type: Number,
    },
    driverOne: {
        type: String,
        required: true,
    },
    driverTwo: {
        type: String,
        required: true,
    },
    driverOneId: {
        type: String,
        required: true,
    },
    driverTwoId: {
        type: String,
        required: true,
    },
    carURL: {
        type: String,
    },
    teamLogoURL: {
        type: String,
    },
    driverOnePictureURL: {
        type: String,
    },
    driverTwoPictureURL: {
        type: String,
    },
    chassis: {
      type: String,
    },
    twitterHandle: {
      type: String,
    }
});



const Constructor = models.Constructor || model("Constructor", ConstructorSchema);

export default Constructor;