import React from 'react';
import PropTypes from 'prop-types';

function AddressNumberInput({ numberValue, numberChange }) {
  return (
    <label htmlFor="number">

      <span className="number-text-label">Número</span>

      <input
        id="number"
        type="text"
        placeholder="Número da Casa/AP"
        onChange={ numberChange }
        value={ numberValue }
        data-testid="customer_checkout__input-address-number"
      />

    </label>
  );
}

AddressNumberInput.propTypes = {
  numberValue: PropTypes.string,
  numberChange: PropTypes.func,
}.isRequired;

export default AddressNumberInput;
