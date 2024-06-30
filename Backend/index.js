const connectToMongo = require("./db");
const express = require("express");
require("dotenv").config();

connectToMongo();
var cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("hello world");
});
app.use("/api/auth", require("./routes/auth"));
app.use("/api/notes", require("./routes/notes"));

app.listen(port, () => {
  console.log(`INotebook listening on port ${port}`);
});
