import React from 'react';
import styled from 'styled-components';
import LinkButton from '../ui/LinkButton';
import Button from '../ui/Button';
import { Link } from 'react-router-dom';
import CartItem from './CartItem';
import { useSelector } from 'react-redux';
import { getUsername } from '../user/userSlice';

// Temporary fake cart data for demonstration purposes
const fakeCart = [
  {
    pizzaId: 12,
    name: 'Mediterranean',
    quantity: 2,
    unitPrice: 16,
    totalPrice: 32,
  },
  {
    pizzaId: 6,
    name: 'Vegetale',
    quantity: 1,
    unitPrice: 13,
    totalPrice: 13,
  },
  {
    pizzaId: 11,
    name: 'Spinach and Mushroom',
    quantity: 1,
    unitPrice: 15,
    totalPrice: 15,
  },
];

function Cart() {
  const cart = fakeCart;
  const username = useSelector(getUsername);
  return (
    <Wrapper>
      <LinkButton to='/menu'>&larr; Back to menu</LinkButton>
      <h2>Your cart, {username}</h2>

      <CartList>
        {cart.map(item => (
          <CartItem key={item.pizzaId} item={item} />
        ))}
      </CartList>
      <Bottom>
        <Button as={Link} to='/order/new'>
          Order Pizzas
        </Button>
        <Button secondary={true}>Clear Cart</Button>
      </Bottom>
    </Wrapper>
  );
}

export default Cart;

const Wrapper = styled.div`
  padding: 1rem;

  h2 {
    margin-top: 3rem;
    margin-bottom: 1rem;
  }
`;

const CartList = styled.ul`
  display: grid;
  gap: 8px;
`;

const Bottom = styled.div`
  margin-top: 2rem;
  display: flex;
  gap: 8px;
`;
