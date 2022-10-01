import React from 'react';
import PropTypes from 'prop-types';

function AddressInput({ addressValue, addressChange }) {
  return (
    <label htmlFor="address">

      <span className="address-text-label">Endereço</span>

      <input
        id="address"
        type="text"
        placeholder="Rua/Avenida e Bairro"
        onChange={ addressChange }
        value={ addressValue }
        data-testid="customer_checkout__input-address"
      />

    </label>
  );
}

AddressInput.propTypes = {
  addressValue: PropTypes.string,
  addressChange: PropTypes.func,
}.isRequired;

export default AddressInput;
