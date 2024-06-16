import React from 'react';
import styled from 'styled-components';

function Username() {
  return <UserName>duhan</UserName>;
}

export default Username;

const UserName = styled.h3`
  font-size: 13px;
  font-weight: 600;
  display: none;

  @media screen and (min-width: 660px) {
    display: block;
  }
`;
