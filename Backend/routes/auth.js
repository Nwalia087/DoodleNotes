const express = require("express");
const router = express.Router();
const User = require("../models/user");
const bcrypt = require("bcrypt");
const fetchuser = require("../middleware/fetchuser");
var jwt = require("jsonwebtoken");

const JWT_SECRET = "mER@mEOWg#AR@AYA";

const { body, validationResult } = require("express-validator");

router.post(
  "/create-user",
  [
    body("name", "enter a valid name").isLength({ min: 3 }),
    body("Username", "enter a valid Email").isEmail(),
    body("password", "password field cannot be empty").isLength({ min: 1 }),
    body("password", "password must be 5 characters long").isLength({ min: 5 }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try {
      let user = await User.findOne({ Username: req.body.Username });
      if (user) {
        return res
          .status(400)
          .json({ errors: [{ msg: "You already have an account, please login with your credentials" }] });
      }
      const salt = await bcrypt.genSalt(10);
      const securePassword = await bcrypt.hash(req.body.password, salt);
      user = await User.create({
        name: req.body.name,
        Username: req.body.Username,
        password: securePassword,
      });
      const data = {
        user: {
          id: user.id,
        },
      };
      var token = jwt.sign(data, JWT_SECRET);
      res.json(token);
    } catch (error) {
      console.error(error.message);
      res.status(500).send("internal server error");
    }
  }
);

router.post(
  "/login-user",
  [body("Username", "enter a valid Email").isEmail(), body("password", "password cannot be blank").exists()],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { Username, password } = req.body;
    try {
      const user = await User.findOne({ Username });
      if (!user) {
        res.status(400).json("please enter valid credentials");
      }
      const passCompare = await bcrypt.compare(password, user.password);
      if (!passCompare) {
        res.status(400).json("please enter valid credentials");
      }
      const data = {
        user: {
          id: user.id,
        },
      };
      var token = jwt.sign(data, JWT_SECRET);
      res.json(token);
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal server error");
    }
  }
);
router.post("/get-user", fetchuser, async (req, res) => {
  try {
    userId = req.user.id;
    const user = await User.findById(userId).select("-password");
    res.send(user);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal server error");
  }
});

module.exports = router;
