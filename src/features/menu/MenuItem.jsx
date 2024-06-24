import React from 'react';
import { formatCurrency } from '../../utils/helpers';
import styled from 'styled-components';
import Button from '../ui/Button';
import { useDispatch, useSelector } from 'react-redux';
import { addItem, getQuantityById } from '../cart/cartSlice';
import DeleteItem from '../cart/DeleteItem';
import UpdateItemQuantity from '../cart/UpdateItemQuantity';

function MenuItem({ pizza }) {
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;
  const currentQuantity = useSelector(getQuantityById(id));
  const isInCart = currentQuantity > 0;

  const dispatch = useDispatch();

  function handleAddToCart() {
    const newPizza = {
      pizzaId: id,
      name,
      unitPrice,
      quantity: 1,
    };

    dispatch(addItem(newPizza));
  }
  return (
    <ListItem $soldOut={soldOut}>
      <Image src={imageUrl} alt='' />
      <BottomInfo>
        <Name>{name}</Name>
        <Ingredients>{ingredients.join(', ')}</Ingredients>
        <Price>
          {!soldOut ? <p>{formatCurrency(unitPrice)}</p> : <p>Sold out</p>}
          {isInCart && (
            <UpdateItem>
              <UpdateItemQuantity pizzaId={id} currentQuantity={currentQuantity} />
              <DeleteItem pizzaId={id} />
            </UpdateItem>
          )}
          {!soldOut && !isInCart && (
            <Button onClick={handleAddToCart} type='small'>
              Add to cart
            </Button>
          )}
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

  opacity: ${props => (props.$soldOut ? '0.6' : null)};
  filter: ${props => (props.$soldOut ? 'grayscale(1)' : null)};
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

const UpdateItem = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;
