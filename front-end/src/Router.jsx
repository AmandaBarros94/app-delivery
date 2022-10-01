import { Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Customer from './pages/Customer';
import CustomerOrders from './pages/CustomerOrders';

export default function Router() {
  return (
    <Routes>
      <Route path="/login" element={ <Login /> } />
      <Route path="/" element={ <Navigate to="/login" /> } />
      <Route path="/register" element={ <Register /> } />
      <Route path="/customer/orders" element={ <CustomerOrders /> } />
      <Route path="/customer/*" element={ <Customer /> } />
    </Routes>
  );
}
