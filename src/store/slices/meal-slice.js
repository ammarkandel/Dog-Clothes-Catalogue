import { createSlice } from '@reduxjs/toolkit';
import getMeals from '../actions/fetchMeals';
import { handleMeals } from '../actions/handlingData';

const mealSlice = createSlice({
  name: 'mealsData',
  initialState: {
    meals: [],
    status: null,
    filter: 'Beef',
  },
  extraReducers: handleMeals(getMeals),
  reducers: {
    filter(state, action) {
      state.filter = action.payload;
    },
  },
});

export const mealSliceActions = mealSlice.actions;

export default mealSlice;
