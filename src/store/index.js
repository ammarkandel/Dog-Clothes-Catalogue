import { configureStore } from '@reduxjs/toolkit';
import mealSlice from './slices/meal-slice';

const store = configureStore({
  reducer: {
    meals: mealSlice.reducer,
  },
});

export default store;
