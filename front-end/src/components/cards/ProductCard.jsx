import React, { useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import replaceDotToSemiColon from '../../utils/replace/replaceDotToSemiColon';

import QuantityInput from '../Inputs/Quantity/QuantityInput';
import stringToNumber from '../../utils/stringToNumber';
import OrderContext from '../../context/order/OrderContext';

const dataTestId = 'customer_products__element-card-price-';
const dataTestIdImg = 'customer_products__img-card-bg-image-';
const dataTestIdDescription = 'customer_products__element-card-title-';
const imagesPath = 'http://localhost:3001/images/';

const ProductCard = ({ id, description, price, img }) => {
  const { cart, setCart } = useContext(OrderContext);
  const [productId] = useState(id);
  const [productDescription] = useState(description);
  const [productPrice] = useState(stringToNumber(price));

  const [quantity, setQuantity] = useState(0);
  const [subTotal, setSubTotal] = useState(0.00);

  useEffect(() => {
    setSubTotal(productPrice * quantity);
  }, [productPrice, quantity]);

  useEffect(() => {
    const updatedProduct = {
      productId,
      productDescription,
      productPrice,
      quantity,
      subTotal,
    };

    const filteredCart = cart.filter((product) => product.productId !== productId);

    if (quantity === 0) return setCart(filteredCart);

    setCart([...filteredCart, updatedProduct]);
  }, [subTotal]); // ** only "subtotal" dependency ** **

  return (
    <div
      data-testid={ dataTestId + productId }
      key={ productId }
      className="card-div"
    >

      <span data-testid={ dataTestId + productId }>
        { `${replaceDotToSemiColon(productPrice)}` }
      </span>

      <img
        data-testid={ dataTestIdImg + productId }
        src={ imagesPath + img }
        alt={ productDescription }
      />

      <div className="card-info">
        <div
          data-testid={ dataTestIdDescription + productId }
          className="card-name"
        >
          { productDescription }
        </div>

        <div className="card-input">
          <QuantityInput id={ productId } setCardQuantity={ setQuantity } />
        </div>
      </div>
    </div>
  );
};

ProductCard.propTypes = {
  id: PropTypes.string,
  description: PropTypes.string,
  price: PropTypes.number,
  img: PropTypes.string,
  setTotal: PropTypes.func,
}.isRequired;

export default ProductCard;
