import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Meals = () => {
  const id = 1;
  const mealsList = useSelector((state) => state.meals.meals);
  return (
    <ul>
      {mealsList.map((meal) => {
        return (
          <li key={meal.idMeal}>{meal.strMeal}</li>
        )
      })}
    </ul>
  )
}

export default Meals;
