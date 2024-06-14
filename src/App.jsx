import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './ui/Home';
import Menu from './features/menu/Menu';
import Cart from './features/cart/Cart';
import CreateOrder from './features/order/CreateOrder';
import Order from './features/order/Order';
import AppLayout from './ui/AppLayout';

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/menu',
        element: <Menu />,
      },
      {
        path: '/cart',
        element: <Cart />,
      },
      {
        path: '/order/new',
        element: <CreateOrder />,
      },
      {
        // Route for viewing the details of a specific order
        path: '/order/:orderId',
        // The ':orderId' part of the path is a URL parameter that represents the ID of the order
        // When the user navigates to a URL matching this pattern (e.g., '/order/123'),
        // the Order component will be rendered, and it will have access to the orderId parameter
        element: <Order />, // Render Order component when path matches '/order/:orderId'
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
