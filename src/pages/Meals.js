/* eslint-disable */
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { requestMealsData } from '../store/actions/meals-actions';

const Meals = () => {
  const dispatch = useDispatch();
  const mealsList = useSelector((state) => state.meals.meals);
  
  useEffect(() => {
    dispatch(requestMealsData('filter', 'c', 'Vegetarian'))
  },[])
  return (
    <ul>
      {mealsList.map((meal) => {
        return (
          <li key={meal.idMeal}>
            <img src={meal.strMealThumb} height='150' width='150' />
            <h4>{meal.strMeal}</h4>
            <Link to={`/meals/:${meal.idMeal}`}>Details</Link>
          </li>
        )
      })}
    </ul>
  )
}

export default Meals;
