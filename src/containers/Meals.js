import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { requestMealsData, fetchMealDetail } from '../store/actions/meals-actions';
import { categoreis } from './CategoryFilter';

const Meals = () => {
  const dispatch = useDispatch();
  const filterVal = useSelector((state) => state.meals.filter);
  const mealsList = JSON.parse(localStorage.getItem(filterVal)).meals;
  const ids = [];
  const fetchDetails = () => ids.map((id) => dispatch(fetchMealDetail(id)));

  useEffect(() => {
    categoreis.map((item) => dispatch(requestMealsData(item)));
    fetchDetails();
  }, []);

  useEffect(() => {
    fetchDetails();
  }, [filterVal]);

  return (
    <>
      <ul>
        {mealsList.map((meal) => {
          ids.push(meal.idMeal);
          return (
            <li key={meal.idMeal}>
              <img src={meal.strMealThumb} height="150" width="150" alt={meal.strMeal} />
              <h4>{meal.strMeal}</h4>
              <Link to={`/meals/:${meal.idMeal}`}>Details</Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Meals;
