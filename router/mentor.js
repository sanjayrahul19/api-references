const router = require("express").Router();
const { Mentor } = require("../model/index");

router.get("/", (req, res) => {
  res.send("mentor");
});

router.post("/add", async (req, res) => {
  try {
    const mentor = new Mentor(req.body);
    const mentorData = await mentor.save();
    res.json(mentorData);
  } catch (err) {
    console.log(err);
    res.json({ msg: err.message });
  }
});

router.get("/all", async (req, res) => {
  try {
    const mentor = await Mentor.find({}).populate("students", "-_id");
    res.json(mentor);
  } catch (err) {
    console.log(err);
    res.json({ msg: err.message });
  }
});

module.exports = router;
