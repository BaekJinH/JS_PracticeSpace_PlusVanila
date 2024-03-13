import React from 'react';
import { Header, Footer, Section } from './Common';
import { Routes, Route } from 'react-router-dom';
import Main from './Home';
import About from './About';
// import Store from './store';
// import Search from './search';
// import Scroll from './scroll';
import NotFound from './NotFound';

function App() {
  return (
    <div className="App">
      <Header />
      <Section>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/About" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Section>
      <Footer />
    </div>
  );
}

export default App;
