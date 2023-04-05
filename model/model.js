const mongoose = require("mongoose");

var schema = new mongoose.Schema({
  title: {
    type: String,
    require: true,
    unique: true,
  },
  description: {
    type: String,
    require: true,
  },
  dateTime: {
    type: String,
    require: true,
  },
  reminder: {
    type: Boolean,
    require: false,
  },
});

const tasksDB = mongoose.model("taskDb", schema);
module.exports = tasksDB;
