import React, { useState } from 'react';
import propTypes from 'prop-types';
import AppContext from './AppContext';

function AppProvider({ children }) {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [order, setOrder] = useState([]);

  const value = React.useMemo(() => ({
    email,
    setEmail,
    name,
    setName,
    password,
    setPassword,
    order,
    setOrder,
  }), [
    email,
    setEmail,
    name,
    setName,
    password,
    setPassword,
    order,
    setOrder,
  ]);

  return (
    <AppContext.Provider value={ value }>
      {children}
    </AppContext.Provider>
  );
}

AppProvider.propTypes = {
  children: propTypes.props,
}.isRequired;

export default AppProvider;
