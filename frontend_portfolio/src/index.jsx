import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import ThemeEvent from './ThemeEvent.jsx';

// 버전 문제로 ReactDOM.createRoot 후 코드 불러오기는 사용하지 않음
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeEvent />
    <App />
  </React.StrictMode>,
);
