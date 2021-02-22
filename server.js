const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

//Require routes
const htmlRoutes = require("./Develop/routes/htmlroutes")

const PORT = process.env.PORT || 3000;

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/populatedb", { useNewUrlParser: true });

//Routes go here

app.use(htmlRoutes);

app.listen(PORT, () => console.log("listening on port: ", PORT));