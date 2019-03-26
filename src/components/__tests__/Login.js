import React from 'react';
import { shallow } from 'enzyme';
import { Login } from '../Login';

describe('Login', () => {
  const onSubmitHandlerMock = jest.fn();
  const loginProps = {
    login: {
      loading: false,
      errorMsg: ''
    },
    onSubmitHandler: onSubmitHandlerMock
  };
  const login = shallow(<Login {...loginProps} />);

  it('renders correctly', () => {
    expect(login).toMatchSnapshot();
  });

  it('calls onSubmitHandler on form submission', () => {
    login.find('Form').simulate('submit');
    expect(onSubmitHandlerMock).toHaveBeenCalled();
  });
});
