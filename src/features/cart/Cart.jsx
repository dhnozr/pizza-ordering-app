import React from 'react';
import { Link } from 'react-router-dom';

function Cart() {
  return (
    <div>
      <h2>cart</h2>
      <Link to='/menu'>back to menu</Link>
    </div>
  );
}

export default Cart;
