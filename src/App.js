import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import './App.css';
// import Search from './components/Search';

const App = () => {
  return (
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          {/*<Route path="/search" component={Search} />*/}
        </Routes>
      </Router>
  );
}

export default App;
