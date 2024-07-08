const mongoose = require("mongoose");

const issueSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  roomNumber: {
    type: Number,
    required: true,
  },
  contact: {
    type: Number,
    required: true,
  },
  issueType: {
    type: String,
    required: true,
  },
  issue: {
    type: String,
    required: true,
  },
});

const Issue = mongoose.model("Issue", issueSchema);
module.exports = Issue;
