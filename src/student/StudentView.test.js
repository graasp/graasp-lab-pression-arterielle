import React from 'react';
import { shallow } from 'enzyme';
import StudentView from './StudentView';

describe('<StudentView />', () => {
  const props = {
    t: jest.fn(),
    dispatchTitleState: jest.fn(),
    handleSection: jest.fn(),
    toggleTitle: jest.fn(),
    postMessage: jest.fn(),
    themeColor: '#FFF',
  };
  const component = shallow(<StudentView {...props} />);

  it('renders correctly', () => {
    expect(component).toMatchSnapshot();
  });
});
