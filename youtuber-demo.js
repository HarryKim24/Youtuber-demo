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

// 전체 유튜버 조회
app.get("/youtubers", (req, res) => {

  var youtubers = {};
  db.forEach(function(youtuber, key) {
    youtubers[key] = youtuber;
  })

  res.json(youtubers);
})

// 개별 유튜버 조회
app.get("/youtubers/:id", (req, res) => {
  let { id } = req.params;
  id = parseInt(id);
  const youtuber = db.get(id);

  if (youtuber == undefined) {
    res.json({
      message: "유튜버를 찾을 수 없습니다.",
    });
  } else {
    res.json(youtuber);
  }
});

// 유튜버 생성
app.use(express.json()); // http 외 모듈인 '미들웨어' : json 설정
app.post("/youtubers", (req, res) => {
  console.log(req.body);

  // Map(db)에 저장(set)
  db.set(idValue++, req.body);

  res.json({
    message : `${db.get(idValue - 1).channelTitle}님 채널이 생성되었습니다!`
  });
});

// 개별 유튜버 삭제
app.delete('/youtubers/:id', (req, res) => {
  let { id } = req.params;
  id = parseInt(id);
  const youtuber = db.get(id);

  if (youtuber == undefined) {
    res.json({
      message : `존재하지 않는 채널입니다.`
    });
  } else {
    db.delete(id);
    res.json({
      message : `${youtuber.channelTitle}님의 채널이 삭제되었습니다.`
    });
  }
})

// 전체 유튜버 삭제
app.delete('/youtubers', (req, res) => {

  if (db.size >= 1) {
    db.clear();
    res.json({
      message : '모든 유튜브 채널이 삭제되었습니다'
    })
  } else {
    res.json({
      message : '삭제할 유튜버가 존재하지 않습니다.'
    })
  }
})

// 개별 유튜버 수정
app.put('/youtubers/:id', (req, res) => {
  let { id } = req.params;
  id = parseInt(id);
  const youtuber = db.get(id);
  var oldChannelTitle = youtuber.channelTitle;

  if (youtuber == undefined) {
    res.json({
      message : `존재하지 않는 채널입니다.`
    });
  } else {
    var newChannelTitle = req.body.channelTitle;
    youtuber.channelTitle = newChannelTitle;
    db.set(id, youtuber);

    res.json({
      message : `채널명이 ${oldChannelTitle} 에서 ${newChannelTitle} 로 변경되었습니다.`
    });
  }
})