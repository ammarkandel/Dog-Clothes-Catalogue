import getDetails from '../../store/actions/fetchDetails';
import getMeals from '../../store/actions/fetchMeals';
import store from '../../store/index';

test('Check the data of meal details', async () => {
  const id = '52772';
  await store.dispatch(getDetails(id))
  const state = store.getState();

  expect(state.mealDetail.status).toBe('success');
  const detailData = await state.mealDetail.mealDetail;
  expect(detailData.meals[0].idMeal).toBe(id);
}, 15000)

test('Check the data of meals list if it is related to the category', async () => {
  await store.dispatch(getMeals('Seafood'))
  const state = store.getState();

  expect(state.meals.status).toBe('success');
  const mealListData = await state.meals.meals
  expect(mealListData.meals[2].strMeal).toBe('Escovitch Fish');
}, 15000)
