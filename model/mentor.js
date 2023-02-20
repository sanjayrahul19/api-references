const mongoose = require("mongoose");

const mentor = mongoose.model("mentors", {
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  experience: {
    type: Number,
    default: 0,
  },
  students: [
    {
      type: mongoose.Types.ObjectId,
      ref: "students",
    },
  ],
});

module.exports = mentor;
