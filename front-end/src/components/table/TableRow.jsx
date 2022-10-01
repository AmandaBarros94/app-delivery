import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import OrderContext from '../../context/order/OrderContext';

function TableRow({ item, description, quantity, unitaryValue, subTotal, index }) {
  const { cart, setCart } = useContext(OrderContext);

  const removeItemFromCart = () => {
    setCart(cart.filter((product) => product.productId !== item));
  };

  return (
    <tr>
      <td
        data-testid={ `customer_checkout__element-order-table-item-number-${index}` }
        className="base-table__cell"
      >
        {index + 1}
      </td>

      <td
        data-testid={ `customer_checkout__element-order-table-name-${index}` }
        className="base-table__cell"
      >
        {description}
      </td>

      <td
        data-testid={ `customer_checkout__element-order-table-quantity-${index}` }
        className="base-table__cell"
      >
        {quantity}
      </td>

      <td
        data-testid={ `customer_checkout__element-order-table-unit-price-${index}` }
        className="base-table__cell"
      >
        {unitaryValue}
      </td>

      <td
        data-testid={ `customer_checkout__element-order-table-sub-total-${index}` }
        className="base-table__cell"
      >
        {subTotal}
      </td>

      <td className="base-table__cell">

        <button
          data-testid={ `customer_checkout__element-order-table-remove-${index}` }
          type="button"
          className="base-table__button"
          onClick={ removeItemFromCart }
        >
          Remover
        </button>
      </td>
    </tr>
  );
}

TableRow.propTypes = {
  item: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  quantity: PropTypes.string.isRequired,
  unitaryValue: PropTypes.string.isRequired,
  subTotal: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
};

export default TableRow;
