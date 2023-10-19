import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import categoriesSlice from './reducers/categories';
import productsSlice from './reducers/products'
import { listenerCategories } from './middlewares/categories';

const store = configureStore({
    reducer: {
        categories: categoriesSlice,
        products: productsSlice
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware().prepend(listenerCategories.middleware)
})

export default store