/* eslint-disable */
import { mealSliceActions } from '../slices/meal-slice';

export const requestMealsData = (category) => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`);
      const data = await response.json();
      return data;
    }
    try {
      const data = await fetchData();
      dispatch(mealSliceActions.fetchMeals(data.meals))
    } catch (error) {
      console.log(error);
    }
  }
}

export const fetchMealDetail = (id) => {
  return async () => {
    const fetchData = async () => {
      const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
      const data = await response.json();
      return data;
    }
    try {
      const data = await fetchData();
      localStorage.setItem(id, JSON.stringify([data]));
    } catch (error) {
      console.log(error);
    }
  }
}
