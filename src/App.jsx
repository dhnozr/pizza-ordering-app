import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './ui/Home';
import Menu, { loader as menuLoader } from './features/menu/Menu';
import Cart from './features/cart/Cart';
import CreateOrder, { action as createOrderAction } from './features/order/CreateOrder';
import Order, { loader as orderLoader } from './features/order/Order';
import AppLayout from './ui/AppLayout';
import Error from './ui/Error';

const router = createBrowserRouter([
  {
    // AppLayout component wraps all the child routes
    element: <AppLayout />,
    errorElement: <Error />, // This specifies the error component for the AppLayout route
    // Each route can have an errorElement which specifies a component to render when an error occurs during the navigation to that route or while loading data for that route.
    // The errorElement for AppLayout applies to all child routes unless they have their own errorElement.
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/menu',
        element: <Menu />,
        loader: menuLoader, // Use menuLoader to load data before rendering Menu component
        errorElement: <Error />, // This specifies the error component for the Menu route
        // The errorElement for the /menu route specifies that the Error component should be displayed if there is an error loading the Menu component or its data.
      },
      {
        path: '/cart',
        element: <Cart />,
      },
      {
        path: '/order/new',
        element: <CreateOrder />,
        action: createOrderAction,
      },
      {
        // Route for viewing the details of a specific order
        path: '/order/:orderId',
        // The ':orderId' part of the path is a URL parameter that represents the ID of the order
        // When the user navigates to a URL matching this pattern (e.g., '/order/123'),
        // the Order component will be rendered, and it will have access to the orderId parameter
        element: <Order />, // Render Order component when path matches '/order/:orderId'
        errorElement: <Error />,
        loader: orderLoader, // Use orderLoader to load data before rendering Order component
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
