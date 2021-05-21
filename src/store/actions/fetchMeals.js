/* eslint-disable */
import { createAsyncThunk } from '@reduxjs/toolkit';

export const getMeals = createAsyncThunk(
  'mealsData/getMeals',
  async (category) => {
    return fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`).then((res) => {
      const data = res.json();
      return data
    })
  }
)
