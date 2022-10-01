import React, { useContext } from 'react';
import replaceDotToSemiColon from '../../utils/replaceDotToSemiColon';
import TableRow from './TableRowSeller';
import OrderContext from '../../context/order/OrderContext';

function FinalizeOrderTable() {
  const { cart, total } = useContext(OrderContext);

  return (
    <div>
      <table className="base-table">
        <caption>Finalizar pedido</caption>

        <thead>
          <tr>
            <th className="base-table__cell">Item</th>
            <th className="base-table__cell">Descrição</th>
            <th className="base-table__cell">Quantidade</th>
            <th className="base-table__cell">Valor Unitário</th>
            <th className="base-table__cell">Sub-total</th>
            <th
              className="base-table__cell"
            >
              Remover Item
            </th>
          </tr>
        </thead>

        <tbody>
          {
            cart.map((product, index) => (
              <TableRow
                key={ index }
                item={ product.productId }
                description={ product.productDescription }
                quantity={ product.quantity }
                unitaryValue={ replaceDotToSemiColon(Number(product.productPrice)) }
                subTotal={ replaceDotToSemiColon(Number(product.subTotal)) }
                index={ index }
              />
            ))
          }
        </tbody>
      </table>

      <span data-testid="customer_checkout__element-order-total-price">
        {replaceDotToSemiColon(Number(total))}
      </span>
    </div>
  );
}

export default FinalizeOrderTable;
