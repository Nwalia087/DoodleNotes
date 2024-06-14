const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send('hi')
  res.json({ a: "auwgfiauf", num: 65 });
});

module.exports = router;
