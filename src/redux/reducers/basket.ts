import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { Product } from '../../types/product';

interface BasketItem extends Product {
  count: number;
}
const basket: BasketItem[] = [];
const basketSclie = createSlice({
  name: 'basket',
  initialState: basket,
  reducers: {
    addBasket: (state, action: PayloadAction<BasketItem>) => {
      const existing = state.find((el) => el.id === action.payload.id);
      if (existing) {
        existing.count += 1;
      } else {
        state.push({ ...action.payload, count: 1 });
      }
    },
    removeBasket: (state, action: PayloadAction<Product>) => {
      return state.filter((el) => el.id !== action.payload.id);
    },
    incrementBasket: (state, action: PayloadAction<BasketItem>) => {
      const founded = state.find((el) => el.id === action.payload.id);

      if (founded && founded?.count > 1) {
        founded.count -= 1;
      } else {
        removeBasket(action.payload);
      }
    },

    clearBasket: () => {
      return [];
    },
  },
});

export const { addBasket, removeBasket, clearBasket , incrementBasket} = basketSclie.actions;

export default basketSclie.reducer;
