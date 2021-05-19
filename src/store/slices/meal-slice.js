import { createSlice } from '@reduxjs/toolkit';

const mealSlice = createSlice({
  name: 'mealSlice',
  initialState: {
    filter: 'Beef',
  },
  reducers: {
    filter(state, action) {
      state.filter = action.payload;
    },
  },
});

export const mealSliceActions = mealSlice.actions;

export default mealSlice;
