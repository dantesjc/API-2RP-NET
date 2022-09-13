import './App.css';
import { Routes, Route } from 'react-router-dom'
import Login from './pages/login/login'
import Dashboard from './pages/home/dashboard'
import Sobreaviso from './pages/home/sobreaviso'

import Button from 'react-bootstrap'

function App() {
  return (
    <Routes>
      <Route path='/login' element={<Login />} />
      <Route path='/dashboard' element={<Dashboard />} />
      <Route path='/sobreaviso' element={<Sobreaviso />} />
    </Routes>

  );
}

export default App;
