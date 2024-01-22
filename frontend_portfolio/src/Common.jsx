import { useState } from 'react';
import LinkList from './data/sample.json';

export function Header() {
  let isClick = false;
  function clickEvent(e) {
    e.preventDefault();
    isClick = true;
  }
  return (
    <header>
      <div className="wrapper">
        <div className="head_top">
          <h1>로고 위치</h1>
          <div className="other">
            <a href="#none">
              <ul>
                <li />
                <li />
                <li />
              </ul>
            </a>
          </div>
        </div>
        <div className="head_bot">
          <div className="alarm_box">
            <a className="alarm" href="#none" onClick={clickEvent}>
              알림
            </a>
            <ul
              className="alram_list"
              style={isClick ? 'display: block' : 'display: none'}
            >
              {LinkList.map((item, index) => (
                <li key={index} className={`alram_${item.className}`}>
                  <a
                    href={item.href}
                    target={item.isBlank}
                    rel={item.isBlank === '_blank' ? 'noopener noreferrer' : ''}
                  >
                    {item.a}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}

export function Section() {
  return (
    <main>
      <div className="wrapper">
        <section />
        <section />
      </div>
    </main>
  );
}

export function Footer() {
  return (
    <footer>
      <div className="wrapper" />
    </footer>
  );
}
