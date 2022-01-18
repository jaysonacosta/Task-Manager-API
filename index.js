const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv").config();
const mongodbPassword = process.env.MONGO_DB_PASSWORD;
const uri = `mongodb+srv://admin:${mongodbPassword}@cluster0.vdprs.mongodb.net/Cluster0?retryWrites=true&w=majority`;

//   Parsing request body
app.use(express.json());

// Routes
const group = require("./api/routes/group.route");

mongoose.connect(uri);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected successfully");
});

app.use("/api/group", group);

const port = 3000;
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
