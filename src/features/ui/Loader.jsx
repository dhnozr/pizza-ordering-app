import React from 'react';
import styled, { keyframes } from 'styled-components';

function Loader() {
  return (
    <Wrapper>
      <Loading></Loading>
    </Wrapper>
  );
}

export default Loader;

const loading = keyframes`
20% {
    background-position: 0% 0%, 50% 50%, 100% 50%;
  }
  40% {
    background-position: 0% 100%, 50% 0%, 100% 50%;
  }
  60% {
    background-position: 0% 50%, 50% 100%, 100% 0%;
  }
  80% {
    background-position: 0% 50%, 50% 50%, 100% 100%;
  }
`;

const Wrapper = styled.div`
  position: absolute;
  inset: 0;
  background: #0000006a;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 50;
`;

const Loading = styled.div`
  width: 50px;
  aspect-ratio: 0.75;
  --c: no-repeat linear-gradient(#292524 0 0);
  background: var(--c) 0% 50%, var(--c) 50% 50%, var(--c) 100% 50%;
  background-size: 20% 50%;
  animation: ${loading} 1s infinite linear;
`;
