/* eslint-disable */
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { requestMealsData, fetchMealDetail } from '../store/actions/meals-actions';

const Meals = () => {
  const dispatch = useDispatch();
  let filterVal = useSelector((state) => state.meals.filter);
  const mealsList = useSelector((state) => state.meals.meals);
  const ids = [];
  
  useEffect(() => {
    dispatch(requestMealsData(filterVal));
    ids.map((id) => {
      dispatch(fetchMealDetail(id))
    })
  }, [filterVal])

  return (
    <>
      <ul>
        {mealsList.map((meal) => {
          ids.push(meal.idMeal)
          return (
            <li key={meal.idMeal}>
              <img src={meal.strMealThumb} height='150' width='150' />
              <h4>{meal.strMeal}</h4>
              <Link to={`/meals/:${meal.idMeal}`}>Details</Link>
            </li>
          )
        })}
      </ul>
    </>
  )
}

export default Meals;
