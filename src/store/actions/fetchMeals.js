import { createAsyncThunk } from '@reduxjs/toolkit';

const getMeals = createAsyncThunk(
  'mealsData/getMeals',
  async (category) => fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`).then((res) => {
    const data = res.json();
    return data;
  }),
);

export default getMeals;
