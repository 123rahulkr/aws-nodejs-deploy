const express = require("express");
const app = express();
require("dotenv").config();

app.get("/api/get", (req, res) => {
  res.send({ message: "hello from nodejs" });
});
app.get("/api/get_user_details", (req, res) => {
  res.send({
    user: {
      name: "Rahul",
      email: "rkrxx@gmail.com",
      contact: 1234,
    },
    env: process.env.NAME,
  });
});
app.listen(process.env.PORT, () => {
  console.log("listening at port 8000");
});
