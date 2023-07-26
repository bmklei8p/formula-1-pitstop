import {Schema, model, models} from "mongoose";

const TrackSchema = new Schema({
    officialRaceName: {
        type: String,
    },
    circuitId: {
        type: String,
        required: true,
    },
    circuitName: {
        type: String,
    },
    trackStartDate: {
        type: String,
    },
    lat: {
        type: Number,
        required: [true, "Please provide the latitude of the track"],
    },
    long: {
        type: Number,
        required: [true, "Please provide the longitude of the track"],
    },
    locationCity: {
        type: String,
    },
    locationCountry: {
        type: String,
    },
    numberOfLaps: {
        type: Number,
    },
    // in km
    raceDistance: {
        type: String,
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
    years: {
        type: Array,
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
    },
    secondParagraph: {
        type: String,
    },
    thirdParagraph: {
        type: String,
    },
});

const Track = models.Track || model("Track", TrackSchema);

export default Track;