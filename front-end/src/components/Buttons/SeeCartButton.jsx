import React from 'react';
import PropTypes from 'prop-types';
import replaceDotToSemiColon from '../../utils/replaceDotToSemiColon';

function SeeCartButton({ total, onClick }) {
  return (
    <button
      data-testid="customer_products__button-cart"
      type="button"
      className="button--dark-green see-cart-button"
      disabled={ Number(total) === 0 }
      onClick={ onClick }
    >
      <span data-testid="customer_products__checkout-bottom-value">
        { replaceDotToSemiColon(Number(total)) }
      </span>
    </button>
  );
}

SeeCartButton.propTypes = {
  total: PropTypes.string,
  onClick: PropTypes.func,
}.isRequired;

export default SeeCartButton;
