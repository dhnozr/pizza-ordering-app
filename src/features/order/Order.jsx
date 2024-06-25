import React, { useEffect } from 'react';
import { getOrder } from '../../services/apiRestaurant';
import { useFetcher, useLoaderData } from 'react-router-dom';
import styled from 'styled-components';
import { calcMinutesLeft, formatCurrency, formatDate } from '../../utils/helpers';
import OrderItem from './OrderItem';
import UpdateOrder from './UpdateOrder';

// This component fetches and displays the details of a specific order.
function Order() {
  // It uses the useLoaderData hook to retrieve the order data loaded by the loader function.
  const order = useLoaderData();

  const fetcher = useFetcher();
  useEffect(() => {
    if (!fetcher.data && fetcher.state === 'idle') fetcher.load('/menu');
  }, [fetcher]);

  const { cart, customer, id, orderPrice, priority, priorityPrice, status, estimatedDelivery } = order;

  const deliveryIn = calcMinutesLeft(estimatedDelivery);
  console.log(order);
  return (
    <Wrapper>
      <OrderStatus>
        <h2>Order# {id} status</h2>
        <div>
          {priority && <Priority>Priority</Priority>} <DeliveredOrderStatus>{status} order</DeliveredOrderStatus>
        </div>
      </OrderStatus>

      <DeliveryStatus>
        <p>
          {deliveryIn >= 0 ? `Only ${calcMinutesLeft(estimatedDelivery)} minutes left 😀` : 'Order should have arrived'}
        </p>
        <p>Estimated Delivery: {formatDate(estimatedDelivery)}</p>
      </DeliveryStatus>

      <OrderedList>
        {cart.map(item => (
          <OrderItem
            item={item}
            key={item.pizzaId}
            ingredients={fetcher.data?.find(el => el.id === item.pizzaId).ingredients}
            isLoadingIngredients={fetcher.state === 'loading'}
          />
        ))}
      </OrderedList>

      <TotalPriceWrapper>
        <p>Price pizza: {formatCurrency(orderPrice)}</p>
        {priority && <p>Price Priority{formatCurrency(priorityPrice)}</p>}
        <PayOnDelivery>To pay on delivery: {formatCurrency(orderPrice + priorityPrice)}</PayOnDelivery>
      </TotalPriceWrapper>

      {!priority && <UpdateOrder order={order} />}
    </Wrapper>
  );
}

export default Order;

// This loader function is used to fetch the details of an order based on the orderId parameter.
// The orderId parameter is extracted from the URL and passed to the getOrder function to fetch the order details.
export async function loader({ params }) {
  const order = await getOrder(params.orderId);
  return order;
}

const Wrapper = styled.div`
  padding: 2rem 1rem;
`;

const OrderStatus = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-bottom: 1rem;
`;

const Priority = styled.span`
  font-size: 12px;
  padding: 4px 16px;
  border-radius: 100px;
  text-transform: uppercase;
  color: #fef2f2;
  background-color: #ef4444;
`;

const DeliveredOrderStatus = styled(Priority)`
  background-color: #22c55e;
`;

const DeliveryStatus = styled.div`
  background-color: #fef2f2;
  padding: 1rem;
  border-radius: 10px;
  margin-bottom: 1rem;
`;

const OrderedList = styled.ul`
  padding: 1rem;
`;

const TotalPriceWrapper = styled(DeliveryStatus)`
  background-color: #f8d3d3;
`;

const PayOnDelivery = styled.p`
  font-weight: 600;
`;
