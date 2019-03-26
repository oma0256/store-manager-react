import React from 'react';
import { shallow } from 'enzyme';
import Spinner from '../Spinner';

describe('Spinner', () => {
  const spinner = shallow(<Spinner />);

  it('renders correctly', () => {
    expect(spinner).toMatchSnapshot();
  });
});
