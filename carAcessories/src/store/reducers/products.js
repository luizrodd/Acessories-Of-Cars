import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import productsService from "../../services/products";

const initialState = []

export const fetchProducts = createAsyncThunk(
    'products/fetchProducts',
    productsService.getProducts
)

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.fulfilled, (state, { payload }) => {
      return payload;
    });
  },
});

export default productsSlice.reducer;