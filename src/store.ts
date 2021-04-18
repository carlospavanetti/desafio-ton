import { configureStore } from '@reduxjs/toolkit';
import productsReducer from './features/products/productsSlice';
import shoppingCartReducer from './features/shoppingCart/shoppingCartSlice';

const store = configureStore({
  reducer: {
    products: productsReducer,
    shoppingCart: shoppingCartReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
