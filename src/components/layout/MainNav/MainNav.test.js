import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from '@wojtekmaj/enzyme-adapter-react-17';
import MainNav from "./MainNav";
import findElement from '../../../test';

Enzyme.configure({ adapter: new EnzymeAdapter() });

const setup = () => shallow(<MainNav />);

test('navbar render without crashing', () => {
  const wrapper = setup();
  const navbarComponent = findElement(wrapper, 'navbar');
  expect(navbarComponent.length).toBe(1);
});

test('renders logo', () => {
  const wrapper = setup();
  const logo = findElement(wrapper, 'logo');
  expect(logo.text()).toContain('HappyMeal');
});
