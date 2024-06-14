const API_URL = 'https://react-fast-pizza-api.onrender.com/api';

// Function to fetch the menu
export async function getMenu() {
  // Simulate a delay of 1 second
  await new Promise(resolve => setTimeout(resolve, 1000));

  // Fetch the menu from the API
  const res = await fetch(`${API_URL}/menu`);

  // Manually throw an error if the response is not ok (e.g., 400 errors)
  if (!res.ok) throw Error('Failed getting menu');

  // Parse the JSON response
  const { data } = await res.json();
  return data;
}

// Function to fetch an order by ID
export async function getOrder(id) {
  // Fetch the order from the API using the provided ID
  const res = await fetch(`${API_URL}/order/${id}`);

  // Throw an error if the response is not ok
  if (!res.ok) throw Error(`Couldn't find order #${id}`);

  // Parse the JSON response
  const { data } = await res.json();
  return data;
}

// Function to create a new order
export async function createOrder(newOrder) {
  try {
    // Send a POST request to the API to create a new order
    const res = await fetch(`${API_URL}/order`, {
      method: 'POST',
      body: JSON.stringify(newOrder),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    // Throw an error if the response is not ok
    if (!res.ok) throw Error();

    // Parse the JSON response
    const { data } = await res.json();
    return data;
  } catch {
    // Handle any errors that occur during the request
    throw Error('Failed creating your order');
  }
}

// Function to update an existing order
export async function updateOrder(id, updateObj) {
  try {
    // Send a PATCH request to the API to update the order
    const res = await fetch(`${API_URL}/order/${id}`, {
      method: 'PATCH',
      body: JSON.stringify(updateObj),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    // Throw an error if the response is not ok
    if (!res.ok) throw Error();
    // We don't need the data, so we don't return anything
  } catch (err) {
    // Handle any errors that occur during the request
    throw Error('Failed updating your order');
  }
}
