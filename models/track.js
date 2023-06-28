import {Schema, model, models} from "mongoose";

const TrackSchema = new Schema({
    creator: {
        type: Schema.Types.ObjectId,
    },
    prompt: {
        type: String,
        required: [true, "Please provide a prompt"],
    },
    tag: {
        type: String,
        required: [true, "Please provide a tag"],
    }
});

const Track = models.Track || model("Track", TrackSchema);

export default Track;