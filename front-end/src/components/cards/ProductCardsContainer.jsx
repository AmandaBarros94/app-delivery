import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import SeeCartButton from '../Buttons/SeeCartButton';
import ProductCard from './ProductCard';
import OrderContext from '../../context/order/OrderContext';

function ProductCardsContainer({ products }) {
  const navigate = useNavigate();
  const { total } = useContext(OrderContext);

  return (
    <div className="card-container">
      {products.map((product) => (
        <ProductCard
          key={ product.id }
          id={ product.id }
          description={ product.name }
          price={ product.price }
          img={ product.urlImage }
        />
      ))}

      <div className="see-cart-button-container">
        <SeeCartButton
          dataId="customer_products__button-cart"
          total={ total }
          onClick={ () => navigate('../checkout', { replace: true }) }
        />
      </div>
    </div>
  );
}

ProductCardsContainer.propTypes = {
  products: PropTypes.array,
}.isRequired;

export default ProductCardsContainer;
