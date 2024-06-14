import React from 'react';
import { Link, useRouteError } from 'react-router-dom';

function Error() {
  // The Error component uses useRouteError to get the error object associated with the route.
  const error = useRouteError();
  return (
    <div>
      <h1>Something went wrong😢</h1>
      <p>{error.data || error.message}</p>
      <Link to={-1}>GO BACK</Link>
    </div>
  );
}

export default Error;
