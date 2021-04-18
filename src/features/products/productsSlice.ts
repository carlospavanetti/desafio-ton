import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import ProductsApi, { Product } from '@api/products';

const initialState = {
  values: [] as Array<Product>,
  lastKey: null as number | null,
  loading: false,
};

export const loadProducts = createAsyncThunk('products/loadProducts', async () => {
  return ProductsApi.list();
});

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(loadProducts.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(loadProducts.fulfilled, (state, action) => {
      state.loading = false;
      state.values = action.payload.products;
    });
  },
});

// export const { goToNextPage } = productsSlice.actions

export default productsSlice.reducer;
