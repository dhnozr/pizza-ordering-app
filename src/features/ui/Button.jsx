import React from 'react';
import styled from 'styled-components';

function Button({ children, disabled, as, to, type, secondary, onClick }) {
  return (
    <Btn disabled={disabled} as={as} to={to} type={type} secondary={secondary} onClick={onClick}>
      {children}
    </Btn>
  );
}

export default Button;

const Btn = styled.button`
  display: inline-block;
  border: none;
  background-color: ${props => (props.$secondary ? 'transparent' : '#facc15')};
  outline: ${props => (props.$secondary ? '1px solid #e7e5e4' : null)};
  text-transform: ${props => (props.type === 'small' ? null : 'uppercase')};
  color: #292524;
  padding: ${props => (props.type === 'small' ? '3px 12px' : '8px 22px')};
  font-weight: ${props => (props.type === 'small' ? '400' : null)};
  border-radius: 100px;
  transition: all 0.3s linear;
  text-decoration: none;
  font-size: 14px;
  font-weight: ${props => (props.$secondary ? '700' : null)};

  &:disabled {
    opacity: 0.5;
  }

  &:hover {
    background-color: ${props => (props.$secondary ? '#e5d586' : '#fde047')};
  }

  @media screen and (min-width: 660px) {
    font-size: 16px;
  }
`;
