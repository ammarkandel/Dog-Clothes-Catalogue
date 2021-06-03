import { test } from '@jest/globals';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { StaticRouter } from 'react-router-dom';
import store from '../store/index';
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
