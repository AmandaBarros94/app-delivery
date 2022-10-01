import React from 'react';
import FinalizeOrderTable from '../components/table/FinalizeOrderTable';
import FinalizeOrderDetails from '../components/FinalizeOrderDetails';

function Checkout() {
  return (
    <div>
      <FinalizeOrderTable />

      <FinalizeOrderDetails />
    </div>
  );
}

export default Checkout;
