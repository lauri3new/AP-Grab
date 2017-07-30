const mongoose = require('mongoose');

const Schema = mongoose.Schema;

var jobSchema = new Schema({
  id: Number,
  user: String,
  proteins: Array,
  date: Date
});

var Job = mongoose.model("Job", jobSchema);

module.exports = Job;
