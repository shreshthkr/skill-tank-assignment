const express = require("express");
const mentorRouter = express.Router();
const {mentorModel} = require("../models/mentor.model");


mentorRouter.post("/add", async(req,res) => {
    const payload = req.body;
    try {
        const allMentor = await mentorModel.insertMany(payload);
        res.status(200).send({msg:"added",allMentor})
    } catch (error) {
        res.status(400).send({msg:error.message});
    }
});


mentorRouter.get("/", async(req,res) => {
    try {
        const allMentors = await mentorModel.find();
        res.status(200).send({ msg: "All mentors retrieved", allMentors });
      } catch (error) {
        res.status(400).send({ msg: error.message });
      }
});


module.exports = {
    mentorRouter
}