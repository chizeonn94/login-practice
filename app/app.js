"use strict";

const express = require("express");
const app = express();


//앱세팅
app.set("views", "./src/views");
app.set("view engine", "ejs");
app.use(express.static(`${__dirname}/src/public`))

const home = require("./src/routes/home");
app.use("/", home); //use는 미들웨어를 등록해주는 메서드.

module.exports = app;


