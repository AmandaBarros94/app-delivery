import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import OrderDetailsTable from '../components/table/detailsOrder/OrderDetailsTable';
import getOrderById from '../utils/api/requests/getOrderById';

function CustomerOrderById() {
  const [order, setOrder] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const getSaleById = async () => {
      const { data: sale } = await getOrderById(id);
      setOrder(sale);
    };

    getSaleById();
  }, []);

  return (
    <div>
      {order.id && <OrderDetailsTable order={ order } />}
    </div>
  );
}

export default CustomerOrderById;
