import axios from 'axios';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {
  loginStarted,
  loginSuccess,
  dismissLoginError,
  loginFailed,
  loginFetch
} from '../login';
import {
  LOGIN_STARTED,
  LOGIN_SUCCESS,
  LOGIN_FAILED,
  DISMISS_LOGIN_ERROR
} from '../actionTypes';

describe('login action creators', () => {
  const createMockStore = configureMockStore([thunk]);
  const store = createMockStore({});

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

  it('loginFetch dispatches loginSuccess on successful login of user', () => {
    axios.post.mockResolvedValue({ data: { user: {}, token: 'wef' } });
    return store
      .dispatch(loginFetch({ data: {}, history: { push: jest.fn() } }))
      .then(() => {
        expect(store.getActions()[0]).toEqual({
          type: LOGIN_STARTED
        });
        expect(store.getActions()[1]).toEqual({
          type: LOGIN_SUCCESS,
          user: {}
        });
      });
  });

  it('loginFetch dispatches loginFailed on failed login of user', () => {
    axios.post.mockRejectedValue({ response: {} });
    return store
      .dispatch(loginFetch({ data: {}, history: { push: jest.fn() } }))
      .then(() => {
        expect(store.getActions()[2]).toEqual({
          type: LOGIN_STARTED
        });
        expect(store.getActions()[3]).toEqual({
          type: LOGIN_FAILED,
          errorMsg: 'Invalid email or password.'
        });
      });
  });
});
