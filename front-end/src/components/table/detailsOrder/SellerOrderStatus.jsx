import React from 'react';
import PropTypes from 'prop-types';
import capitalizeFirstLetter from '../../../utils/capitalizeFirstLetter';

function SellerOrderStatus({ status }) {
  const styleDivStatus = {
    Pendente: 'status-pendente',
    Preparando: 'status-preparando',
    'Em Trânsito': 'status-em transito',
    Entregue: 'status-entregue',
  };

  return (
    <div
      className={ styleDivStatus[status] }
    >
      { capitalizeFirstLetter(status) }
    </div>
  );
}

SellerOrderStatus.propTypes = {
  status: PropTypes.string.isRequired,
};

export default SellerOrderStatus;
