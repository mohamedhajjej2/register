console.clear();
const express = require("express");
const connectDB = require("./config/dbConnect");
const  cors=require("cors");
const app = express();
require("dotenv").config();


// connect to DB
connectDB();
app.use(cors());

//server
const PORT = process.env.PORT;
app.listen(PORT, (err) =>
err ? console.log(err) : console.log(`server is running on ${5000}`)
);
