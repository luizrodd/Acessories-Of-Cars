import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import categoriesService from "../../services/categories";

const initialState = [];

export const fetchCategories = createAsyncThunk(
  "categories/fetchCategories",
  categoriesService.getCategories
);

const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCategories.fulfilled, (state, {payload}) => {
        return payload
    });
  },
});

export default categoriesSlice.reducer;