const express = require("express");

const app = express();
const cors = require("cors");

// load config from env File
require("dotenv").config();
const Port = process.env.PORT || 3936;

// middleware to parse json request

app.use(express.json());
app.use(cors());

// import routes from todo

const todoRoutes = require("./routes/todos");

// mount the todo API routes
app.use("/api/v1", todoRoutes);

const bodyParser = require("body-parser");
app.use(bodyParser.json());
const mongoose = require("mongoose");

app.listen(Port, () => {
  console.log("App is listening at port no ", Port);
});

// db connection

const dbConnect = require("./config/database");
dbConnect();

//set default route
app.get("/", (req, res) => {
  res.send("hello jee");
});
