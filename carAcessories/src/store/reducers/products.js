import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import productsService from "../../services/products";

const initialState = [];

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  productsService.getProducts
);

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    changeFavorite: (state, { payload }) => {
      state.map(product => {
        if(product.id === payload ) {
          product.favorite = !product.favorite
        } 
      })
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.fulfilled, (state, { payload }) => {
      return payload;
    });
  },
});

export const { changeFavorite } = productsSlice.actions;

export default productsSlice.reducer;
