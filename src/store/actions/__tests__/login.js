import {
  loginStarted,
  loginSuccess,
  dismissLoginError,
  loginFailed
} from '../login';
import {
  LOGIN_STARTED,
  LOGIN_SUCCESS,
  LOGIN_FAILED,
  DISMISS_LOGIN_ERROR
} from '../actionTypes';

describe('login action creators', () => {
  it('loginStarted creates action of type LOGIN_STARTED', () => {
    expect(loginStarted()).toEqual({ type: LOGIN_STARTED });
  });

  it('loginSuccess creates action of type LOGIN_SUCCESS', () => {
    expect(loginSuccess({})).toEqual({ type: LOGIN_SUCCESS, user: {} });
  });

  it('loginFailed creates action of type LOGIN_FAILED', () => {
    expect(loginFailed('')).toEqual({ type: LOGIN_FAILED, errorMsg: '' });
  });

  it('dismissLoginError creates action of type DISMISS_LOGIN_ERROR', () => {
    expect(dismissLoginError()).toEqual({ type: DISMISS_LOGIN_ERROR });
  });
});
