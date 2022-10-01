import React, { useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import ClientContext from './ClienteContext';

function ClientProvider({ children }) {
  const [client, setClient] = useState({
    id: '',
    name: '',
    email: '',
    role: '',
    token: '',
  });
  const [customerLoggedStatus, setCustomerLoggedStatus] = useState(false);
  const [sellerLoggedStatus, setSellerLoggedStatus] = useState(false);

  const value = useMemo(() => ({ client,
    setClient,
    customerLoggedStatus,
    setCustomerLoggedStatus,
    sellerLoggedStatus,
    setSellerLoggedStatus }), [client,
    setClient,
    customerLoggedStatus,
    setCustomerLoggedStatus,
    sellerLoggedStatus,
    setSellerLoggedStatus]);

  return (
    <ClientContext.Provider
      value={ value }
    >
      { children }
    </ClientContext.Provider>
  );
}

ClientProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ClientProvider;
