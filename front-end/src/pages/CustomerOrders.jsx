import React, { useEffect, useState } from 'react';
import Order from '../components/order/Order';
import requestOrdersByCustomer from '../utils/api/requests/requestOrdersByCustomer';

function CustomerOrders() {
  const [orders, setOrders] = useState([]);
  const user = JSON.parse(localStorage.getItem('user'));

  useEffect(() => {
    requestOrdersByCustomer(`/customer/orders/user/${user.id}`)
      .then((response) => response)
      .then((result) => setOrders(result));
  }, [user.id]);

  return (
    <div>
      { orders.length && orders.map((item, index) => (
        <Order
          key={ index }
          id={ item.id }
          status={ item.status }
          date={ item.saleDate }
          value={ item.totalPrice }
          adress={ item.deliveryAdress }
          dataTestId="customer_orders__element-"
          userRole="customer"
        />
      ))}
    </div>
  );
}

export default CustomerOrders;
