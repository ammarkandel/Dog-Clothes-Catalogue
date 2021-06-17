import { test } from '@jest/globals';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter, Route } from 'react-router-dom';
import store from '../store/index';
import getDetails from '../store/actions/fetchDetails';
import MealDetails from '../containers/MealDetails/MealDetails';

test('Render MealDetails component without problems', async () => {
  render(
    <Provider store={store}>
      <MemoryRouter initialEntries={['/meals/:52772']}>
        <Route path="meals/:id">
          <MealDetails />
        </Route>
      </MemoryRouter>
    </Provider>,
  );
});

test('Check the details of the meal', async () => {
  const id = '52772';
  await store.dispatch(getDetails(id));
  const state = store.getState();
  expect(state.mealDetail.mealDetail.meals[0].strArea).toBe('Japanese');
}, 15000);

test('Check meal detail page title', async () => {
  const { findByTestId } = render(
    <Provider store={store}>
      <MemoryRouter initialEntries={['/meals/:52772']}>
        <Route path="meals/:id">
          <MealDetails />
        </Route>
      </MemoryRouter>
    </Provider>,
  );

  const pageTitle = await findByTestId('details_title');
  expect(pageTitle.textContent).toContain('Meal');
});
