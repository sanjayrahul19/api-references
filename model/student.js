const mongoose = require("mongoose");

const Student = mongoose.model("students", {
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  department: {
    type: String,
    required: true,
  },
  mentor: [
    {
      type: mongoose.Types.ObjectId,
      ref: "mentors",
    },
  ],
});

module.exports = Student;
