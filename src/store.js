import { configureStore } from '@reduxjs/toolkit';
import userRedecer from './features/user/userSlice';

const store = configureStore({
  reducer: {
    user: userRedecer,
  },
});

export default store;
