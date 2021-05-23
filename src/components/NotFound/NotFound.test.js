import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from '@wojtekmaj/enzyme-adapter-react-17';
import findElement from '../../test';
import NotFound from './NotFound';

Enzyme.configure({ adapter: new EnzymeAdapter() });

const setup = () => shallow(<NotFound />);

test('notfound render without crashing', () => {
  const wrapper = setup();
  const notfoundTitle = findElement(wrapper, 'notfound');
  expect(notfoundTitle.text()).toContain('404 Not Found');
});
