const express = require("express");
const {connection} = require("./config/db");
const {userRouter} = require("./routes/users.routes");
const {auth} = require("./middlewares/auth");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();


const app = express();
app.use(express.json());
app.use(cors());
app.use("/users", userRouter);
app.use(auth);


app.listen(process.env.PORT, async () => {
    try {
      await connection;
      console.log("Connected to mongoDB");  
    } catch (error) {
        console.log("Cannot connect to DB")
        console.log(error);
    }
    console.log(`Server running on port ${process.env.PORT}`)
});