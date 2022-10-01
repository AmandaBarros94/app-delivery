import React, { useEffect, useState } from 'react';
import OrderCardBySeller from '../components/cards/OrderCardBySeller';
import getAllOrdersBySeller from '../utils/api/requests/getAllOrdersBySeller';
import getStorage from '../utils/handleStorage/getStorage';

const SellerOrders = () => {
  const [allOrdersBySeller, setAllOrdersBySeller] = useState([]);

  useEffect(() => {
    const fetchOrdersBySeller = async () => {
      const { id } = await getStorage('user');
      const { data: orders } = await getAllOrdersBySeller(id);
      console.log(orders);
      setAllOrdersBySeller(orders);
    };

    fetchOrdersBySeller();
  }, []);

  return (
    allOrdersBySeller.map((order) => (
      <OrderCardBySeller
        key={ order.dataValues.id }
        orderCode={ order.dataValues.id }
        statusOrder={ order.dataValues.status }
        dateOrder={ order.dataValues.saleDate }
        priceTotal={ order.dataValues.totalPrice }
        address={ order.dataValues.address }
      />
    ))
  );
};

export default SellerOrders;
