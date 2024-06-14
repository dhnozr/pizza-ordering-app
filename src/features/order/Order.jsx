import React from 'react';
import { getOrder } from '../../services/apiRestaurant';
import { useLoaderData } from 'react-router-dom';

// This component fetches and displays the details of a specific order.
function Order() {
  // It uses the useLoaderData hook to retrieve the order data loaded by the loader function.
  const order = useLoaderData();
  console.log(order);
  return (
    <div>
      <div>
        <h2>Status</h2>
      </div>
    </div>
  );
}

export default Order;

export async function loader({ params }) {
  // react loader can get accees params object and use it here to fetch ordered id
  // params.orderId is coming from the app whic we specefice "/order/:orderID" name can be diffrent then also here name would have changed
  const order = await getOrder(params.orderId);
  return order;
}
