import { expect, test } from '@jest/globals';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter, Route } from 'react-router-dom';
import store from '../store/index';
import MealDetails from '../containers/MealDetails/MealDetails';

test('Render MealDetails component without problems', async () => {
  render(
    <Provider store={store}>
      <MemoryRouter initialEntries={['/meals/:52772']}>
        <Route path='meals/:id'> <MealDetails /> </Route>
      </MemoryRouter>
    </Provider>
  );
});
