//importing required dependencies
require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const userRouter = require("./src/v1/user");
const AdminRouter = require("./src/v1/admin");
//

// mongodDB online -> use Atlas
const DB_CONNECT = process.env.DB_CONNECT || "";
mongoose.connect(DB_CONNECT, () => console.log("connected to db"));
//

//using dependencies
const hostname = "192.168.1.198";// Enter your personal hostname fetched from ipconfig
const portname = 3001;
const app = express();
app.use(cors());
app.use(express.json());
app.use("/api/v1/user", userRouter);
app.use("/api/v1/admin", AdminRouter);
app.listen(portname, hostname, () => console.log("Server running"));

//
