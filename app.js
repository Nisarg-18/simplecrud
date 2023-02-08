require("dotenv").config();
const express = require("express");
const app = express();
const connectToDB = require("./config/db");
const userRoutes = require("./routes/userRoutes");

// MiddleWare
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

connectToDB();

app.get("/", userRoutes);
app.post("/createUser", userRoutes);
app.get("/getUsers", userRoutes);
app.post("/editUser/:id", userRoutes);
app.delete("/deleteUser/:id", userRoutes);

module.exports = app;
