import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import dateFormat from '../../utils/dateFormat';
import changeString from '../../utils/changeString';
import './Order.css';

function Order({
  id,
  status,
  date,
  value,
  address,
  userRole,
  dataTestId,
  addressNumber,
}) {
  const Navigate = useNavigate();

  let isVisible;

  if (userRole === 'customer') {
    isVisible = false;
  }

  const newDate = dateFormat(date);
  const price = changeString(value);

  return (
    <div data-testid="git pull">
      <section>
        <button
          data-testid={ `${dataTestId}order-id-${id}` }
          type="button"
          onClick={ () => Navigate(`/${userRole}/orders/${id}`) }
        >
          <h1 data-testid={ `${dataTestId}order-id-${id}` }>
            Pedido:
            <strong data-testid={ `${dataTestId}order-id-${id}` }>
              000
              {id}
            </strong>
          </h1>
        </button>
      </section>
      <section>
        <h2 data-testid={ `${dataTestId}delivery-status-${id}` }>
          {status}
        </h2>
        <div>
          <article data-testid={ `${dataTestId}order-date-${id}` }>
            {newDate}
          </article>
          <article data-testid={ `${dataTestId}card-price-${id}` }>
            {price}
          </article>
        </div>
      </section>
      <h3
        className={ `isVisible${isVisible}` }
        data-testid={ `${dataTestId}card-address-${id}` }
      >
        {`${address} ${addressNumber}`}
      </h3>
    </div>
  );
}

Order.propTypes = {
  address: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  status: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  userRole: PropTypes.string.isRequired,
  dataTestId: PropTypes.string.isRequired,
  addressNumber: PropTypes.string.isRequired,
};

export default Order;
