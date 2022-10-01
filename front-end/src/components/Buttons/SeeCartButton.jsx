import React from 'react';
import PropTypes from 'prop-types';
import './Buttons.scss';
import replaceDotToSemiColon from '../../utils/replace/replaceDotToSemiColon';

const SeeCartButton = ({ total, onClick, dataId }) => (

  <button
    type="button"
    className="button--dark-green see-cart-button"
    disabled={ Number(total) === 0 }
    onClick={ onClick }
    data-testId={ dataId }
  >
    <span data-testId="customer_products__checkout-bottom-value">
      { replaceDotToSemiColon(Number(total)) }
    </span>
  </button>
);

SeeCartButton.propTypes = {
  total: PropTypes.string,
  onClick: PropTypes.func,
}.isRequired;

export default SeeCartButton;
