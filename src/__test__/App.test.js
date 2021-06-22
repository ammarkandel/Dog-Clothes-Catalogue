import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';
import store from '../store/index';
import getMeals from '../store/actions/fetchMeals';
import getDetails from '../store/actions/fetchDetails';
import App from '../App';

test('App render meals with no errors', async () => {
  await store.dispatch(getMeals('Beef'));
  const history = createMemoryHistory();
  render(
    <Router history={history}>
      <Provider store={store}>
        <App />
      </Provider>
    </Router>,
  );

  expect(screen.getByText(/Loading/i)).toBeInTheDocument();
}, 15000);

test('Not found component render when wrong route', () => {
  const history = createMemoryHistory();
  history.push('/some/bad/route')
  render(
    <Router history={history}>
      <Provider store={store}>
        <App />
      </Provider>
    </Router>,
  );
  expect(screen.getByText(/404 Not Found/i)).toBeInTheDocument();
});

test('Render meal details and sure that data loading', async () => {
  await store.dispatch(getDetails('52874'));
  const { status } = store.getState().mealDetail;
  const history = createMemoryHistory();
  history.push('/meals/:52874')
  render(
    <Router history={history}>
      <Provider store={store}>
        <App />
      </Provider>
    </Router>,
  );
  expect(status).toBe('success');
  expect(screen.getByText(/Meal Details/i)).toBeInTheDocument();
  expect(screen.getByText(/Loading/i)).toBeInTheDocument();
}, 15000);
