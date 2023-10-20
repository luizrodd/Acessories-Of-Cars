import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import categoriesSlice from './reducers/categories';
import productsSlice from './reducers/products'
import cartSlice from './reducers/cart'
import { listenerCategories } from './middlewares/categories';

const store = configureStore({
    reducer: {
        categories: categoriesSlice,
        products: productsSlice,
        cart: cartSlice
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware().prepend(listenerCategories.middleware)
})

export default store