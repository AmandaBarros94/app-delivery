import { Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Customer from './pages/Customer';

export default function Router() {
  return (
    <Routes>
      <Route path="/login" element={ <Login /> } />
      <Route path="/" element={ <Navigate to="/login" /> } />
      <Route path="/register" element={ <Register /> } />
      <Route path="/customer/*" element={ <Customer /> } />
    </Routes>
  );
}
