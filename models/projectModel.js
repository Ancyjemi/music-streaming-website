const mongoose = require("mongoose");
const projectSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  artist: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: false,
  },
  duration: {
    type: Number,
    required: true,
  },
});

const Projects = mongoose.model("Projects", projectSchema);
module.exports = Projects;
