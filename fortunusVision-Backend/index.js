//importing required dependencies
require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const userRouter = require("./src/v1/user");
//

// mongodDB online -> use Atlas
const DB_CONNECT = process.env.DB_CONNECT || "";
mongoose.connect(DB_CONNECT, () => console.log("connected to db"));
//

//using dependencies
const hostname = "192.168.100.192";
const app = express();
app.use(cors());
app.use(express.json());
app.use("/api/v1/user", userRouter);
app.listen(3001, hostname, () => console.log("Server running"));

//
