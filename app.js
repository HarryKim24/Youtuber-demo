const express = require("express");
const app = express();
const port = 1234;

app.get("/", (req, res) => {
  res.send("Main Page!");
});

app.use(express.json()); // http 외 모듈인 '미들웨어' : json 설정
app.post("/test", (req, res) => {
  // body에 숨겨져서 들어온 데이터를 화면에 표시
  console.log(req.body.message);

  res.send(req.body.message);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
