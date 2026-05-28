const express = require("express");
const app = express();

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
  });
});
app.listen(8000, () => {
  console.log("listening at port 8000");
});
