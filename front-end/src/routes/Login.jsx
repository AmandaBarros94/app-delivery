import { Route, Routes, Navigate } from 'react-router-dom';
import { Login, Register } from '../pages';

export default function LoginRoutes() {
  return (
    <Routes>
      <Route path="/login" element={ <Login /> } />
      <Route path="/register" element={ <Register /> } />
      <Route exact path="/" element={ <Navigate to="/login" /> } />
    </Routes>
  );
}
