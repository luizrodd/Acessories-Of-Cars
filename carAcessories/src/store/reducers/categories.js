import { createAction,  createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const loadCategories = createAction(
  "categories/loadCategories",
);
export const loadCategoriesById = createAction(
  "categories/loadCategoriesById",
)

const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    fetchCategoriesInMiddleware: (state, {payload}) => {
        return payload
    },
    fetchCategoriesInMiddlewareById: (state, { payload }) => {
      // Atualize o estado categories corretamente
      const updatedCategories = [...state, payload];
      return updatedCategories;
    }
  }
});

export const {fetchCategoriesInMiddleware, fetchCategoriesInMiddlewareById} = categoriesSlice.actions;

export default categoriesSlice.reducer;
