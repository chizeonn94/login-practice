const express = require("express");
const app = express();
app.get("/", (req, res) => {
  console.log("hi");
  res.send("여기는 루트 화면입니다.");
});
app.get("/login", (req, res) => {
  res.send("여기는 로그인화면입니다. -지선");
});
app.listen(3000, () => {
  console.log("서버가동");
});
