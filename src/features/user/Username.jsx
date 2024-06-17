import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { getUsername } from './userSlice';

function Username() {
  const username = useSelector(getUsername);

  if (!username) return null;
  return <UserName>{username}</UserName>;
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
