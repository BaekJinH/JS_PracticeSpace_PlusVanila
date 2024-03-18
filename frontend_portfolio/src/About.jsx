import React from 'react';
import TodoList from './study_file/Todolist';
import { Link } from 'react-router-dom';

function About() {
  return (
    <div>
      <div className="todo_list_box">
        <h4 className="ttl">Todo 리스트</h4>
        <TodoList />
      </div>
      <Link to="/About/Store">스토어 바로가기</Link>
      <br />
      <Link to="/About/Search">검색 바로가기</Link>
      <br />
      <Link to="/About/InfScroll">무한 스크롤링</Link>
    </div>
  );
}

export default About;
