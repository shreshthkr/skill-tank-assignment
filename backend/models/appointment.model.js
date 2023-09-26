const mongoose = require("mongoose");

const appointmentSchema = mongoose.Schema({
    image:String,
    name:String,
    designation:String,
    date:String,
    time:String,
    userID:String
},{
    versionKey: false,
});

const appointmentModel = mongoose.model("appointment", appointmentSchema);

module.exports = {
    appointmentModel
}