import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import AppContext from '../context/AppContext';

function Navbar() {
  const { name } = useContext(AppContext);
  return (
    <header>
      <Link to="/customer/products">
        <button
          data-testid="customer_products__element-navbar-link-products"
          type="button"
        >
          Produtos
        </button>
      </Link>

      <Link to="/customer/orders">
        <button
          data-testid="customer_products__element-navbar-link-orders"
          type="button"
        >
          Meus pedidos
        </button>
      </Link>

      <span
        data-testid="customer_products__element-navbar-user-full-name"
      >
        { name || 'Nome' }
      </span>

      <Link to="/login">
        <button
          onClick={ () => {
            localStorage.clear();
          } }
          type="button"
          data-testid="customer_products__element-navbar-link-logout"
        >
          Sair
        </button>
      </Link>
    </header>
  );
}

export default Navbar;
