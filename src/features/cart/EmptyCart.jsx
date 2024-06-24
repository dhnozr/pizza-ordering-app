import React from 'react';
import styled from 'styled-components';
import LinkButton from '../ui/LinkButton';

function EmptyCart() {
  return (
    <Wrapper>
      <LinkButton to={'/menu'}>&larr; Back to menu</LinkButton>
      <Title>Your cart is empty. Start adding some pizzas :)</Title>
    </Wrapper>
  );
}

export default EmptyCart;

const Title = styled.p`
  margin-top: 2rem;
`;

const Wrapper = styled.div`
  padding: 1rem;
`;
