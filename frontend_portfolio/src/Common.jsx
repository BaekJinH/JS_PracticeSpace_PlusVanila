import { useState } from 'react';

export function Header() {
  return (
    <header>
      <div className="wrapper">
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
