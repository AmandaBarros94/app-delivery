import React from 'react';
import PropTypes from 'prop-types';
import ClientProvider from './client/ClientProvider';
import OrderProvider from './order/OrderProvider';

function MainProvider({ children }) {
  return (
    <ClientProvider>
      <OrderProvider>
        { children }
      </OrderProvider>
    </ClientProvider>
  );
}

MainProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MainProvider;
