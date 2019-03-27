import * as actionTypes from '../actions/actionTypes';

const initialState = {
  loading: false,
  products: [],
  errorMsg: '',
  message: '',
  show: false,
  isRetrieving: false
};

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.REQUEST_STARTED:
      return {
        ...state,
        loading: true,
        isRetrieving: action.isRetrieving
      };
    case actionTypes.FETCH_PRODUCTS_SUCCESS:
      return {
        ...state,
        loading: false,
        products: action.products
      };
    case actionTypes.REQUEST_FAILED:
      return {
        ...state,
        loading: false,
        errorMsg: action.errorMsg,
        message: '',
        isRetrieving: action.isRetrieving
      };
    case actionTypes.DISMISS_MESSAGE:
      return {
        ...state,
        errorMsg: '',
        message: ''
      };
    case actionTypes.REQUEST_ADD_PRODUCT_SUCCEDED:
      return {
        ...state,
        errorMsg: '',
        message: action.msg,
        loading: false,
        show: false
      };
    case actionTypes.SHOW_MODAL:
      return {
        ...state,
        show: true
      };
    case actionTypes.CLOSE_MODAL:
      return {
        ...state,
        show: false
      };
    default:
      return state;
  }
};

export default productsReducer;
