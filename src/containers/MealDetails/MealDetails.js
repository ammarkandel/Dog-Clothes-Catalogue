import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import getDetails from '../../store/actions/fetchDetails';

const MealDetails = () => {
  const dispatch = useDispatch();
  const id = useParams().id.slice(1);
  useEffect(() => {
    dispatch(getDetails(id));
  }, []);

  let detail;
  const selectDetails = useSelector((state) => state.mealDetail).mealDetail.meals;
  const fetchDetailStatus = useSelector((state) => state.mealDetail).status;
  const all = {
    name: '',
    area: '',
    src: '',
    ingredient: [],
  };
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
      {fetchDetailStatus === 'loading' && <h1>Loading......</h1>}

      {
        fetchDetailStatus === 'success'
        && (
          <div>
            <iframe
              width="420"
              height="480"
              src={all.src}
              frameBorder="0"
              allowFullScreen
              title={all.name}
            />
            <h1 data-test="title">
              Title:
              {all.name}
            </h1>
            <h2>
              Country:
              {all.area}
            </h2>
            <ul>
              {ingredient.map((i) => <li key={Math.random()}>{i}</li>)}
            </ul>
          </div>
        )
      }
    </>
  );
};

export default MealDetails;
