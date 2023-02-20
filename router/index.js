const mentorRouter = require("./mentor");
const studentRouter = require("./student");
const router = require("express").Router();

router.use("/mentor", mentorRouter);
router.use("/student", studentRouter);

module.exports = router;
