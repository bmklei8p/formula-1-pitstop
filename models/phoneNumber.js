import {Schema, model, models} from "mongoose";

const PhoneNumberSchema = new Schema({
    phoneNumber: {
        type: String,
        required: [true, "Please provide a phone number"],
    },
    allRaces: {
        type: Boolean,
        required: [true, "Please confirm if you would like a notification on all races"],
    }
});



const PhoneNumber = models.PhoneNumber || model("PhoneNumber", PhoneNumberSchema);

export default PhoneNumber;