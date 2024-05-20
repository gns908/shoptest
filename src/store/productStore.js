import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const getProductList = createAsyncThunk(
  'products/getProductList', // 액션의 이름
  async (category) => {
    let url = `https://my-json-server.typicode.com/gns908/shoptest/products`;
    if (category) {
      url += `?category=${category}`;
    }
    let response = await fetch(url);
    let data = await response.json();
    return data;
  }
);

let products = createSlice({
  name: 'products',
  initialState: {
    products: [],
    status: 'idle',
    error: null,
  },
  reducers: {
    loadDate: (state, action) => {
      state.products = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(getProductList.pending, (state) => {
        state.status = 'loading';
      }) //
      .addCase(getProductList.fulfilled, (state, action) => {
        state.status = 'scucceeded';
        state.products = action.payload;
      }) //
      .addCase(getProductList.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const { extraReducers } = products.actions;
export default products;
