import { useDispatch, useSelector } from 'react-redux';
import { mealSliceActions } from '../../store/slices/meal-slice';
import classes from './CategoryFilter.module.css';

export const categoreis = [
  'Beef', 'Breakfast', 'Dessert',
  'Seafood', 'Side',
  'Starter', 'Vegan',
  'Vegetarian', 'Chicken',
];

const CategoryFilter = () => {
  const dispatch = useDispatch();
  const filterVal = useSelector((state) => state.meals.filter);
  const filterValHandler = (event) => {
    dispatch(mealSliceActions.filter(event.target.value));
  };
  return (
    <select className={classes.select_category} onChange={filterValHandler} data-test="select-category">
      <option value={filterVal}>{filterVal}</option>
      {categoreis.filter((item) => item !== filterVal).map((item) => (
        <option key={Math.random()} value={item}>{item}</option>
      ))}
    </select>
  );
};

export default CategoryFilter;
