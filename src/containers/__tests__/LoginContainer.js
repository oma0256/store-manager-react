import React from 'react';
import { shallow } from 'enzyme';
import { LoginContainer } from '../LoginContainer';

describe('Login Container', () => {
  const loginFetchMock = jest.fn();
  const dismissLoginErrorMock = jest.fn();
  const loginContainerProps = {
    loginFetch: loginFetchMock,
    dismissLoginError: dismissLoginErrorMock
  };
  const loginContainer = shallow(<LoginContainer {...loginContainerProps} />);
  const loginContainerInstance = loginContainer.instance();

  it('renders correctly', () => {
    expect(loginContainer).toMatchSnapshot();
  });

  it('onSubmitHandler dispatches loginFetch action creator', () => {
    loginContainerInstance.onSubmitHandler({ preventDefault: jest.fn() });
    expect(loginFetchMock).toHaveBeenCalled();
  });

  it('onDismissHandler dispatches dismissLoginError action creator', () => {
    loginContainerInstance.onDismissHandler();
    expect(dismissLoginErrorMock).toHaveBeenCalled();
  });

  it('onChangeHandler changes state when called', () => {
    loginContainerInstance.onChangeHandler({
      target: { name: 'email', value: 'okay@email.com' }
    });
    expect(loginContainer.state().email).toBe('okay@email.com');
    loginContainerInstance.onChangeHandler({
      target: { name: 'password', value: 'okay' }
    });
    expect(loginContainer.state().password).toBe('okay');
  });
});
