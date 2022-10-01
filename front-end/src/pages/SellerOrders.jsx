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
      setAllOrdersBySeller(orders);
    };

    fetchOrdersBySeller();
  }, []);

  return (
    allOrdersBySeller.map((order) => (
      <OrderCardBySeller
        key={ order.id }
        orderCode={ order.id }
        statusOrder={ order.status }
        dateOrder={ order.saleDate }
        priceTotal={ order.totalPrice }
        address={ order.address }
      />
    ))
  );
};

export default SellerOrders;
