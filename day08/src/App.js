import React from 'react';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import {BrowserRouter, Router, Routes, Route} from 'react-router-dom';

export default function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/dashboard" element={<Dashboard/>}/>
        </Routes>
      </Router>
    </div>
  )
}
