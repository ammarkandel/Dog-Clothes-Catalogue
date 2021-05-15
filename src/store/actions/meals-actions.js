import { mealSliceActions } from '../slices/meal-slice';

export const requestMealsData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=Vegetarian');
      const data = await response.json();
      return data;
    }
    try {
      const data = await fetchData();
      dispatch(mealSliceActions.fetchMealsData(data));
    } catch (error) {
      console.log(error);
    }
  }
}
