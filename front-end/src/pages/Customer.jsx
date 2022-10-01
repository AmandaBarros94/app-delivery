import React, { useState, useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import ProductCardsContainer from '../components/cards/ProductCardsContainer';
import CommonNav from '../components/navs/CommonNav';
import getStorage from '../utils/handleStorage/getStorage';
import getAllProducts from '../utils/api/requests/getAllProducts';

function Customer() {
  const [productsList, setProductsList] = useState([]);
  const [user, setUser] = useState('Default User');
  const { pathname } = useLocation();
  const pathToProducts = '/customer/products';

  useEffect(() => {
    const fetchAllproducts = async () => {
      const { data: allProducts } = await getAllProducts();
      if (pathname === pathToProducts)setProductsList(allProducts);
    };

    fetchAllproducts();

    setUser(getStorage('user'));
  }, [pathname]);

  return (
    <div>
      <CommonNav user={ user.name } />

      <Routes>
        <Route
          path="/products"
          element={ <ProductCardsContainer products={ productsList } /> }
        />
      </Routes>
    </div>
  );
}

export default Customer;