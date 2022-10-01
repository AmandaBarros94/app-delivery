import React, { useState, useContext } from 'react';
import { Link, Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import ClientContext from '../../context/client/ClienteContext';

function CommonNav({ user }) {
  const [loggedOutStatus, setLoggedOutStatus] = useState(false);

  const { setCustomerLoggedStatus, customerLoggedStatus } = useContext(ClientContext);

  const logOut = () => {
    setCustomerLoggedStatus(false);
    localStorage.clear();
    setLoggedOutStatus(true);
  };

  if (loggedOutStatus && !customerLoggedStatus) {
    return (
      <Navigate to="/" />
    );
  }

  return (
    <nav
      className="common-nav"
    >
      <div
        className="common-nav__container"
      >
        <Link
          data-testid="customer_products__element-navbar-link-products"
          to="/customer/products"
          className="common-nav__item"
        >
          PRODUTOS
        </Link>
        <Link
          data-testid="customer_products__element-navbar-link-orders"
          to="/customer/orders"
          className="common-nav__item"
        >
          MEUS PEDIDOS
        </Link>
      </div>

      <div
        className="common-nav__container"
      >
        <span
          className="common-nav__item common-nav__item--bg-purple"
          data-testid="customer_products__element-navbar-user-full-name"
        >
          {user}
        </span>
        <Link
          data-testid="customer_products__element-navbar-link-logout"
          to="/login"
          className="common-nav__item common-nav__item--bg-blue"
          onClick={ () => logOut() }
        >
          Sair
        </Link>
      </div>
    </nav>
  );
}

CommonNav.propTypes = {
  user: PropTypes.string.isRequired,
};

export default CommonNav;
