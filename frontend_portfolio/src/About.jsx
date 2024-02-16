import React, { useState } from 'react';

function About() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleKeyDown = e => {
    if (e.key === 'Enter' && inputValue.trim() !== '') {
      setTodos([...todos, inputValue]);
      setInputValue('');
    }
  };

  const handleChange = e => {
    setInputValue(e.target.value);
  };

  return (
    <div>
      <div className="todo_list_box">
        <h4 className="ttl">오늘 할 일</h4>
        <ul className="todo_list">
          {todos.map((todo, index) => (
            <li key={index}>{todo}</li>
          ))}
        </ul>
        <input
          type="text"
          value={inputValue} // input의 value를 inputValue 상태와 동기화
          onKeyDown={handleKeyDown}
          onChange={handleChange}
        />
      </div>
    </div>
  );
}

export default About;
