import './App.css';
import * as React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './pages/login/Login';
import Components from './pages/components/Components';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="/components" element={<Components />} />
      </Routes>
    </div>
  );
}

export default App;
