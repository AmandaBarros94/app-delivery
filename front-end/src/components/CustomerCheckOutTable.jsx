import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import AppContext from '../context/AppContext';

const testId22 = 'customer_checkout__element-order-table-item-number-';
const testId23 = 'customer_checkout__element-order-table-name-';
const testId24 = 'customer_checkout__element-order-table-quantity-';
const testId25 = 'customer_checkout__element-order-table-unit-price-';
const testId26 = 'customer_checkout__element-order-table-sub-total-';
const testId27 = 'customer_checkout__element-order-table-remove-';

export default function CreateTable({ element, index }) {
  const { order, setOrder } = useContext(AppContext);

  function RemoveCartItem({ target }) {
    const filteredItems = order.filter((item) => item.id !== Number(target.id));
    setOrder(filteredItems);
    localStorage.setItem('order', JSON.stringify(filteredItems));
  }

  return (
    <tr>
      <td data-testid={ `${testId22}${index}` }>{index + 1}</td>
      <td data-testid={ `${testId23}${index}` }>{element.name}</td>
      <td data-testid={ `${testId24}${index}` }>{element.quantity}</td>
      <td data-testid={ `${testId25}${index}` }>
        {Number(element.price).toFixed(2).replace('.', ',')}
      </td>
      <td data-testid={ `${testId26}${index}` }>
        {(Number(element.price) * element.quantity).toFixed(2).replace('.', ',')}
      </td>
      <td
        data-testid={ `${testId22}${index}` }
      >
        <button
          type="button"
          id={ element.id }
          data-testid={ `${testId27}${index}` }
          onClick={ RemoveCartItem }
        >
          Remover
        </button>
      </td>
    </tr>
  );
}

CreateTable.propTypes = {
  element: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    urlImage: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired,
  }).isRequired,
  index: PropTypes.number.isRequired,
};
