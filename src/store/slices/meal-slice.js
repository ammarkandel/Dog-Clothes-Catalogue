/* eslint-disable */
import { createSlice } from '@reduxjs/toolkit';

const mealSlice = createSlice({
  name: 'mealSlice',
  initialState: {
    filter: 'Beef',
    meals: [],
  },
  reducers: {
    filter(state, action) {
      state.filter = action.payload
    },
    fetchMeals(state, action) {
      state.meals = action.payload
    }
  }
});

export const mealSliceActions = mealSlice.actions;

export default mealSlice;
