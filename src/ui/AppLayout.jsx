import React from 'react';
import Header from './Header';
import CartOverview from '../features/cart/CartOverview';
import { Outlet, useNavigation } from 'react-router-dom';

function AppLayout() {
  // This hook tells you everything you need to know about a page navigation
  // Things like: Global loading indicators, Disabling forms while a mutation is happening
  const navigation = useNavigation();
  const isLoading = navigation.state === 'loading';
  return (
    <div>
      <Header />
      <main>
        <Outlet />
      </main>
      <CartOverview />
    </div>
  );
}

export default AppLayout;
