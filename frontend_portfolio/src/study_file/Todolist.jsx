import React, { useState, useEffect } from 'react';

function AddTodo({ onAddTodo }) {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = async e => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    try {
      const response = await fetch('http://localhost:4000/todos', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title: inputValue }),
      });

      if (response.ok) {
        const newTodo = await response.json();
        onAddTodo(newTodo); // 수정: inputValue 대신 newTodo를 추가합니다.
        console.log('Todo added:', newTodo);
        setInputValue(''); // 입력 필드 초기화
      } else {
        throw new Error('Todo not added');
      }
    } catch (error) {
      console.error('Error adding todo:', error);
    }
  };

  return (
    <div className="todo_wrap">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputValue}
          onChange={e => setInputValue(e.target.value)}
          placeholder="해야할 일을 입력하세요"
        />
        <button>Add</button>
      </form>
    </div>
  );
}

function TodoList({ todos, onRemoveTodo }) {
  // 수정: 두 번째 정의를 이 위치로 옮겼습니다.
  return (
    <ul>
      {todos.map(todo => (
        <li key={todo.id} className="todo_el">
          <span>{todo.id} : </span>
          <span>{todo.title}</span>
          <button onClick={() => onRemoveTodo(todo.id)}>Remove Button</button>
        </li>
      ))}
    </ul>
  );
}

function TodoApp() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const fetchTodos = async () => {
      const response = await fetch('http://localhost:4000/todos');
      const fetchedTodos = await response.json();
      setTodos(fetchedTodos);
    };

    fetchTodos();
  }, []);

  const addTodo = title => {
    setTodos(prevTodos => [...prevTodos, title]);
  };

  const removeTodo = async id => {
    const isConfirm = window.confirm('정말 삭제하시겠습니까?');
    if (!isConfirm) {
      return false;
    }

    const response = await fetch(`http://localhost:4000/todos/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      setTodos(prevTodos => prevTodos.filter(todo => todo.id !== id));
      console.log(`${id} : Delete !`);
    } else {
      console.error(response.statusText);
    }
  };

  return (
    <div>
      <AddTodo onAddTodo={addTodo} />
      <TodoList todos={todos} onRemoveTodo={removeTodo} />
    </div>
  );
}

export default TodoApp;
