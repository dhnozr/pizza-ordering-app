import React, { useState } from 'react';
import styled from 'styled-components';
import Button from '../ui/Button';

function CreateUser() {
  const [username, setUsername] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
  }
  return (
    <form onSubmit={handleSubmit}>
      <WelcomeText>👋 Welcome! Please start by telling us your name</WelcomeText>
      <NameInput type='text' placeholder='Your name' value={username} onChange={e => setUsername(e.target.value)} />

      {username !== '' && (
        <div>
          <Button>Start Ordering</Button>
        </div>
      )}
    </form>
  );
}

export default CreateUser;

const WelcomeText = styled.p`
  color: #57534e;
  margin-bottom: 8px;
`;

const NameInput = styled.input`
  display: inline-block;
  width: 300px;
  padding: 6px 16px;
  border-radius: 100px;
  border: none;
  outline: 1px solid #e7e5e4;
  margin-bottom: 1rem;

  &:focus {
    outline: 1px solid #facc15;
    outline-width: 2px;
  }
`;
