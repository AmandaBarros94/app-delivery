import React, { useState, useEffect } from 'react';
import requestOrders from '../utils/api/requests/requestOrders';
import Order from '../components/order/Order';

function SellerOrders() {
  const [ordersOfSeller, setOrdersOfSeller] = useState([]);
  const { saleInfo } = 1; // aqui teria que ter o estadp global buscando pra nós as informações da venda, ( pode ser passado via local storage também mas teria que mexer no login)

  useEffect(() => {
    const getAllOrders = async () => {
      await requestOrders(`/sale/${saleInfo.id}`).then( // Aqui deve ser passado o id do vendedor que vem do estado global ou do local storage.
        (response) => setOrdersOfSeller(response),
      );
    };
    getAllOrders();
  }, []);

  return (
    <div>
      {/* adicionar o header */}
      <section className="sales-order--container">
        {
          ordersOfSeller.map((item, index) => (
            <Order
              key={ index }
              id={ item.id }
              status={ item.status }
              date={ item.saleDate }
              value={ item.totalPrice }
              address={ item.deliveryAddress }
              addressNumber={ item.deliveryNumber }
              dataTestId="seller_orders__element-"
              userRole="seller" // o Role passado aqui é dinamico para aparecer ou não o endereço do cliente no card ( vendedor = true, cliente = false)
            />
          ))
        }
      </section>
      <button type="button"> test </button>
    </div>
  );
}

export default SellerOrders;
