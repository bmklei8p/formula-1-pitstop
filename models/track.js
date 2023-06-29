import {Schema, model, models} from "mongoose";

const TrackSchema = new Schema({
    officialName: {
        type: String,
        required: [true, "Please provide the official name"],
    },
    friendlyName: {
        type: String,
        required: [true, "Please provide a user friendly name"],
    },
    trackStartDate: {
        type: String,
        required: [true, "Please provide the date the track was first used"],
    },
    numberOfLaps: {
        type: Number,
    },
    lapDistance: {
        type: Number,
    },
    fastestLapTime: {
        type: String,
    },
    fastestLapDriver: {
        type: String,
    },
    fastestLapDriver: {
        type: String,
    },
    fastestLapYear: {
        type: String,
    },
    fastestLapTeam: {
        type: String,
    },
    inCurrentSeason: {
        type: Boolean,
        required: [true, "Please provide if the track is in the current season as a yes or no"],
    },
    trackLayoutImage: {
        type: String,
    },
    historicalImages: {
        type: Array,
    },
    firstParagraph: {
        type: String,
        required: [true, "Please provide a short description of history of the track"],
    },
    secondParagraph: {
        type: String,
        required: [true, "Please provide a long description of the track"],
    },
    thirdParagraph: {
        type: String,
        required: [true, "Please provide a description of the track"],
    },
});

const Track = models.Track || model("Track", TrackSchema);

export default Track;