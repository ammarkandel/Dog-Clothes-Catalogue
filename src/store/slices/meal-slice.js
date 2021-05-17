/* eslint-disable */
import { createSlice } from '@reduxjs/toolkit';

const mealSlice = createSlice({
  name: 'mealSlice',
  initialState: {
    meals: [],
  },
  reducers: {
    fetchMealsData(state, action) {
      state.meals = action.payload.meals
    }
  }
});

export const mealSliceActions = mealSlice.actions;

export default mealSlice;
