import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import homeLink from '../data/home_link.json';

export function Header() {
  const [isTheme, setIsTheme] = useState(
    localStorage.getItem('theme') === 'dark',
  );

  useEffect(() => {
    const currentTheme = localStorage.getItem('theme') || 'light';
    document.body.classList.remove('dark', 'light');
    document.querySelector('html').classList.remove('dark', 'light');
    document.querySelector('html').classList.add(currentTheme);
    document.body.classList.add(currentTheme);
  }, [isTheme]);

  function toggleTheme() {
    const newTheme = !isTheme ? 'dark' : 'light';
    localStorage.setItem('theme', newTheme);
    setIsTheme(!isTheme);
  }

  return (
    <header>
      <div className="head_top">
        <nav>
          <ul>
            <li>
              <a href="#section1">섹션1 이동</a>
            </li>
            <li>
              <a href="#section2">섹션2 이동</a>
            </li>
            <li>
              <a href="#section3">섹션3 이동</a>
            </li>
            <li>
              <a href="#section4">섹션4 이동</a>
            </li>
          </ul>
        </nav>
        <div className="other">
          <a href="#none">
            <ul>
              <li />
              <li />
              <li />
            </ul>
          </a>
          <button onClick={toggleTheme}>테마 변경</button>
        </div>
      </div>
      <div className="head_bot" />
    </header>
  );
}

export function Section() {
  return (
    <main>
      <div className="wrapper">
        <section />
        <div className="router_testArea">
          {homeLink.map((item, index) => (
            <Link to={item.href} key={index}>
              {item.text}
            </Link>
          ))}
          {/* <Link to="/">Test Home</Link>
          <Link to="/about">Test About</Link> */}
        </div>
        <section />
      </div>
    </main>
  );
}
// 해당 React Router 를 사용하기 위해서는 import한 요소를 선언한 후 그냥 사용하면 안 되고 Router 태그에 넣어야 사용이 가능함 미 사용 시 에러

export function Footer() {
  return (
    <footer>
      <div className="wrapper" />
    </footer>
  );
}
