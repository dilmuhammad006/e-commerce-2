import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { Product } from '../../types/product';

const basket: Product[] = [];
const basketSclie = createSlice({
  name: 'basket',
  initialState: basket,
  reducers: {
    addBasket: (state, action: PayloadAction<Product>) => {
      state.push(action.payload);
    },
    removeBasket: (state, action: PayloadAction<Product>) => {
      return state.filter((el) => el.id !== action.payload.id);
    },
    clearBasket: () => {
      return [];
    },
  },
});

export const { addBasket, removeBasket , clearBasket} = basketSclie.actions;

export default basketSclie.reducer;
