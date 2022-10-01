import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import PrimaryButton from './Buttons/PrimaryButton';
import {
  InputAddress,
  InputAddressNumber,
  InputResponsibleSeller,
} from './Inputs';
import getAllCommonUsers from '../utils/api/requests/getAllCommonUsers';
import OrderContext from '../context/order/OrderContext';
import getStorage from '../utils/handleStorage/getStorage';
import createNewSale from '../utils/api/requests/createNewSale';

function FinalizeOrderDetails() {
  const { cart, total } = useContext(OrderContext);
  const [sellerName, setSellerName] = useState(''); // *** Attention point ***
  const [deliveryAddress, setDeliveryAddress] = useState('');
  const [deliveryNumber, setDeliveryNumber] = useState('');
  const [sellers, setSellers] = useState([]);

  useEffect(() => {
    const getAllSellers = async () => {
      const { data } = await getAllCommonUsers();
      setSellers(data.filter((user) => user.role === 'seller'));
    };

    getAllSellers();
  }, []);

  const navigate = useNavigate();

  const finalizeOrder = async () => {
    const { data: sale } = await createNewSale(
      {
        userName: getStorage('user').name,
        sellerName,
        deliveryAddress,
        deliveryNumber,
        totalPrice: total,
        arrayOfProducts: cart.map((product) => (
          { id: product.productId,
            quantity: product.quantity,
          })),
      },
    );

    navigate(`../orders/${sale.id}`);
  };

  return (
    <div>
      <div className="address-span">Detalhes e Endereço para Entrega</div>

      <div className="address-container">
        <div className="address-input-container">

          {
            sellers.length && (
              <InputResponsibleSeller
                sellers={ sellers.map((seller) => seller.name) }
                setSellerName={ setSellerName }
                sellerName={ sellerName }
              />)
          }

          <InputAddress
            addressChange={ ({ target: { value } }) => setDeliveryAddress(value) }
          />

          <InputAddressNumber
            numberChange={ ({ target: { value } }) => setDeliveryNumber(value) }
          />
        </div>

        <div className="finalize-order-container">
          <PrimaryButton
            isSubmit
            text="FINALIZAR PEDIDO"
            onClick={ finalizeOrder }
            dataId="customer_checkout__button-finish-order"
          />
        </div>
      </div>
    </div>
  );
}

export default FinalizeOrderDetails;
