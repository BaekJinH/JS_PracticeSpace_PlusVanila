import React, { useState } from 'react';

function AddTodo({ addTodo }) {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = async e => {
    e.preventDefault(); // 폼 제출에 의한 페이지 새로고침 방지
    if (!inputValue.trim()) return; // 입력값이 비어있으면 추가하지 않음

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
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default AddTodo;
