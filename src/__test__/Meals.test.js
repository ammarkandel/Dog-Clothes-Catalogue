import { test, expect } from '@jest/globals';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { StaticRouter } from 'react-router-dom';
import store from '../store/index';
import getMeals from '../store/actions/fetchMeals';
import Meals from '../containers/Meals/Meals';

test('Render Meals component without problems', async () => {
  render(
    <Provider store={store}>
      <StaticRouter>
        <Meals />
      </StaticRouter>
    </Provider>,
  );
});

test('Test the default value of filter value', async () => {
  const state = store.getState();
  const { findByTestId } = render(
    <Provider store={store}>
      <StaticRouter>
        <Meals />
      </StaticRouter>
    </Provider>,
  );
  const mealsCategory = await findByTestId('meals_title');
  expect(mealsCategory.textContent).toContain(state.meals.filter);
});

test('Check the first meal from list to match category search', async () => {
  await store.dispatch(getMeals('Beef'));
  const state = store.getState();
  const { findAllByTestId } = render(
    <Provider store={store}>
      <StaticRouter>
        <Meals />
      </StaticRouter>
    </Provider>,
  );
  expect(state.meals.status).toBe('success');
  const allCategoryMeals = await findAllByTestId('meals_list');
  expect(allCategoryMeals[0].textContent).toContain(state.meals.meals.meals[0].strMeal);
}, 15000);

test('If dispatch with wrong category', async () => {
  await store.dispatch(getMeals('wrong category'));
  const state = store.getState();
  const { findByTestId } = render(
    <Provider store={store}>
      <StaticRouter>
        <Meals />
      </StaticRouter>
    </Provider>,
  );
  const fetchMeals = await findByTestId('fetch_meals');
  expect(fetchMeals.textContent).toContain('wrong');
  expect(state.meals.meals.meals).toBe(null);
}, 15000);
