/* eslint-disable */
import { useDispatch } from "react-redux";
import { mealSliceActions } from '../store/slices/meal-slice';

export const categoreis = [
  'Breakfast', 'Dessert',
  'Seafood', 'Side',
  'Starter', 'Vegan',
  'Vegetarian','Chicken',
];

const CategoryFilter = () => {
  const dispatch = useDispatch();
  const filterValHandler = (event) => {
    dispatch(mealSliceActions.filter(event.target.value))
  }
  return (
    <select onChange={filterValHandler}>
      <option value='Beef'>Beef</option>
      {categoreis.map((item) => (
        <option key={Math.random()} value={item}>{item}</option>
      ))}
    </select>
  )
}

export default CategoryFilter;
