import React, { useState, useContext } from 'react';
import propTypes from 'prop-types';
import savLocalStorage from '../utils/saveLocalStorage';
import AppContext from '../context/AppContext';

function ProductCard({ id, name, price, image }) {
  const [quantityHelper, setQuantityHelper] = useState(0);
  const { order, setOrder } = useContext(AppContext);

  return (
    <main>
      <div>
        <div>
          <span
            data-testid={ `customer_products__element-card-price-${id}` }
          >
            { price.replace('.', ',') }
          </span>
          <img
            src={ image }
            alt={ `${name}` }
            data-testid={ `customer_products__img-card-bg-image-${id}` }
          />
          <span
            data-testid={ `customer_products__element-card-title-${id}` }
          >
            { name }
          </span>
        </div>
        <div>
          <button
            type="button"
            data-testid={ `customer_products__button-card-rm-item-${id}` }
            onClick={ () => {
              const findOrder = order.find((element) => element.productId === id);
              if (findOrder && findOrder.quantity >= 1) {
                const indexOfThatOrder = order.indexOf(findOrder);
                const newOrder = [...order];
                const counter = Number(order[indexOfThatOrder].quantity) - 1;
                newOrder[indexOfThatOrder].quantity = counter;
                setOrder(newOrder);
                savLocalStorage('order', newOrder);
                setQuantityHelper(counter);
              }
            } }
          >
            -
          </button>
          <input
            type="number"
            data-testid={ `customer_products__input-card-quantity-${id}` }
            value={ quantityHelper }
            onChange={ ({ target: { value } }) => {
              const orderToAdd = { productId: id, quantity: value, price };
              const findOrder = order
                .find((element) => element.productId === orderToAdd.productId);
              if (!findOrder) {
                setOrder([...order, orderToAdd]);
                savLocalStorage('order', [...order, orderToAdd]);
              } else {
                const indexOfThatOrder = order.indexOf(findOrder);
                const newOrder = [...order];
                newOrder[indexOfThatOrder] = orderToAdd;
                setOrder(newOrder);
                savLocalStorage('order', newOrder);
              }
              setQuantityHelper(value);
            } }
          />
          <button
            data-testid={ `customer_products__button-card-add-item-${id}` }
            type="button"
            onClick={ () => {
              const findOrder = order.find((element) => element.productId === id);
              if (!findOrder) {
                setOrder([...order, { productId: id, quantity: 1, price }]);
                savLocalStorage(
                  'order',
                  [...order, { productId: id, quantity: 1, price }],
                );
                setQuantityHelper(1);
              } else {
                const indexOfThatOrder = order.indexOf(findOrder);
                const newOrder = [...order];
                const counter = Number(order[indexOfThatOrder].quantity) + 1;
                newOrder[indexOfThatOrder].quantity = counter;
                setOrder(newOrder);
                savLocalStorage('order', newOrder);
                setQuantityHelper(counter);
              }
            } }
          >
            +
          </button>
        </div>
      </div>
    </main>
  );
}

ProductCard.propTypes = {
  id: propTypes.number,
  name: propTypes.string,
  price: propTypes.number,
  image: propTypes.string,
}.isRequired;

export default ProductCard;
