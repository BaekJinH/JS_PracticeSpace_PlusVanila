import './css/style.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
// BrouserRouter 가 기본 Router 이름이지만 as => alias(별칭)를 사용하여 Router라는 이름으로 바꿈.
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import App from './App';
import Main from './Main';
import About from './About';
import NotFound from './NotFound';
import ThemeEvent from './event/ThemeEvent';

// 버전 문제로 ReactDOM.createRoot 후 코드 불러오기는 사용하지 않음
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <ThemeEvent />
      {/* <App /> */}
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/About" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  </React.StrictMode>,
);
