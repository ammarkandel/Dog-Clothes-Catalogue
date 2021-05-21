/* eslint-disable */
import { createAsyncThunk } from '@reduxjs/toolkit';

export const getDetails = createAsyncThunk(
  'detailsData/getDetails',
  async (id) => {
    return fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`).then((res) => {
      const data = res.json();
      return data
    })
  }
)
