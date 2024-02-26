import React, { useEffect, useState } from 'react';
import AddTodo from './AddTodo';
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
      if (!response.ok) throw new Error('Failed to fetch todos');
      const fetchedTodos = await response.json();
      setTodos(fetchedTodos);
    } catch (error) {
      console.error('Error fetching todos:', error);
    }
  };

  const addTodo = async title => {
    try {
      const response = await fetch('http://localhost:4000/todos', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title }),
      });
      if (!response.ok) {
        throw new Error('Todo not added');
      }
      // const newTodo = await response.json();
      // setTodos(prevTodos => [...prevTodos, newTodo]); // 현재 상태에 새 Todo 항목 추가
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
