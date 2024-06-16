import React from 'react';
import { useRouteError } from 'react-router-dom';
import LinkButton from './LinkButton';

function Error() {
  // The Error component uses useRouteError to get the error object associated with the route.
  const error = useRouteError();
  return (
    <div>
      <h1>Something went wrong😢</h1>
      <p>{error.data || error.message}</p>
      <LinkButton to={-1}>&larr; Go back</LinkButton>
    </div>
  );
}

export default Error;
