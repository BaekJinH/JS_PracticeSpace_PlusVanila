const express = require('express');
const fs = require('fs');
const app = express();
const PORT = 4000;

const cors = require('cors');
app.use(cors()); // CORS 문제를 해결하기 위해 모든 출처에서의 요청을 허용
app.use(express.json()); // JSON 형식의 요청 본문을 파싱하기 위한 미들웨어 설정

// Todo 항목을 저장할 배열
const todos = [];

// 스토어의 항목을 저장할 배열
const articles = [];

// 모든 Todo 항목을 제공하는 GET 요청 처리
app.get('/todos', (req, res) => {
  res.json(todos);
});

app.get('/articles', (req, res) => {
  fs.readFile('./src/data/article.json', 'utf8', (err, data) => {
    if (err) {
      res.status(500).send('Error reading from file');
      return;
    }
    try {
      const articles = JSON.parse(data);
      res.json(articles);
    } catch (error) {
      res.status(500).send('Error parsing JSON');
    }
  });
});

let currentId = 0;

// 새 Todo 항목을 생성하는 POST 요청 처리
app.post('/todos', (req, res) => {
  const { title } = req.body; // 요청 본문에서 title을 추출
  const todo = {
    id: currentId++,
    title,
  }; // 새 Todo 객체 생성
  todos.push(todo); // Todo 배열에 추가
  res.status(201).json(todo); // 생성된 Todo 항목 반환
});

app.delete('/todos/:id', (req, res) => {
  const { id } = req.params;
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

app.post('/articles', (req, res) => {
  const newArticle = req.body; // 클라이언트로부터 새 기사 받기
  fs.readFile('./src/data/article.json', 'utf8', (err, data) => {
    if (err) {
      res.status(500).send('Error reading from file');
      return;
    }
    try {
      const articles = JSON.parse(data);
      articles.push(newArticle); // 새 기사 추가
      fs.writeFile(
        './src/data/article.json',
        JSON.stringify(articles, null, 2),
        'utf8',
        writeErr => {
          if (writeErr) {
            res.status(500).send('Error writing to file');
            return;
          }
          res.status(201).send('Article added');
        },
      );
    } catch (parseErr) {
      res.status(500).send('Error parsing JSON');
    }
  });
});

app.delete('/articles/:id', (req, res) => {
  const { id } = req.params;
  const articleIndex = articles.findIndex(
    article => article.id === parseInt(id, 10),
  ); // 삭제할 Todo 항목의 인덱스를 찾음
  if (articleIndex > -1) {
    // 해당하는 Todo 항목이 배열에 존재한다면
    todos.splice(articleIndex, 1); // 해당 인덱스의 Todo 항목을 배열에서 삭제
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
