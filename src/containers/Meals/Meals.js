import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import getMeals from '../../store/actions/fetchMeals';
import classes from './Meals.module.css';

const Meals = () => {
  const dispatch = useDispatch();
  const mealsList = useSelector((state) => state.meals.meals.meals);
  const status = useSelector((state) => state.meals.status);
  const filterVal = useSelector((state) => state.meals.filter);

  useEffect(() => {
    dispatch(getMeals(filterVal));
  }, [dispatch, filterVal]);

  return (
    <>
      <ul>
        {status === 'failed' && <h1>Failed........</h1>}
        {status === 'loading' && <h1>Loading.......</h1>}
        {status === 'success' && mealsList.map((meal) => (
          <li className={classes.meal} key={meal.idMeal}>
            <img src={meal.strMealThumb} height="150" width="150" alt={meal.strMeal} />
            <h4>{meal.strMeal}</h4>
            <Link className={classes.detail_btn} to={`meals/:${meal.idMeal}`}>Details</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Meals;
