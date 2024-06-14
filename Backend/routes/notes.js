const express = require("express");
const router = express.Router();

router.post("/", (req, res) => {
  res.send('hi')
  res.json({ a: "auwgfiauf", num: 65 });
});

module.exports = router;
