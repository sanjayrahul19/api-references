const router = require("express").Router();
const { Student } = require("../model/index");
const { Mentor } = require("../model/index");

router.post("/add", async (req, res) => {
  try {
    const student = new Student({
      name: req.body.name,
      age: req.body.age,
      department: req.body.department,
      mentor: req.body.mentor,
    });
    const studentData = await student.save();
    const mentor = await Mentor.findByIdAndUpdate(
      { _id: studentData.mentor },
      { $push: { students: studentData._id } },
      { new: true }
    );
    res.json(mentor);
  } catch (err) {
    console.log(err);
    res.json({ msg: err.message });
  }
});

router.get("/all", async (req, res) => {
  try {
    const student = await Student.find({}).populate("mentor", "-_id -__v");
    res.json(student);
  } catch (err) {
    console.log(err);
    res.json({ msg: err.message });
  }
});

module.exports = router;
