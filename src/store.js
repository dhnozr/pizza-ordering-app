import { configureStore } from '@reduxjs/toolkit';
import userRedecer from './features/user/userSlice';
import cartReducer from './features/cart/cartSlice';

const store = configureStore({
  reducer: {
    user: userRedecer,
    cart: cartReducer,
  },
});

export default store;
