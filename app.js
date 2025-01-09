import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import AddEditStock from './components/AddEditStock';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/add" element={<AddEditStock />} />
        <Route path="/edit/:id" element={<AddEditStock />} />
      </Routes>
    </Router>
  );
}

export default App;
