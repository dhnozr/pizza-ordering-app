import React from 'react';
import { getMenu } from '../../services/apiRestaurant';
import { useLoaderData } from 'react-router-dom';
import MenuItem from './MenuItem';

function Menu() {
  // useLoaderData hook retrieves the data loaded by the loader function
  const menu = useLoaderData();
  console.log(menu);
  return (
    <ul>
      {menu.map(pizza => (
        <MenuItem pizza={pizza} key={pizza.id} />
      ))}
    </ul>
  );
}

export default Menu;

// Loader function to fetch the menu data before rendering the Menu component
export async function loader() {
  const menu = await getMenu();
  return menu;
}
