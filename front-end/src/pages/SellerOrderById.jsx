import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import OrderDetailsTable from '../components/table/detailsOrder/OrderDetailsTable';
import getOrderById from '../utils/api/requests/getOrderById';

function SellerOrderById() {
  const [orderObject, getorderObject] = useState({});

  const { id } = useParams();

  useEffect(() => {
    const getSaleById = async () => {
      const { data: sale } = await getOrderById(id);
      console.log(sale);
      getorderObject(sale);
    };

    getSaleById();
  }, [id]);

  return (
    <div>
      {
        (orderObject.id)
        && <OrderDetailsTable order={ orderObject } />
      }
    </div>
  );
}

export default SellerOrderById;
