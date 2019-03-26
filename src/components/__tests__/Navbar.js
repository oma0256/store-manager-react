import React from 'react';
import { shallow } from 'enzyme';
import NavBar from '../NavBar';

describe('Navbar', () => {
  const navBar = shallow(<NavBar />);

  it('renders correctly', () => {
    expect(navBar).toMatchSnapshot();
  });
});
