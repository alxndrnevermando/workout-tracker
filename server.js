const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const path = require("path");

//Require routes
const apiRoutes = require("./Develop/routes/apiroutes")
const htmlRoutes = require("./Develop/routes/htmlroutes")

const PORT = process.env.PORT || 3000;

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(path.join(__dirname, './Develop/public')));

mongoose.connect(
    process.env.MONGODB_URI || 'mongodb://localhost/Workout-Tracker',
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false
    }
  );

//Routes go here

app.use(apiRoutes);
app.use(htmlRoutes);

app.listen(PORT, () => console.log("listening on port: ", PORT));