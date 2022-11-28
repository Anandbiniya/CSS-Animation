// importing the dependencies
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
const { urlencoded } = require("body-parser");
const mongoose = require("mongoose");
let UsersController = {};
// defining the Express app
const app = express();
// defining an array to work as the database (temporary solution)
const ads = [{ title: "Hello, world (again)!" }];

// adding Helmet to enhance your Rest API's security
app.use(helmet());

// using bodyParser to parse JSON bodies into JS objects
app.use(bodyParser.json());

// enabling CORS for all requests
app.use(cors());

// adding morgan to log HTTP requests
app.use(morgan("combined"));

// defining an endpoint to return all ads
app.get("/", (req, res) => {
  res.send(ads);
});
app.post("/post", (req, res) => {
  var user = user_model.create(req.body);
  console.log(user.json);
});

// starting the server
app.listen(3000, () => {
  console.log("https://localhost:3000");
});

// /users/models/users.model.js:
const userSchema = new mongoose.Schema({
  firstName: { type: String },
  lastName: { type: String },
  email: { type: String },
  password: { type: String },
  permissionLevel: { type: Number },
});

const user_model = mongoose.model("Users", userSchema);
