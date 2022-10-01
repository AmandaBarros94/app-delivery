import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import SellerOrderStatus from '../table/detailsOrder/SellerOrderStatus';
import leadingZeros from '../../utils/leadingZeros';
import landingZerosForDates from '../../utils/landingZerosForDates';

const FOUR = 4;

function OrderCardByCustomer({ orderCode, statusOrder, dateOrder, priceTotal }) {
  const redirect = useNavigate();

  return (
    <div
      className="order-container"
      onClick={ () => redirect(`${orderCode}`) }
      onKeyDown={ () => {} }
      role="button"
      tabIndex={ 0 }
    >
      <div
        className="order-container--bg-white"
      >
        <div
          className="order-container--bg-white--order-code"
          data-testid={ `customer_orders__element-order-id-${orderCode}` }
        >
          {`Pedido ${leadingZeros(orderCode.toString(), FOUR)}`}
        </div>
      </div>

      <div
        className="order-container--bg-gray"
      >
        <div
          className="order-container--bg-gray--container-status"
        >
          <div
            className="order-container--bg-gray--container-status--type"
            data-testid={ `customer_orders__element-delivery-status-${orderCode}` }
          >
            <SellerOrderStatus status={ statusOrder } />
          </div>

          <div
            className="order-container--bg-gray--container-status--date-price"
          >
            <div
              className="order-container--bg-gray--container-status--date-price--info"
              data-testid={ `customer_orders__element-order-date-${orderCode}` }
            >
              { landingZerosForDates(dateOrder) }
            </div>

            <div
              className="order-container--bg-gray--container-status--date-price--info"
              data-testid={ `customer_orders__element-card-price-${orderCode}` }
            >
              R$
              {' '}
              { priceTotal }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

OrderCardByCustomer.propTypes = {
  orderCode: PropTypes.number.isRequired,
  statusOrder: PropTypes.string.isRequired,
  dateOrder: PropTypes.string.isRequired,
  priceTotal: PropTypes.string.isRequired,
};

export default OrderCardByCustomer;
