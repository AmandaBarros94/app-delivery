import PropTypes from 'prop-types';
import React from 'react';
import TableRow from './TableRow';
import OrderStatus from './OrderStatus';
import leadingZeros from '../../../utils/leadingZeros';

const FOUR = 4;

function OrderDetailsTable({ order: {
  id,
  sellerName,
  saleDate,
  status,
  totalPrice,
  productsList,
},
}) {
  return (
    <div>
      <OrderStatus
        orderId={ leadingZeros(id.toString(), FOUR) }
        sellerName={ sellerName }
        saleDate={ saleDate }
        status={ status }
      />

      <table className="base-table">
        <caption>Detalhes pedido</caption>

        <thead>
          <tr>
            <th className="base-table__cell">Item</th>
            <th className="base-table__cell">Descrição</th>
            <th className="base-table__cell">Quantidade</th>
            <th className="base-table__cell">Valor Unitário</th>
            <th className="base-table__cell">Sub-total</th>
          </tr>
        </thead>

        <tbody>
          {
            productsList.map(({ name, quantity, price, subTotal }, index) => (
              <TableRow
                key={ index }
                item={ id }
                description={ name }
                quantity={ quantity }
                unitaryValue={ price }
                subTotal={ subTotal }
                indexProduct={ index }
              />
            ))
          }
        </tbody>
      </table>

      <span
        data-testid="customer_order_details__element-order-total-price"
      >
        Total: R$:
        {totalPrice}
      </span>
    </div>
  );
}

OrderDetailsTable.propTypes = {
  order: PropTypes.shape({
    id: PropTypes.number,
    sellerName: PropTypes.string,
    saleDate: PropTypes.string,
    status: PropTypes.string,
    totalPrice: PropTypes.string,
    productsList: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      price: PropTypes.string,
      quantity: PropTypes.number,
      subTotal: PropTypes.string,
    })),
  }).isRequired,
};

export default OrderDetailsTable;
