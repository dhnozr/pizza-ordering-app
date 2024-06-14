import React from 'react';
import { Form, redirect } from 'react-router-dom';
import { createOrder } from '../../services/apiRestaurant';

// Function to validate phone numbers using regex
// https://uibakery.io/regex-library/phone-number
const isValidPhone = str => /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(str);

// Temporary fake cart data for demonstration purposes
const fakeCart = [
  {
    pizzaId: 12,
    name: 'Mediterranean',
    quantity: 2,
    unitPrice: 16,
    totalPrice: 32,
  },
  {
    pizzaId: 6,
    name: 'Vegetale',
    quantity: 1,
    unitPrice: 13,
    totalPrice: 13,
  },
  {
    pizzaId: 11,
    name: 'Spinach and Mushroom',
    quantity: 1,
    unitPrice: 15,
    totalPrice: 15,
  },
];

// This component renders a form to create a new order.
// It uses the react-router-dom Form component to handle form submission.
function CreateOrder() {
  const cart = fakeCart;

  return (
    // The Form component from react-router-dom. This component handles the form submission by sending a POST request.
    <div>
      {/* <Form method='POST' action='/order/new'></Form> */}
      <Form method='POST'>
        <div>
          <label>
            name
            <input type='text' name='customer' />
          </label>
        </div>
        {/*  */}
        <div>
          <label>
            phone
            <input type='tel' name='phone' />
          </label>
        </div>
        {/*  */}

        <div>
          <label>
            address
            <input type='text' name='address' />
          </label>
        </div>
        {/*  */}
        <div>
          <label>
            give priority
            <input type='checkbox' name='priority' />
          </label>
        </div>
        {/*  */}
        <div>
          {/* Hidden input to send cart data as a JSON string */}
          <input type='hidden' name='cart' value={JSON.stringify(cart)} />
          <button>order now!</button>
        </div>
      </Form>
    </div>
  );
}

export default CreateOrder;

// Action function to handle form submission
// This function is called when the form is submitted. It processes the form data and creates a new order.
export async function action({ request }) {
  // Get the form data from the request
  const formData = await request.formData();
  // Convert the form data to a plain object
  const data = Object.fromEntries(formData);
  // Parse the cart and priority fields
  const order = { ...data, cart: JSON.parse(data.cart), priority: data.priority === 'on' };
  console.log(order);

  // Send the order data to the server to create a new order
  const newOrder = await createOrder(order);
  // The server returns the newly created order object

  // Redirect the user to the new order's detail page
  return redirect(`/order/${newOrder.id}`);
}
