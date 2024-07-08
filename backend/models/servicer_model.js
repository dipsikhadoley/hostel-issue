const mongoose = require("mongoose");

const servicerSchema = new mongoose.Schema({
  name: String,
  service: String,
  contact: Number,
  time: Number,
  image: String,
});

const Servicer = mongoose.model("Servicer", servicerSchema);

module.exports = Servicer;
