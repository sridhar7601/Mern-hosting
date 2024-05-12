const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Usermodel = require("./models/users");
const cors = require('cors')
app.use(express.json());
app.use(cors())

mongoose.connect(
  "mongodb+srv://sridhar:sridhar@cluster0.03add.mongodb.net/mernlearning?retryWrites=true&w=majority&appName=Cluster0"
);

app.get("/", (req, res) => {
  Usermodel.find({}).then((result, err) => {
    if (err) {
      res.json(err);
    } else {
      res.json(result);
    }
  });
});

app.post("/create", async (req, res) => {
  const body = req.body;
  const newUser = new Usermodel(body);
  await newUser.save();
  res.json(body);
});

app.listen(3001, () => {
  console.log("server runs perfectly");
});
