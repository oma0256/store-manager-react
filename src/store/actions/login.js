import * as actionTypes from '../actions/actionTypes';
import axios from '../../axiosInstance';

export const loginStarted = () => {
  return {
    type: actionTypes.LOGIN_STARTED
  };
};

export const loginSuccess = user => {
  return {
    type: actionTypes.LOGIN_SUCCESS,
    user
  };
};

export const loginFailed = errorMsg => {
  return {
    type: actionTypes.LOGIN_FAILED,
    errorMsg
  };
};

export const dismissLoginError = () => {
  return {
    type: actionTypes.DISMISS_LOGIN_ERROR
  };
};

export const loginFetch = payload => {
  return dispatch => {
    dispatch(loginStarted());
    const { data, history } = payload;
    return axios
      .post('auth/login', data)
      .then(response => {
        const { user, token } = response.data;
        dispatch(loginSuccess(user));
        localStorage.setItem('token', token);
        history.push('/products');
      })
      .catch(error => {
        const errorMsg = error.response
          ? 'Invalid email or password.'
          : 'Something went wrong, please check your internet connection.';
        dispatch(loginFailed(errorMsg));
      });
  };
};
