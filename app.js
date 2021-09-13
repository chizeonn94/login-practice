const http = require("http");
const app = http.createServer((req, res) => {
  console.log(req.url);
  res.writeHead(200, { "content-Type": "text/html; charset=utf-8 " });
  if (req.url === "/") {
    res.end("여기는 루트입니다.");
  } else if (req.url === "/login") {
    res.end("여기는 로그인화면입니다.");
  }
});
app.listen(3001, () => {
  console.log("http로 가동된 서버입니다.");
});
// const express = require("express");
// const app = express();
// app.get("/", (req, res) => {
//   console.log("hi");
//   res.send("여기는 루트 화면입니다.");
// });
// app.get("/login", (req, res) => {
//   res.send("여기는 로그인화면입니다. -지선");
// });
// app.listen(3000, () => {
//   console.log("서버가동");
// });
