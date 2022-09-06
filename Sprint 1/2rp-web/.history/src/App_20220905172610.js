import './App.css';
import { Routes, Route } from 'react-router-dom'

import Login from './pages/login/login'
import Dashboard from './pages/home/dashboard'

import Button from 'react-bootstrap'

function App() {
  return (
    <Routes>
      <Route path='/login' element={<Login />} />
      <Route path='/dashboard' element={<Dashboard />} />
    </Routes>

  );
}

export default App;
