import React from 'react';
import { shallow } from 'enzyme';
import {
  Col,
} from 'reactstrap';
import ImageManager from './ImageManager';

const props = {
  t: jest.fn(),
  handleSection: jest.fn(),
  heartBeat: false,
  pressure: false,
  applySection: false,
};

describe('render image manager component tests', () => {
  it('has one instance of image manager', () => {
    const wrapped = shallow(<ImageManager {...props} />);
    expect(wrapped.find(Col).first().hasClass('col-md-12'));
  });
});
