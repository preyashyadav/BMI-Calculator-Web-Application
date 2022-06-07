const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function (req, res) {
  var weightInKG = Number(req.body.weight);
  var heightInM = Number(req.body.height);
  var BMI = Math.floor(weightInKG / (heightInM * heightInM));
  if (BMI < 18.5) {
    res.send("Your BMI is: " + BMI + ", so you are underweight.");
  } else if (18.5 <= BMI && BMI <= 24.9) {
    res.send("Your BMI is: " + BMI + ", so you have a normal weight.");
  } else if (BMI > 24.9) {
    res.send("Your BMI is: " + BMI + ", so you are over weight.");
  }
});

app.listen(3010, function () {
  console.log("Server started at port: 3010...");
});
