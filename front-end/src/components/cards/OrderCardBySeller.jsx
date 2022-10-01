import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import SellerOrderStatus from '../table/detailsOrder/SellerOrderStatus';
import leadingZeros from '../../utils/leadingZeros';

function OrderCardBySeller({ orderCode, statusOrder, dateOrder, priceTotal, address }) {
  const redirect = useNavigate();
  const four = 4;

  return (
    <div
      onClick={ () => redirect(`${orderCode}`) }
      onKeyDown={ () => redirect(`${orderCode}`) }
      role="button"
      tabIndex={ 0 }
    >
      <div>
        <div
          data-testid={
            `seller_orders__element-order-id-${orderCode}`
          }
        >
          Pedido
          {' '}
          { leadingZeros(orderCode.toString(), four) }
        </div>
      </div>

      <div>
        <div>
          <div
            data-testid={ `seller_orders__element-delivery-status-${orderCode}` }
          >
            <SellerOrderStatus status={ statusOrder } />
          </div>

          <div>
            <div
              data-testid={ `seller_orders__element-order-date-${orderCode}` }
            >
              { dateOrder }
            </div>

            <div
              data-testid={ `seller_orders__element-card-price-${orderCode}` }
            >
              R$
              {' '}
              { priceTotal }
            </div>
          </div>
        </div>
        <div
          data-testid={ `seller_orders__element-card-address-${orderCode}` }
        >
          { address }
        </div>
      </div>
    </div>
  );
}

OrderCardBySeller.propTypes = {
  orderCode: PropTypes.number.isRequired,
  statusOrder: PropTypes.string.isRequired,
  dateOrder: PropTypes.string.isRequired,
  priceTotal: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
};

export default OrderCardBySeller;
