import * as actionTypes from '../actions/actionTypes';

const initialState = {
  loading: false,
  user: {},
  errorMsg: ''
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LOGIN_STARTED:
      return {
        ...state,
        loading: true
      };
    case actionTypes.LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        user: action.user
      };
    case actionTypes.LOGIN_FAILED:
      return {
        ...state,
        loading: false,
        errorMsg: action.errorMsg
      };
    case actionTypes.DISMISS_LOGIN_ERROR:
      return {
        ...state,
        errorMsg: ''
      };
    default:
      return state;
  }
};

export default loginReducer;
