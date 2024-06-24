import React, { useState } from 'react';
import { Form, redirect, useActionData, useNavigation } from 'react-router-dom';
import { createOrder } from '../../services/apiRestaurant';
import styled from 'styled-components';
import Button from '../ui/Button';
import { useSelector } from 'react-redux';
import { getUsername } from '../user/userSlice';
import { clearCart, getCart, getTotalCartPrice } from '../cart/cartSlice';
import EmptyCart from '../cart/EmptyCart';
import store from '../../store';
import { formatCurrency } from '../../utils/helpers';

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
  const [priority, setPriority] = useState(false);
  const navigation = useNavigation();
  const username = useSelector(getUsername);
  const totalCartPrice = useSelector(getTotalCartPrice);
  const priorityPrice = priority ? totalCartPrice * 0.2 : 0;
  const totalPrice = totalCartPrice + priorityPrice;

  // useActionData is a hook provided by react-router-dom that allows components to access the data returned by an action function.
  // In this context, we use useActionData to get the validation errors returned by the action function and display them in the form.
  const formErrors = useActionData(); // This hook allows us to access the data returned from the action function

  const isSubmitting = navigation.state === 'submitting';

  // Take cart from store
  const cart = useSelector(getCart);
  // If cart is empty return EmptyCart component
  if (!cart.length) return <EmptyCart />;
  return (
    // The Form component from react-router-dom. This component handles the form submission by sending a POST request.
    <Wrapper>
      {/* <Form method='POST' action='/order/new'></Form> */}
      <Form method='POST'>
        <div>
          <label>
            name
            <input type='text' name='customer' required defaultValue={username} />
          </label>
        </div>
        {/*  */}
        <div>
          <label>
            phone
            <input type='tel' name='phone' required />
          </label>
          {/* Display the phone error message if it exists */}
          {formErrors?.phone && <ErrorMessage>{formErrors.phone}</ErrorMessage>}
        </div>
        {/*  */}

        <Address>
          <label>
            address
            <input type='text' name='address' required />
          </label>
        </Address>
        {/*  */}
        <CheckBox>
          <label>
            <input type='checkbox' name='priority' value={priority} onChange={e => setPriority(e.target.checked)} />
            give priority
          </label>
        </CheckBox>
        {/*  */}
        <div>
          {/* Hidden input to send cart data as a JSON string */}
          <input type='hidden' name='cart' value={JSON.stringify(cart)} />
          <Button disabled={isSubmitting}>
            {isSubmitting ? 'Placing order...' : `order now from ${formatCurrency(totalPrice)}`}
          </Button>
        </div>
      </Form>
    </Wrapper>
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
  const order = { ...data, cart: JSON.parse(data.cart), priority: data.priority === 'true' };
  console.log(order);

  // Initialize an empty object to hold any validation errors
  const errors = {};

  // Validate the phone number using the isValidPhone function
  // If it's not valid, an error message is added to the errors object.
  if (!isValidPhone(order.phone)) errors.phone = 'Please enter a valid phone number!';

  // If there are any validation errors, it returns the errors object, stopping the form submission and allowing the component to handle the errors.
  if (Object.keys(errors).length > 0) return errors;

  // If there are no validation errors
  // Send the order data to the server to create a new order
  // The server returns the newly created order object
  const newOrder = await createOrder(order);

  // Do not overuse
  store.dispatch(clearCart());

  // Redirect the user to the new order's detail page
  return redirect(`/order/${newOrder.id}`);
}

// Styles

const Wrapper = styled.div`
  padding: 1rem;

  div {
    margin-bottom: 1rem;
  }

  label {
    text-transform: uppercase;
    display: flex;

    justify-content: space-between;
    flex-direction: column;
    font-size: 14px;
    gap: 8px;
  }
  input {
    width: 100%;
    border-radius: 100px;
    padding: 6px;
    border: none;
    outline: 1px solid #e7e5e4;

    ::placeholder {
      color: #a8a29e;
    }
  }
`;

const ErrorMessage = styled.p`
  font-size: 12px;
  margin-top: 10px;
  color: red;
  background-color: #fee2e2;
  border-radius: 12px;
  padding: 10px 3px;
`;

const Address = styled.div``;

const CheckBox = styled.div`
  label {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    gap: 1rem;

    input {
      width: fit-content;
      outline: none;
      width: 15px;
      height: 15px;
    }
  }
`;
