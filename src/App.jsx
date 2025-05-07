import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import Form from './components/Form';
import Home from './components/Home';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/visitor-logs" element={<Home />} />
        <Route path="/" element={<Form />} />
      </Routes>
   
    </BrowserRouter>
  );
}

export default App;