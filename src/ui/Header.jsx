import React from 'react';
import { Link } from 'react-router-dom';
import SearchOrder from '../features/order/SearchOrder';

function Header() {
  return (
    <div>
      <Link to='/'>React Pizza</Link>
      <SearchOrder />
      <p>duhan</p>
    </div>
  );
}

export default Header;
