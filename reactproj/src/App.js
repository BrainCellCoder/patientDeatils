import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { Home } from './views/home/home';
import NavBar from './component/navbar/NavBar';
// Import other components here if needed

function App() {
  return (
    <Router>
      <NavBar/>
      <Routes>
        <Route path="/home" element={<Home />} />
        {/* Add other routes here */}
      </Routes>
    </Router>
  );
}

export default App;

