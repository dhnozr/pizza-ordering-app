import React from 'react';
import styled from 'styled-components';
import CreateUser from '../user/CreateUser';

function Home() {
  return (
    <Wrapper>
      <Title>
        <span>The best pizza</span>
        <br />
        Straight out of the owen, straight to you.
      </Title>

      <CreateUser />
    </Wrapper>
  );
}

export default Home;

const Title = styled.h1`
  color: #ffb703;
  font-weight: 700;
  padding-bottom: 1rem;
  span {
    color: #44403c;
  }
`;

const Wrapper = styled.div`
  text-align: center;
  margin-top: 5rem;
  margin-bottom: 5rem;
  padding: 1rem;
`;
