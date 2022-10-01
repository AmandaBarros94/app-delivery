import React, { useEffect, useState } from 'react';
import OrderCardByCustomer from '../components/cards/OrderCardByCustomer';
import getAllOrdersByClient from '../utils/api/requests/getAllOrdersByClient';
import getStorage from '../utils/handleStorage/getStorage';

const Orders = () => {
  const [allOrdersByClient, setAllOrdersByClient] = useState([]);

  useEffect(() => {
    const fetchOrdersByClient = async () => {
      const { id } = getStorage('user');
      const { data: orders } = await getAllOrdersByClient(id);
      console.log(orders);
      setAllOrdersByClient(orders);
    };

    fetchOrdersByClient();
  }, []);
  return (
    allOrdersByClient.length > 0 && allOrdersByClient.map((order) => (
      <OrderCardByCustomer
        key={ order.dataValues.id }
        orderCode={ order.dataValues.id }
        statusOrder={ order.dataValues.status }
        dateOrder={ order.dataValues.saleDate }
        priceTotal={ order.dataValues.totalPrice }
      />
    ))
  );
};

export default Orders;
