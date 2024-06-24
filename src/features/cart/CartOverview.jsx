import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { getCart, getTotalCartPrice, getTotalCartQuantity } from './cartSlice';
import { formatCurrency } from '../../utils/helpers';

function CartOverview() {
  const totalCartQuantity = useSelector(getTotalCartQuantity);
  const totalCartPrice = useSelector(getTotalCartPrice);

  if (!totalCartQuantity) return null;
  return (
    <Wrapper>
      <Info>
        <span>{totalCartQuantity}</span>
        <span>{formatCurrency(totalCartPrice)}</span>
      </Info>
      <Link to='/cart'>go to cart</Link>
    </Wrapper>
  );
}

export default CartOverview;

const Wrapper = styled.div`
  background-color: #292524;
  color: #d6d3d1;
  padding-left: 1rem;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  padding: 1rem;
  justify-content: space-between;
`;

const Info = styled.p`
  display: flex;
  gap: 1rem;
`;
