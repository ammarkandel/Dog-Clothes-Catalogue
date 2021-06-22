import { createSlice } from '@reduxjs/toolkit';
import getDetails from '../actions/fetchDetails';
import { handleMealDetail } from '../actions/handlingData';

const mealDetailSlice = createSlice({
  name: 'detailsData',
  initialState: {
    mealDetail: [],
    status: null,
  },
  extraReducers: handleMealDetail(getDetails),
});

export default mealDetailSlice;
