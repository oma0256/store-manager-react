import React from 'react';
import { shallow } from 'enzyme';
import Product from '../Product';

describe('Product', () => {
  const product = shallow(<Product />);

  it('renders correctly', () => {
    expect(product).toMatchSnapshot();
  });
});
