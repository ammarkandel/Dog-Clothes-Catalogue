import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import getDetails from '../../store/actions/fetchDetails';
import classes from './MealDetails.module.css';

const all = {
  name: '',
  area: '',
  src: '',
  ingredient: [],
};

const MealDetails = () => {
  const dispatch = useDispatch();
  const id = useParams().id.slice(1);
  useEffect(() => {
    dispatch(getDetails(id));
  }, []);

  let detail;
  const selectDetails = useSelector((state) => state.mealDetail).mealDetail.meals;
  const fetchDetailStatus = useSelector((state) => state.mealDetail).status;
  if (selectDetails) {
    detail = selectDetails;
    all.name = `${detail[0].strMeal}`;
    all.area = `${detail[0].strArea}`;
    all.src = `${detail[0].strYoutube.replace('watch?v=', 'embed/')}`;
    Array.from(Array(20), (e, i) => {
      const ingred = detail[0][`strIngredient${i}`];
      if (ingred) all.ingredient.push(ingred);
      return ingred;
    });
  }

  const { ingredient } = all;

  return (
    <>
      <h1 className={classes.detail_title}>- Meal Details -</h1>
      {fetchDetailStatus === 'failed' && <h1>Failed to get meal details</h1>}
      {fetchDetailStatus === 'loading' && <h1>Loading......</h1>}

      {
        fetchDetailStatus === 'success'
        && (
          <div className={classes.details}>
              {all.src && (
                <div>
                  <iframe
                    width="320"
                    height="480"
                    src={all.src}
                    frameBorder="0"
                    allowFullScreen
                    title={all.name}
                  />
                </div>
              )}
            <div className={classes.description}>
              <h1>
                <span>Name :: </span>
                {all.name}
              </h1>
              <h1>
                <span>Country :: </span>
                {all.area}
              </h1>
              <ul className={classes.ingredient}>
                <li>- Ingredient -</li>
                {ingredient.map((item) => <li key={Math.random()}>{item}</li>)}
              </ul>
            </div>
          </div>
        )
      }
    </>
  );
};

export default MealDetails;
