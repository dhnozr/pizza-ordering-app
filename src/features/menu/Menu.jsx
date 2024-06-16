import React from 'react';
import { getMenu } from '../../services/apiRestaurant';
import { useLoaderData } from 'react-router-dom';
import MenuItem from './MenuItem';
import styled from 'styled-components';

function Menu() {
  // useLoaderData hook retrieves the data loaded by the loader function
  const menu = useLoaderData();
  console.log(menu);
  return (
    <MenuContainer>
      {menu.map(pizza => (
        <MenuItem pizza={pizza} key={pizza.id} />
      ))}
    </MenuContainer>
  );
}

export default Menu;

// Loader function to fetch the menu data before rendering the Menu component
export async function loader() {
  const menu = await getMenu();
  return menu;
}

const MenuContainer = styled.ul`
  padding: 1rem 0;
  display: grid;
  gap: 8px;
`;
