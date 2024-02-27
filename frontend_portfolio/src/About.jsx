import React, { useEffect, useState } from 'react';
// import AddTodo from './AddTodo';
import TodoList from './Todolist';

function About() {
  const [todos, setTodos] = useState();

  useEffect(() => {
    // 서버에서 초기 할 일 목록을 불러오는 함수
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    // 서버에서 할 일 목록을 불러오는 로직
    try {
      const response = await fetch('http://localhost:4000/todos');
      if (!response.ok) {
        throw new Error('Failed to fetch todos');
      }
      const fetchedTodos = await response.json();
      setTodos(fetchedTodos);
    } catch (error) {
      console.error('Error fetching todos:', error);
    }
  };

  return (
    <div>
      <div className="todo_list_box">
        <h4 className="ttl">Todo List</h4>
        <TodoList />
      </div>
    </div>
  );
}

export default About;
