import { expect, test } from '@jest/globals';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../store/index';
import CategoryFilter, { categoreis } from '../containers/CategoryFilter/CategoryFilter';

test('Render CategoryFilter component without problems', async () => {
  render(<Provider store={store}><CategoryFilter /></Provider>);
});

test('Check the value of select box when change', async () => {
  const { getAllByTestId } = render(<Provider store={store}><CategoryFilter /></Provider>);
  const options = getAllByTestId('select-option');

  for (let i = 0; i < categoreis.length; i += 1) {
    const categoryVal = categoreis[i];
    expect(options[i].value).toBe(categoryVal);
  }
  expect(options[0].selected).toBe(true);
});
