import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

function ResponsibleSellerInput({ sellers, setSellerName, sellerName }) {
  const handleChange = ({ target: { value } }) => {
    setSellerName(value);
  };

  useEffect(() => {
    if (!sellerName) setSellerName(sellers[0]);
  }, [sellerName, sellers, setSellerName]);

  return (
    <label htmlFor="seller">

      <span className="seller-text-label">P. Vendedora Responsável:</span>

      <select
        id="seller"
        name="seller-label"
        onChange={ handleChange }
        data-testid="customer_checkout__select-seller"
      >
        {
          sellers.map((item, i) => (
            <option key={ i } value={ sellerName }>
              { item }
            </option>
          ))
        }

      </select>
    </label>
  );
}

ResponsibleSellerInput.propTypes = {
  seller: PropTypes.string,
  sellerName: PropTypes.string,
  setSellerName: PropTypes.func,
}.isRequired;

export default ResponsibleSellerInput;
