import React from 'react';
import PropTypes from 'prop-types';
import SellerOrderStatus from './SellerOrderStatus';
import updateOrderStatusById from '../../../utils/api/requests/updateOrderStatusById';
import landingZerosForDates from '../../../utils/landingZerosForDates';

function OrderStatus({ orderId, sellerName, saleDate, status }) {
  const arrWithoutInTransit = ['Pendente', 'Preparando', 'Entregue'];

  const handleCLick = async ({ target: { value } }) => {
    await updateOrderStatusById(value, orderId);
  };

  return (
    <div>
      <span data-testid="customer_order_details__element-order-details-label-order-id">
        {`PEDIDO: ${orderId}`}
      </span>

      <span data-testid="customer_order_details__element-order-details-label-seller-name">
        P.Vend:
        {sellerName}
      </span>

      <span data-testid="customer_order_details__element-order-details-label-order-date">
        {landingZerosForDates(saleDate)}
      </span>

      <span
        data-testid="customer_order_details__element-order-details-label-delivery-status"
      >
        <SellerOrderStatus status={ status } />
      </span>
      <button
        data-testid="customer_order_details__button-delivery-check"
        disabled={ arrWithoutInTransit.includes(status) }
        onClick={ (value) => handleCLick(value) }
        value="Entregue"
        type="button"
      >
        MARCAR COMO ENTREGUE
      </button>
    </div>
  );
}

OrderStatus.propTypes = {
  orderId: PropTypes.string.isRequired,
  sellerName: PropTypes.string.isRequired,
  saleDate: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
};

export default OrderStatus;
