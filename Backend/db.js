const mongoose = require("mongoose");
const mongoUri = "mongodb://localhost:27017/inotebook";

mongoose.connection.on("connected", () => {
  console.log("mongoose connected to ", mongoUri);
});
mongoose.connection.on("error", (err) => {
  console.log("mongoose connection error ", err);
});
mongoose.connection.on("disconnected", () => {
  console.log("mongoose disconnected");
});
const connectToMongo = async () => {
  try {
    mongoose.connect(mongoUri );
  } catch (err) {
    console.log("error connecting to mongoDB ", err);
  }
};

module.exports = connectToMongo;
