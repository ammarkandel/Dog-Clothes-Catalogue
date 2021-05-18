/* eslint-disable */
import { useParams } from 'react-router-dom';

const MealDetails = () => {
  const id = useParams().id.slice(1);
  const mealDetail = JSON.parse(localStorage.getItem(id));
  const detail = mealDetail[0].meals[0];
  const name = detail.strMeal;
  const area = detail.strArea;
  const src = detail.strYoutube.replace('watch?v=', 'embed/');
  const ingredient = [];

  Array.from(Array(20), (e, i) => {
    const ingred = detail[`strIngredient${i}`];
    if (ingred !== undefined && ingred) ingredient.push(ingred)
  })

  return (
    <>
      <h1>{name}</h1>
      <h1>From: {area}</h1>
      <div>
        <h1>ingredients:</h1>
        <ul>
          {ingredient.map((item) => {
            return <li key={Math.random()}>{item}</li>
          })}
        </ul>
      </div>
      {<iframe
        width="420"
        height="480"
        src={src}
        frameBorder="0"
        //allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title={name}
      />}
    </>
  )
}

export default MealDetails;
