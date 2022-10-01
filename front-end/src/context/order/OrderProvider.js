import React, { useState, useEffect, useMemo } from 'react';
import PropTypes from 'prop-types';
import OrderContext from './OrderContext';

function OrderProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const prices = cart.map((item) => item.subTotal);
    setTotal(prices.reduce((prev, curr) => prev + curr, 0).toFixed(2));
  }, [cart]);

  const value = useMemo(() => ({
    cart, setCart, total, setTotal }), [cart, setCart, total, setTotal]);
  return (
    <OrderContext.Provider
      value={ value }
    >
      {children}
    </OrderContext.Provider>
  );
}

OrderProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default OrderProvider;
