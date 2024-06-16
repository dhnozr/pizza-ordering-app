import React from 'react';
import Header from './Header';
import CartOverview from '../cart/CartOverview';
import { Outlet, useNavigation } from 'react-router-dom';
import styled from 'styled-components';
import Loader from './Loader';

function AppLayout() {
  // This hook tells you everything you need to know about a page navigation
  // Things like: Global loading indicators, Disabling forms while a mutation is happening
  const navigation = useNavigation();
  const isLoading = navigation.state === 'loading';

  return (
    <GridContainer>
      {isLoading && <Loader />}
      <Header />
      <Main>
        <Outlet />
      </Main>
      <CartOverview />
    </GridContainer>
  );
}

export default AppLayout;

const GridContainer = styled.div`
  display: grid;
  grid-template-rows: auto 1fr auto;
  height: 100dvh;
`;

const Main = styled.main`
  overflow-y: scroll;
  max-width: 1140px;
  margin: auto;
  width: 100%;
  height: 100%;
`;
