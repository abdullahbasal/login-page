import './App.css';
import * as React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './pages/login/Login';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
