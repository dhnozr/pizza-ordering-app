import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

function CartOverview() {
  return (
    <Wrapper>
      <Info>
        <span>23piza</span>
        <span>$23.45</span>
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
