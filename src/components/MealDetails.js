/* eslint-disable */
import { useParams, useLocation } from 'react-router-dom';
import { getDetails } from '../store/actions/fetchDetails';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const MealDetails = () => {
  const dispatch = useDispatch();
  const id = useParams().id.slice(1);
  useEffect(() => {
    dispatch(getDetails(id));
  }, [])

  let detail;
  const selectDetails = useSelector((state) => state.mealDetail).mealDetail.meals;
  const fetchDetailStatus = useSelector((state) => state.mealDetail).status;
  const all = {
    name: '',
    area: '',
    src: '',
    ingredient: []
  }
  if (selectDetails) {
    detail = selectDetails;
    all.name = `${detail[0].strMeal}`
    all.area = `${detail[0].strArea}`
    all.src = `${detail[0].strYoutube.replace('watch?v=', 'embed/')}`
    Array.from(Array(20), (e, i) => {
      const ingred = detail[0][`strIngredient${i}`];
      if (ingred) all.ingredient.push(ingred);
    })
  }

  const ingredient = all.ingredient;

  return (
    <>
      {fetchDetailStatus === 'loading' && <h1>Loading......</h1>}
      {fetchDetailStatus === 'success' &&
        <div>
          <h4>Title: {all.name}</h4>
          <h4>Country: {all.area}</h4>
          <ul>
            {ingredient.map((i) => {
              return <li key={Math.random()}>{i}</li>
            })}
          </ul>
          <iframe
            width="420"
            height="480"
            src={all.src}
            frameBorder="0"
            allowFullScreen
            title={all.name}
          />
        </div>
       }

    </>
  );
};

export default MealDetails;
