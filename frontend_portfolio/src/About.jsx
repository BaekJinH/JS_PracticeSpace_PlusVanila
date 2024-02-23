import React, { useEffect, useState } from 'react';
import AddTodo from './AddTodo';
import TodoList from './Todolist';

function About() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    // 서버에서 초기 할 일 목록을 불러오는 함수
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    // 서버에서 할 일 목록을 불러오는 로직
    try {
      const response = await fetch('http://localhost:4000/todos');
      if (!response.ok) throw new Error('Failed to fetch todos');
      const fetchedTodos = await response.json();
      setTodos(fetchedTodos);
    } catch (error) {
      console.error('Error fetching todos:', error);
    }
  };

  const addTodo = async title => {
    // 서버에 새로운 할 일을 추가하는 로직
    try {
      const response = await fetch('http://localhost:4000/todos', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title }),
      });
      if (response.ok) {
        const newTodo = await response.json();
        setTodos(todos.concat(newTodo)); // 할 일 목록 상태 업데이트
      } else {
        throw new Error('Todo not added');
      }
    } catch (error) {
      console.error('Error adding todo:', error);
    }
  };

  return (
    <div>
      <div className="todo_list_box">
        <h4 className="ttl">오늘 할 일</h4>
        <AddTodo addTodo={addTodo} />
        <TodoList todos={todos} />
      </div>
    </div>
  );
}

export default About;

// const [todos, setTodos] = useState([]);
// const [inputValue, setInputValue] = useState('');

// const handleKeyDown = e => {
//   if (e.key === 'Enter' && inputValue.trim() !== '') {
//     setTodos([...todos, inputValue]);
//     setInputValue('');
//   }
// };

// const handleChange = e => {
//   setInputValue(e.target.value);
// };

/* {todos.map((todo, index) => (
            <li key={index}>{todo}</li>
          ))} */
/* <input
          type="text"
          value={inputValue} // input의 value를 inputValue 상태와 동기화
          onKeyDown={handleKeyDown}
          onChange={handleChange}
        /> */
