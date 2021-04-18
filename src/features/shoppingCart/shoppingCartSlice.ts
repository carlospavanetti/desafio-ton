import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '@store';
import { Product } from '@api/products';

const initialState = {
  items: [] as Array<Product>,
};

export const shoppingCartSlice = createSlice({
  name: 'shoppingCart',
  initialState,
  reducers: {
    addItem(state, action) {
      state.items.push(action.payload);
    },
    removeItem(state, action) {
      const itemId = action.payload;
      const index = state.items.findIndex((item) => item.id === itemId);
      if (index < 0) return;

      state.items.splice(index, 1);
    },
  },
});

export const { addItem, removeItem } = shoppingCartSlice.actions;

export const itemsSelector = (state: RootState): Array<Product> => state.shoppingCart.items;

export default shoppingCartSlice.reducer;
