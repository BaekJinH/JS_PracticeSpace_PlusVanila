import React from 'react';
import { Header, Footer, Section } from './Common';
import { Routes, Route } from 'react-router-dom';
import Main from './Home';
import About from './About';
import NotFound from './NotFound';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Section />
      <Footer />
    </div>
  );
}

export default App;
