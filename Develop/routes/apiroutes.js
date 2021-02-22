const router = require("express").Router();
const Workout = require("../models/workout.js");

router.get("/api/workouts", (req, res) => {
    Workout.find({})
      .then(workouts => res.json(workouts))
      .catch(err => res.json(err));
  });

router.post("/api/workouts", (req, res) => {
  Workout.create({})
    .then(newWorkout => {
      res.json(newWorkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

module.exports = router;