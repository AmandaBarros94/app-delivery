import React from 'react';
import PropTypes from 'prop-types';

function TableRow({
  item,
  description,
  quantity,
  unitaryValue,
  subTotal,
  indexProduct,
}) {
  return (
    <tr>
      <td
        data-testid={
          `customer_order_details__element-order-table-item-number-${indexProduct}`
        }
      >
        {item}
      </td>

      <td
        data-testid={ `customer_order_details__element-order-table-name-${indexProduct}` }
      >
        {description}
      </td>

      <td
        data-testid={
          `customer_order_details__element-order-table-quantity-${indexProduct}`
        }
      >
        {quantity}
      </td>

      <td
        data-testid={
          `customer_order_details__element-order-table-unit-price-${indexProduct}`
        }
      >
        {unitaryValue}
      </td>

      <td
        data-testid={
          `customer_order_details__element-order-table-sub-total-${indexProduct}`
        }
      >
        {subTotal}
      </td>
    </tr>
  );
}

TableRow.propTypes = {
  item: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
  unitaryValue: PropTypes.string.isRequired,
  subTotal: PropTypes.string.isRequired,
  indexProduct: PropTypes.number.isRequired,
};

export default TableRow;
