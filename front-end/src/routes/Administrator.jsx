import { Route, Routes } from 'react-router-dom';
import AdminProvider from '../contexts/AdminContext/Provider';
import { Administrator } from '../pages';

export default function AdministratorRoute() {
  return (
    <AdminProvider>
      <Routes>
        <Route path="/admin/manage" element={ <Administrator /> } />
      </Routes>
    </AdminProvider>
  );
}
