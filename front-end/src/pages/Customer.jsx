import React, { useState, useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import ProductCardsContainer from '../components/cards/ProductCardsContainer';
import CommonNav from '../components/navs/CommonNav';
import getStorage from '../utils/handleStorage/getStorage';
import getAllProducts from '../utils/api/requests/getAllProducts';
import Checkout from './Checkout';

function Customer() {
  const [productsList, setProductsList] = useState([]);
  const [user, setUser] = useState('Default User');
  const { pathname } = useLocation();
  const pathToProducts = '/customer/products';

  const fetchAllproducts = async () => {
    const { data: allProducts } = await getAllProducts();
    if (pathname === pathToProducts)setProductsList(allProducts);
  };

  useEffect(() => {
    fetchAllproducts();

    setUser(getStorage('user'));
    console.log(user);
  }, []);

  return (
    <div>
      <CommonNav user={ user.name } />

      <Routes>
        <Route
          path="/products"
          element={ <ProductCardsContainer products={ productsList } /> }
        />
        <Route
          path="/checkout"
          element={ <Checkout /> }
        />

      </Routes>

    </div>
  );
}

export default Customer;
