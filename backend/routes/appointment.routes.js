const express = require("express");
const appointmentRouter = express.Router();
const {appointmentModel} = require("../models/appointment.model");
const jwt = require("jsonwebtoken");
const {auth} = require("../middlewares/auth");

appointmentRouter.post("/add",  async(req,res)=> {
    try {
      const appointmentData = req.body;
      console.log(appointmentData)
      const bookedAppointment = new appointmentModel(appointmentData);
      await bookedAppointment.save();
      res.status(200).send({ msg: 'Appointment Scheduled successfully', bookedAppointment: bookedAppointment });
    } catch (error) {
        res.status(400).send({ msg: "Cannot schedule appointment" });
    }
});

appointmentRouter.get("/appointment", async(req,res) => {
    const token=req.headers.authorization
    const decoded = jwt.verify(token, "mentor")
    try {
        if(decoded){
            const booked = await appointmentModel.find({"userID":decoded.userID})
            res.status(200).send(booked)
        }else{
            res.status(400).send({"msg": "No scheduled appointment"})
        }
    } catch (error) {
        res.status(400).send({"msg":error.message})
    }
});



module.exports = {
    appointmentRouter
}