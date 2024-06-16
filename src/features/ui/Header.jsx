import React from 'react';
import { Link } from 'react-router-dom';
import SearchOrder from '../order/SearchOrder';
import styled from 'styled-components';
import Username from '../user/Username';

function Header() {
  return (
    <Wrapper>
      <LinktoHome to='/'>React Pizza</LinktoHome>
      <SearchOrder />
      <Username />
    </Wrapper>
  );
}

export default Header;

const Wrapper = styled.div`
  background-color: #ffb703;
  text-transform: uppercase;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const LinktoHome = styled(Link)`
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: 700;
  text-decoration: none;
`;
