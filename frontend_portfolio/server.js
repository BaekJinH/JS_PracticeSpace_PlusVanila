const express = require('express');
const app = express();
const PORT = 4000;

// JSON 형식의 요청 본문을 파싱하기 위한 미들웨어 설정
app.use(express.json());

// Todo 항목을 저장할 배열
const todos = [];

// GET 요청 처리: 모든 Todo 항목 제공
app.get('/todos', (req, res) => {
  res.json(todos);
});

// POST 요청 처리: 새 Todo 항목 생성
app.post('/todos', (req, res) => {
  const todo = req.body; // 요청 본문에서 Todo 데이터 추출
  todos.push(todo); // Todo 배열에 추가
  res.status(201).json(todo); // 생성된 Todo 항목 반환
});

// 서버 시작
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});