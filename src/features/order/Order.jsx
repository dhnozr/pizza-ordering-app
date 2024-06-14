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

// This loader function is used to fetch the details of an order based on the orderId parameter.
// The orderId parameter is extracted from the URL and passed to the getOrder function to fetch the order details.
export async function loader({ params }) {
  const order = await getOrder(params.orderId);
  return order;
}
