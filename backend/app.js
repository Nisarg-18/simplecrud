require("dotenv").config();
const express = require("express");
const app = express();
const connectToDB = require("./config/db");
const userRoutes = require("./routes/userRoutes");

// MiddleWare
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

connectToDB();

app.use("/", userRoutes);

module.exports = app;
