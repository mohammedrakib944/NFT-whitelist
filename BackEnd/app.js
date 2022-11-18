const express = require("express");
const mongoose = require("mongoose");
const userController = require("./usrer.controller");
const cors = require("cors");
require("dotenv").config();
const app = express();

app.use(express.json());

// SETUP CORS
app.use(
  cors({
    origin: ["http://localhost:3000", "https://moonflex.xyz"],
  })
);

// DATABASE SETUP
const mongoURL = `mongodb+srv://buzzam:buzzam@cluster0.q4yi4jz.mongodb.net/meta?retryWrites=true&w=majority`;
mongoose
  .connect(mongoURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("DB connection success!"))
  .catch((err) => console.log("Error: " + err));

// USER ROUTE
app.get("/api", userController.GetUser);
app.post("/api", userController.CreateUser);
app.delete("/api/:id", userController.DeleteUser);

app.listen();
