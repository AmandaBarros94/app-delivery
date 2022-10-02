import { Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Customer from './pages/Customer';
import Seller from './pages/Seller';
import Admin from './pages/Admin';

export default function Router() {
  return (
    <Routes>
      <Route path="/login" element={ <Login /> } />
      <Route exact path="/" element={ <Navigate to="/login" /> } />
      <Route path="/register" element={ <Register /> } />
      <Route path="/customer/*" element={ <Customer /> } />
      <Route path="/seller/*" element={ <Seller /> } />
      <Route path="/admin/manage" element={ <Admin /> } />
    </Routes>
  );
}
