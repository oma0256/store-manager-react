import React from 'react';
import { shallow } from 'enzyme';
import { Products } from '../Products';

describe('Products', () => {
  const productsProps = {
    productsState: {
      products: []
    }
  };
  const products = shallow(<Products {...productsProps} />);

  it('renders correctly', () => {
    expect(products).toMatchSnapshot();
  });
});
