import React, { useState, useContext } from 'react';
import { Link, Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import ClientContext from '../../context/client/ClienteContext';

function SellerNav({ user }) {
  const [loggedOutStatus, setLoggedOutStatus] = useState(false);

  const { sellerLoggedStatus, setSellerLoggedStatus } = useContext(ClientContext);

  const logOut = () => {
    setSellerLoggedStatus(false);
    localStorage.clear();
    setLoggedOutStatus(true);
  };

  if (loggedOutStatus && !sellerLoggedStatus) {
    return (
      <Navigate to="/" />
    );
  }

  return (
    <nav className="common-nav">
      <div className="common-nav__container">
        <Link
          data-testid="customer_products__element-navbar-link-orders"
          to="orders"
          className="common-nav__item"
        >
          PEDIDOS
        </Link>
      </div>

      <div className="common-nav__container">
        <span
          data-testid="customer_products__element-navbar-user-full-name"
          className="common-nav__item common-nav__item--bg-purple"
        >
          {user}
        </span>

        <button
          type="button"
          data-testid="customer_products__element-navbar-link-logout"
          className="common-nav__item common-nav__item--bg-blue"
          onClick={ () => logOut() }
        >
          Sair
        </button>
      </div>
    </nav>
  );
}

SellerNav.propTypes = {
  user: PropTypes.string.isRequired,
};

export default SellerNav;
