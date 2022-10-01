import React, { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import SellerNav from '../components/navs/SellerNav';
import SellerOrders from './SellerOrders';
import getStorage from '../utils/handleStorage/getStorage';
import SellerOrderById from './SellerOrderById';

function Seller() {
  const [user, setUser] = useState('Default User');

  useEffect(() => {
    setUser(getStorage('user'));
  }, []);

  return (
    <div>
      <SellerNav user={ user.name } />

      <Routes>
        <Route
          path="/orders"
          element={ <SellerOrders /> }
        />

        <Route
          path="orders/:id"
          element={ <SellerOrderById /> }
        />
      </Routes>
    </div>
  );
}

export default Seller;
