const express = require("express");
const app = express();
app.listen(1234);

// youtuber 객체
let youtuber1 = {
  channelTitle: "YoutuberKim",
  sub: "123만명",
  videoNum: "6개",
};

let youtuber2 = {
  channelTitle: "YoutuberLee",
  sub: "456만명",
  videoNum: "15개",
};

let youtuber3 = {
  channelTitle: "YoutuberPark",
  sub: "789만명",
  videoNum: "24개",
};

let db = new Map();
var idValue = 1;
db.set(idValue++, youtuber1);
db.set(idValue++, youtuber2);
db.set(idValue++, youtuber3);

// youtuber API 설계
app.get("/youtubers", function (req, res) {
  res.json({
    message: "test"
  });
})

app.get("/youtuber/:id", function (req, res) {
  let { id } = req.params;
  id = parseInt(id);
  const youtuber = db.get(id);

  if (youtuber == undefined) {
    res.json({
      message: "Cannot find youtuber.",
    });
  } else {
    res.json(youtuber);
  }
});

app.use(express.json()); // http 외 모듈인 '미들웨어' : json 설정
app.post("/youtuber", (req, res) => {
  console.log(req.body);

  // Map(db)에 저장(set)
  db.set(idValue++, req.body);

  res.json({
    message : `${db.get(idValue - 1).channelTitle}님 채널이 생성되었습니다!`
  });
});
