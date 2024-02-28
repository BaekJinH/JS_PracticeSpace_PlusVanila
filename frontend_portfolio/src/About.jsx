import React from 'react';
import TodoList from './Todolist';
import { Link } from 'react-router-dom';

function About() {
  return (
    <div>
      <div className="todo_list_box">
        <h4 className="ttl">Todo 리스트</h4>
        <TodoList />
      </div>
      <Link to="/About/Store">스토어 바로가기</Link>
    </div>
  );
}

export default About;

// const [todos, setTodos] = useState();

// // 마운트 될 때에만 실행
// useEffect(() => {
//   // 서버에서 초기 할 일 목록을 불러오는 함수
//   fetchTodos();
// }, []);

// const fetchTodos = async () => {
//   // 서버에서 할 일 목록을 불러오는 로직
//   try {
//     const response = await fetch('http://localhost:4000/todos');
//     if (!response.ok) {
//       throw new Error('Failed to fetch todos');
//     }
//     const fetchedTodos = await response.json();
//     setTodos(fetchedTodos);
//   } catch (error) {
//     console.error('Error fetching todos:', error);
//   }
// };
