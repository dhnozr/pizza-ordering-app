import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

function LinkButton({ children, to }) {
  return <LinkBtn to={to}>{children}</LinkBtn>;
}

export default LinkButton;

const LinkBtn = styled(Link)`
  font-size: 16px;
  color: #2563eb;
  text-decoration: none;
`;
