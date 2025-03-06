import React, { Component } from 'react';
import { Home } from './pages/Home';
import { About } from './pages/About';
import './App.css';
import { Route, Routes } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Routes>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
      </Routes>
    );
  }
}

export default App;
