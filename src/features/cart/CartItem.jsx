import React from 'react';
import styled from 'styled-components';
import { formatCurrency } from '../../utils/helpers';
import Button from '../ui/Button';
import DeleteItem from './DeleteItem';
import UpdateItemQuantity from './UpdateItemQuantity';
import { useSelector } from 'react-redux';
import { getQuantityById } from './cartSlice';

export default function CartItem({ item }) {
  const { pizzaId, name, quantity, unitPrice } = item;
  const totalPrice = quantity * unitPrice;
  const currentQuantity = useSelector(getQuantityById(pizzaId));
  return (
    <Wrappper>
      <p>
        {quantity}&times; {name}
      </p>
      <PriceInfo>
        <p>{formatCurrency(totalPrice)}</p>
        <UpdateItemQuantity pizzaId={pizzaId} currentQuantity={currentQuantity} />
        <DeleteItem pizzaId={pizzaId} />
      </PriceInfo>
    </Wrappper>
  );
}

const Wrappper = styled.li`
  list-style: none;

  padding-bottom: 8px;
  border-bottom: 1px solid #e7e5e4;

  @media screen and (min-width: 660px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

const PriceInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  justify-content: space-between;
`;
