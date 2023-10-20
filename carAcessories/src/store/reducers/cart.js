import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    insertCart: (state, { payload }) => {
      const existingItem = state.find((item) => item.id === payload.id);
      if (existingItem) {
        // Se o item já existe no carrinho, atualize a quantidade
        state = state.map((item) => {
          if (item.id === existingItem.id) {
            item.quantity += payload.quantity || 1; // Atualiza a quantidade (ou define como 1 se não estiver definida em payload)
          }
          return item;
        });
        // Remova o item se a quantidade for igual a zero
        state = state.filter((item) => item.quantity > 0);
      } else {
        // Caso contrário, adicione-o ao carrinho com a quantidade padrão de 1
        state.push({ ...payload, quantity: payload.quantity || 1 });
      }

      return state;
    },
    removeFromCart: (state, { payload }) => {
      return state.filter((item) => item.id !== payload);
    },
    changeQuantity: (state, { payload }) => {
      state = state.map((itsInCart) => {
        if (itsInCart.id === payload.id) {
          itsInCart.quantity += payload.quantity;
        }
      });
    },
  },
});

export const { insertCart, removeFromCart, changeQuantity } = cartSlice.actions;

export default cartSlice.reducer;
