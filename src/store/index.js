/* eslint-disable */
import { configureStore } from '@reduxjs/toolkit';
import mealSlice from './slices/meal-slice';
import mealDetailSlice from './slices/mealDetailSlice';

const store = configureStore({
  reducer: {
    meals: mealSlice.reducer,
    mealDetail: mealDetailSlice.reducer,
  },
});

export default store;
