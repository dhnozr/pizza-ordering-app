import React from 'react';
import { formatCurrency } from '../../utils/helpers';
import styled from 'styled-components';

function OrderItem({ item, ingredients, isLoadingIngredients }) {
  const { quantity, name, totalPrice } = item;
  return (
    <ListItem>
      <Wrapper>
        <p>
          <span>
            {quantity}&times; <Name>{name}</Name>
          </span>
        </p>
        <p>{formatCurrency(totalPrice)}</p>
      </Wrapper>
      <Ingredients>{isLoadingIngredients ? 'Loading' : ingredients?.join(', ')}</Ingredients>
    </ListItem>
  );
}

export default OrderItem;

const ListItem = styled.li`
  list-style: none;
  border-bottom: 1px solid #ccc;
  padding-bottom: 8px;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 10px;
`;

const Name = styled.span`
  font-weight: 600;
`;

const Ingredients = styled.p`
  font-style: italic;
  color: #78716c;
`;
