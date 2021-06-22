import { createAsyncThunk } from '@reduxjs/toolkit';

const getDetails = createAsyncThunk(
  'detailsData/getDetails',
  async (id) => fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`).then((res) => {
    const data = res.json();
    return data;
  }),
);

export default getDetails;
