import React from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { decreaseItemQuantity, increaseItemQuantity } from './cartSlice';

function UpdateItemQuantity({ pizzaId, currentQuantity }) {
  const dispatch = useDispatch();

  return (
    <>
      <Wrapper>
        <Button onClick={() => dispatch(decreaseItemQuantity(pizzaId))}>-</Button>
        <span>{currentQuantity}</span>
        <Button onClick={() => dispatch(increaseItemQuantity(pizzaId))}>+</Button>
      </Wrapper>
    </>
  );
}

export default UpdateItemQuantity;

const Button = styled.button`
  display: inline-block;
  background-color: #facc15;
  border: none;
  border-radius: 100px;
  padding: 2px 10px;
`;

const Wrapper = styled.div`
  display: flex;
  gap: 8px;
`;
