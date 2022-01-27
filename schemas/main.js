const mongoose = require("mongoose");

const mainSchema = new mongoose.Schema({
  Id: {
    type: Number,
    required: true,
    unique: true
  },
  title: {
    type: String,
    required: true,
  },
  moveUrl: {
    type: String
  },
  writer: {
    type: String,
    required: true,
    unique:true,
  },
  date: {
    type: String,
  }
});

module.exports = mongoose.model("main", mainSchema);