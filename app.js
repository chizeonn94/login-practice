"use strict";

const express = require("express");
const app = express();
const PORT = 3000;

//앱세팅
app.set("views", "./views");
app.set("view engine", "ejs");

const home = require("./routes/home");
app.use("/", home); //use는 미들웨어를 등록해주는 메서드.
app.listen(PORT, () => {
  console.log("서버가동");
});
