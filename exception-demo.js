const express = require('express');
const app = express();
app.listen(1234);

const fruitsArr = [
  { id: 1, name: "apple" },
  { id: 2, name: "banana" },
  { id: 3, name: "orange" },
  { id: 4, name: "mango" }
]

// 전체 조회
app.get('/fruits', (req, res) => {
  res.json(fruitsArr);
})

// 개별 조회
app.get('/fruits/:id', (req, res) => {
  let id = req.params.id;
  let selectFruit = fruitsArr.find(fruit => fruit.id == id);

  if (selectFruit) {
    res.json(selectFruit);
  } else {
    res.status(200).json(
      "cannot find fruit"
    );
  }
})