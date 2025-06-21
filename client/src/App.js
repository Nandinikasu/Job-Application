import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import AllApplications from './pages/Allapplications';

function App() {
  return (
    <Router>
      <nav style={{ padding: '10px' }}>
        <Link to="/" style={{ marginRight: '10px' }}>Home</Link>
        <Link to="/applications">View Applications</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/applications" element={<AllApplications />} />
      </Routes>
    </Router>
  );
}

export default App;
