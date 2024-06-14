import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// This component allows the user to search for a specific order by its ID.
function SearchOrder() {
  const navigate = useNavigate();
  const [query, setQuery] = useState('');

  function handleSubmit(e) {
    e.preventDefault();

    if (!query) return;
    navigate(`order/${query}`);
    setQuery('');
  }

  return (
    <form>
      <input
        onSubmit={handleSubmit}
        type='text'
        placeholder='Search order#'
        value={query}
        onChange={e => setQuery(e.target.value)}
      />
    </form>
  );
}

export default SearchOrder;
