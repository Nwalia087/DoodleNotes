const express = require("express");
const router = express.Router();
const User = require("../models/user");
const bcrypt = require("bcrypt");

const { body, validationResult } = require("express-validator");

router.post(
  "/create-user",
  [
    body("Username", "enter a valid Email").isEmail(),
    body("password", "password must be 5 characters long").isLength({ min: 5 }),
    body("name", "enter a valid name").isLength({ min: 3 }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try {
      let user = await User.findOne({ Username: req.body.Username });
      if (user) {
        return res.status(400).json({ error: "sorry yar breakdown horyea si menu bro" });
      }
      const salt = await bcrypt.genSalt(10);
      console.log(salt);
      const securePassword = await bcrypt.hash(req.body.password, salt);
      user = await User.create({
        name: req.body.name,
        Username: req.body.Username,
        password: securePassword,
      });
      res.json(user);
    } catch (error) {
      console.error(error.message);
      res.status(500).send("breakdown hogya bro");
    }
  }
);

module.exports = router;
