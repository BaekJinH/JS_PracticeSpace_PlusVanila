import React, { useState, useEffect } from 'react';

function TodoList() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const response = await fetch('http://localhost:4000/todos');
        if (!response.ok) throw new Error('Failed to fetch todos');

        const fetchedTodos = await response.json();
        setTodos(fetchedTodos);
      } catch (error) {
        console.error('Error fetching todos:', error);
      }
    };

    fetchTodos();
  }, []); // 빈 배열을 전달해 컴포넌트 마운트 시에만 실행되도록 함

  return (
    <ul>
      {todos.map((todo, index) => (
        <li key={index}>{todo.title}</li>
      ))}
    </ul>
  );
}

export default TodoList;
