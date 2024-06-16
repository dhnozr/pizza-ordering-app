import React from 'react';
import { formatCurrency } from '../../utils/helpers';
import styled from 'styled-components';
import Button from '../ui/Button';

function MenuItem({ pizza }) {
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;
  return (
    <ListItem soldOut={soldOut}>
      <Image src={imageUrl} alt='' />
      <BottomInfo>
        <Name>{name}</Name>
        <Ingredients>{ingredients.join(', ')}</Ingredients>
        <Price soldOut={soldOut}>
          {!soldOut ? <p>{formatCurrency(unitPrice)}</p> : <p>Sold out</p>}
          <Button type='small'>Add to cart</Button>
        </Price>
      </BottomInfo>
    </ListItem>
  );
}

export default MenuItem;

const ListItem = styled.li`
  display: flex;
  gap: 1rem;
  border-bottom: 1px solid #e7e5e4;
  padding-bottom: 8px;

  opacity: ${props => (props.soldOut ? '0.6' : null)};
  filter: ${props => (props.soldOut ? 'grayscale(1)' : null)};
`;

const Image = styled.img`
  width: 150px;
`;

const BottomInfo = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const Name = styled.h3`
  font-weight: 600;
`;

const Ingredients = styled.p`
  font-size: 14px;
  font-style: italic;
  color: #78716c;
`;

const Price = styled.div`
  margin-top: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;

  p {
    font-size: 14px;
    text-transform: uppercase;
    font-weight: ${props => (props.soldOut ? '700' : '400')};
  }
`;
