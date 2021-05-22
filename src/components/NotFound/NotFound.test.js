import NotFound from "./NotFound";
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from '@wojtekmaj/enzyme-adapter-react-17';
import { findElement } from "../../test";

Enzyme.configure({ adapter: new EnzymeAdapter() });

const setup = (props={}, state=null) => {
  return shallow(<NotFound {...props} />)
}

test('notfound render without crashing', () => {
  const wrapper = setup();
  const notfoundTitle = findElement(wrapper, 'notfound');
  expect(notfoundTitle.text()).toContain("404 Not Found");
})
