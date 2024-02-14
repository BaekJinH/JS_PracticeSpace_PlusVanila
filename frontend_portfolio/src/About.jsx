import React, { useState } from 'react';
import linkList from './data/sample.json';

function About() {
  const [isClick, setIsClick] = useState(false);
  function clickEvent(e) {
    setIsClick(!isClick);
  }

  const [isContent, setIsContent] = useState('');

  return (
    <div>
      <div className="alarm_box">
        <a className="alarm" href="#none" onClick={clickEvent}>
          알림
        </a>
        <ul
          className="alram_list"
          style={{ display: isClick ? 'flex' : 'none' }}
        >
          {linkList.map((item, index) => (
            <li key={index} className={`alram_${item.className}`}>
              <a href={item.href}>{item.a}</a>
            </li>
          ))}
        </ul>
      </div>
      <div className="todo_list_box">
        <h4 className="ttl">오늘 할 일</h4>
        <ul className="todo_list" />
        <input
          type="text"
          name="listWrt"
          id="listWrt"
          onClick={e => {
            if (e.keyCode === 13 && setIsContent) {
            }
          }}
        />
      </div>
    </div>
  );
}

export default About;
