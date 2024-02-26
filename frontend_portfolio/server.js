const express = require('express');
const app = express();
const PORT = 4000;

const cors = require('cors');
app.use(cors()); // CORS 문제를 해결하기 위해 모든 출처에서의 요청을 허용

app.use(express.json()); // JSON 형식의 요청 본문을 파싱하기 위한 미들웨어 설정

// Todo 항목을 저장할 배열
const todos = [];

// 모든 Todo 항목을 제공하는 GET 요청 처리
app.get('/todos', (req, res) => {
  res.json(todos);
});

let currentId = 0;

// 새 Todo 항목을 생성하는 POST 요청 처리
app.post('/todos', (req, res) => {
  const {
    title
  } = req.body; // 요청 본문에서 title을 추출
  const todo = {
    id: currentId++,
    title,
  }; // 새 Todo 객체 생성
  todos.push(todo); // Todo 배열에 추가
  res.status(201).json(todo); // 생성된 Todo 항목 반환
});

app.delete('/todos/:id', (req, res) => {
  const {
    id
  } = req.params;
  const todoIndex = todos.findIndex(todo => todo.id === parseInt(id, 10)); // 삭제할 Todo 항목의 인덱스를 찾음
  if (todoIndex > -1) {
    // 해당하는 Todo 항목이 배열에 존재한다면
    todos.splice(todoIndex, 1); // 해당 인덱스의 Todo 항목을 배열에서 삭제
    res.status(200).json({
      message: `Todo with id ${id} deleted successfully.`,
    });
  } else {
    res.status(404).send('Todo not found'); // 해당하는 Todo 항목이 없는 경우 404 오류 응답
  }
});

// 서버 시작
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});