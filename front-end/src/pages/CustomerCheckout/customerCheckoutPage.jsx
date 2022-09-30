import React, { useEffect, useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import Navbar from '../../components/NavBar';
import AppContext from '../../context/AppContext';
import CreateTable from '../../components/CustomerCheckOutTable';
import { getUserSallers, salesRequest } from '../../Services/request';
// import calculateAmount from '../../utils/calculateAmount';

const testId23 = 'customer_checkout__element-order-table-name-';
const testId28 = 'customer_checkout__element-order-total-price';
const testId29 = 'customer_checkout__select-seller';
const testId30 = 'customer_checkout__input-address';
const testId31 = 'customer_checkout__input-address-number';
const testId32 = 'customer_checkout__button-submit-order';

export default function CheckOutPage() {
  const [amount] = useState('0.00');
  const [deliveryAddress, setDeliveryAddress] = useState('');
  const [userSallers, setUserSallers] = useState([]);
  const [sellerId, setSellerId] = useState('');
  const [deliveryNumber, setDeliveryNumber] = useState('');
  const [user, setUser] = useState();

  const { order, setOrder } = useContext(AppContext);
  const navigate = useHistory();

  const handleOnload = async () => {
    const orderFromLocalStorage = JSON.parse(localStorage.getItem('order'));
    const userFromLocalStorage = JSON.parse(localStorage.getItem('user'));
    setOrder(orderFromLocalStorage);
    setUser(userFromLocalStorage);

    const fetchUserSallers = async () => {
      const response = await getUserSallers();
      setUserSallers(response);
    };
    fetchUserSallers();
  };

  useEffect(() => {
    handleOnload();
  });

  // useEffect(() => {
  //   const totalPrice = calculateAmount(order);
  //   const adjustValue = totalPrice.toFixed(2);
  //   setAmount(adjustValue);
  // }, [order]);

  function handleChange({ target }) {
    switch (target.id) {
    case 'sellerOptions':
      setSellerId(Number(target.value));
      break;
    case 'deliveryAddress':
      setDeliveryAddress(target.value);
      break;
    case 'deliveryNumberAddress':
      setDeliveryNumber(target.value);
      break;
    default:
      break;
    }
  }

  async function finishedOrder() {
    const userId = user.id;
    const amountInt = Number(amount);
    const orderInfo = {
      deliveryAddress,
      sellerId,
      totalPrice: amountInt,
      deliveryNumber,
      userId,
      order,
    };
    const response = await salesRequest(orderInfo, user.token);
    navigate.push(`/customer/orders/${response.id}`);
  }

  return (
    <div>
      <Navbar />
      <p> Finalizar Pedido </p>
      <table>
        <thead>
          <tr>
            <th>Item</th>
            <th>Descrição</th>
            <th>Quantidade</th>
            <th>Valor Unitário</th>
            <th>Sub-Total</th>
            <th>Remover Item</th>
          </tr>
        </thead>
        <tbody>
          { order
          && order
            .map((item, index) => (<CreateTable
              data-testid={ `${testId23}${index}` }
              info={ item }
              index={ index }
              key={ item.name }
            />
            ))}
        </tbody>
      </table>
      <p data-testid={ `${testId28}` }>
        {`Total: R$ ${amount.replace('.', ',')}`}
      </p>
      <p>Detalhes e Endereço para entrega</p>
      <div>
        <p>P. Vendedora Responsável</p>
        <select
          name="seller"
          id="sellerOptions"
          data-testid={ `${testId29}` }
          onChange={ handleChange }
        >
          <option defaultChecked>Selecionar</option>
          { userSallers && userSallers.map(({ name, id }) => (
            <option
              key={ id }
              value={ id }
            >
              {name}
            </option>
          ))}
        </select>
      </div>
      <div>
        <p>Endereço</p>
        <input
          type="text"
          data-testid={ `${testId30}` }
          id="deliveryAddress"
          onChange={ handleChange }
        />
      </div>
      <div>
        <p>Número</p>
        <input
          type="number"
          data-testid={ `${testId31}` }
          id="deliveryNumberAddress"
          onChange={ handleChange }
        />
      </div>
      <button
        type="button"
        data-testid={ `${testId32}` }
        onClick={ finishedOrder }
      >
        Finalizar Pedido
      </button>
    </div>
  );
}
