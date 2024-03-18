import React from 'react';
import { Header, Footer, Section } from './Common';
import { Routes, Route } from 'react-router-dom';
import Main from './Home';
import About from '../About';
import Store from './store';
import Search from './search';
import Scroll from './scroll.jsx';
import NotFound from '../NotFound';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/About" element={<About />} />
        <Route path="/About/Store" element={<Store />} />
        <Route path="/About/Search" element={<Search />} />
        <Route path="/About/InfScroll" element={<Scroll />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Section />
      <Footer />
    </div>
  );
}

export default App;
