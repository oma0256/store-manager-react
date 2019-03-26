import loginReducer from '../login';
import {
  LOGIN_STARTED,
  LOGIN_SUCCESS,
  LOGIN_FAILED,
  DISMISS_LOGIN_ERROR
} from '../../actions/actionTypes';

describe('Login Reducer', () => {
  const state = {
    loading: false,
    user: {},
    errorMsg: ''
  };

  it('returns initial state if action provide does not exist', () => {
    expect(loginReducer(state, { type: 'akks' })).toEqual(state);
  });

  it('LOGIN_STARTED action updates loading to true in state', () => {
    expect(loginReducer(state, { type: LOGIN_STARTED }).loading).toBe(true);
  });

  it('LOGIN_SUCCESS action updates loading to false and user object in state', () => {
    expect(loginReducer(state, { type: LOGIN_SUCCESS, user: {} }).loading).toBe(
      false
    );
    expect(loginReducer(state, { type: LOGIN_SUCCESS, user: {} }).user).toEqual(
      {}
    );
  });

  it('LOGIN_FAILED action updates loading to false and errorMsg in state', () => {
    expect(
      loginReducer(state, { type: LOGIN_FAILED, errorMsg: 'fsd' }).loading
    ).toBe(false);
    expect(
      loginReducer(state, { type: LOGIN_FAILED, errorMsg: 'fsd' }).errorMsg
    ).toEqual('fsd');
  });

  it('DISMISS_LOGIN_ERROR action sets errorMsg to empty string in state', () => {
    expect(loginReducer(state, { type: DISMISS_LOGIN_ERROR }).errorMsg).toBe(
      ''
    );
  });
});
