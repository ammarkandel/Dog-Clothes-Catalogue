import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import getMeals from '../../store/actions/fetchMeals';
import classes from './Meals.module.css';
import CategoryFilter from '../CategoryFilter/CategoryFilter';

const Meals = () => {
  const dispatch = useDispatch();
  const mealsList = useSelector((state) => state.meals.meals.meals);
  const status = useSelector((state) => state.meals.status);
  const filterVal = useSelector((state) => state.meals.filter);

  useEffect(() => {
    dispatch(getMeals(filterVal));
  }, [dispatch, filterVal]);

  const renderMeals = () => {
    if (status === 'success' && mealsList) {
      return (
        <>
          {mealsList.map((meal) => (
            <li data-testid="meals_list" className={classes.meal} key={meal.idMeal}>
              <img src={meal.strMealThumb} height="150" width="150" alt={meal.strMeal} />
              <h4>{meal.strMeal}</h4>
              <Link className={classes.detail_btn} to={`meals/:${meal.idMeal}`}>Details</Link>
            </li>
          ))}
        </>
      );
    }

    return null;
  };

  const mealsStatus = () => {
    if (status === 'failed' || !mealsList) return <h1>May take time or somthing went wrong......</h1>;
    if (status === 'loading') return <h1>Loading.......</h1>;
    return null;
  };

  return (
    <>
      <CategoryFilter />
      <h1 className={classes.list_title} data-testid="meals_title">{filterVal}</h1>
      <div data-testid="fetch_meals">
        {mealsStatus()}
      </div>
      <ul>
        {renderMeals()}
      </ul>
    </>
  );
};

export default Meals;
