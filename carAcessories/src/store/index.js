import { configureStore } from '@reduxjs/toolkit';
import categoriesSlice from './reducers/categories';
import productsSlice from './reducers/products'
const store = configureStore({
    reducer: {
        categories: categoriesSlice,
        products: productsSlice
    }
})

export default store