import MainNav from "./MainNav";
import * as ReactDOM from 'react-dom';
import { render } from '@testing-library/react';

test("renders the correct content", () => {
  const { getByText } = render(<MainNav />);

  getByText('HappyMeal');
})
