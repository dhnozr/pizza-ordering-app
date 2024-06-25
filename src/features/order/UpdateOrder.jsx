import React from 'react';
import Button from '../ui/Button';
import { useFetcher } from 'react-router-dom';
import { updateOrder } from '../../services/apiRestaurant';

export default function UpdateOrder() {
  const fetcher = useFetcher();
  return (
    // It allows you to submit forms using fetch without navigating away from the current page
    // This is useful for updating parts of the UI dynamically without a full page reload
    // When the form is submitted, fetcher will handle the request using the associated action or loader
    <fetcher.Form method='PATCH'>
      <Button>Make Priority</Button>
    </fetcher.Form>
  );
}

export async function action({ request, params }) {
  const data = { priority: true };
  await updateOrder(params.orderId, data);
  return null;
}
