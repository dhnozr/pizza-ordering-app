import React from 'react';
import { Link } from 'react-router-dom';

function CartOverview() {
  return (
    <div>
      CartOverview
      <Link to='/cart'>go to cart</Link>
    </div>
  );
}

export default CartOverview;
