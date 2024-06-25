import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

// This component allows the user to search for a specific order by its ID.
function SearchOrder() {
  const navigate = useNavigate();
  const [query, setQuery] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    if (!query) return;
    navigate(`/order/${query}`);
    setQuery('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <SearchInput type='text' placeholder='Search order#' value={query} onChange={e => setQuery(e.target.value)} />
    </form>
  );
}

export default SearchOrder;

const SearchInput = styled.input`
  border-radius: 100px;
  border: none;
  outline: 1px solid white;
  padding: 4px 10px;
  width: 110px;
  font-size: 13px;
  transition: all 0.5s linear;

  &:focus {
    width: 160px;
  }

  @media screen and (min-width: 660px) {
    width: 180px;
    &:focus {
      width: 300px;
    }
  }
`;
