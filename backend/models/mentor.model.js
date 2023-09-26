const mongoose = require("mongoose");

//Mentor Schema
const mentorSchema = mongoose.Schema({
    image:String,
    name:String,
    designation:String,
},{
    versionKey: false,
});


const mentorModel = mongoose.model("mentor", mentorSchema);

module.exports = {
    mentorModel
}