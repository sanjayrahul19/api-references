const express = require("express");
const app = express();
const PORT = process.env.PORT || 8000;
const connectDB = require("./config/db");
const apiRouter = require("./router");

connectDB();

app.use(express.json());
app.use("/api", apiRouter);

app.listen(PORT, () => {
  console.log("server is up and running");
});
