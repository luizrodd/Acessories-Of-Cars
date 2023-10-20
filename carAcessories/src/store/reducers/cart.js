import { createSlice } from '@reduxjs/toolkit';

const initialState = []

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        insertCart: (state, {payload}) => {
            state.push(payload)
            
        }
    }
})

export const { insertCart } = cartSlice.actions

export default cartSlice.reducer