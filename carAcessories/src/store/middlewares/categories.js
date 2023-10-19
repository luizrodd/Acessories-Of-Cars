import { createListenerMiddleware } from "@reduxjs/toolkit";
import {
  fetchCategoriesInMiddleware,
  fetchCategoriesInMiddlewareById,
  loadCategories,
  loadCategoriesById,
} from "../reducers/categories";
import categoriesService from "../../services/categories";

export const listenerCategories = createListenerMiddleware();

listenerCategories.startListening({
  actionCreator: loadCategories,

  effect: async (action, { dispatch, fork, unsubscribe }) => {
    const task = fork(async (api) => {
      return await categoriesService.getCategories();
    });

    const result = await task.result;

    if (result.status === "ok") {
      dispatch(fetchCategoriesInMiddleware(result.value)), unsubscribe();
    }
  },
});

listenerCategories.startListening({
  actionCreator: loadCategoriesById,

  effect: async (action, { dispatch, fork, unsubscribe, getState }) => {
    const categories = getState().categories;
    const id = action.payload;
    const categoryLoad = categories.some((category) => category.id === id);

    if (categoryLoad) return;
    if (categories.length === 3) return unsubscribe();

    const task = fork(async (api) => {
      await api.delay(500);
      return await categoriesService.getCategoryById(id);
    });

    const result = await task.result;

    if (result.status === "ok") {
      dispatch(fetchCategoriesInMiddlewareById(result.value));
    }
    if (result.status === "rejected") {
      console.log("erro");
    }
  },
});
