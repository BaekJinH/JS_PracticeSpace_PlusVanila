let express = require('express');

let app = express();
let PORT = 4000;

let cors = require('cors');

app.use(cors()); // CORS 문제를 해결하기 위해 모든 출처에서의 요청을 허용

app.use(express.json()); // JSON 형식의 요청 본문을 파싱하기 위한 미들웨어 설정
// Todo 항목을 저장할 배열

let todos = []; // 모든 Todo 항목을 제공하는 GET 요청 처리

app.get('/todos', function (req, res) {
  res.json(todos);
}); // 새 Todo 항목을 생성하는 POST 요청 처리

app.post('/todos', function (req, res) {
  let title = req.body.title; // 요청 본문에서 title을 추출

  let todo = {
    title: title,
  }; // 새 Todo 객체 생성

  todos.push(todo); // Todo 배열에 추가

  res.status(201).json(todo); // 생성된 Todo 항목 반환
}); // 서버 시작

app.listen(PORT, function () {
  console.log('Server is running on http://localhost:'.concat(PORT));
});