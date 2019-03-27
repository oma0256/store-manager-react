import * as actionTypes from '../actions/actionTypes';
import axios from 'axios';

export const requestStarted = isRetrieving => {
  return {
    type: actionTypes.REQUEST_STARTED,
    isRetrieving
  };
};

export const fetchProductsSucceded = products => {
  return {
    type: actionTypes.FETCH_PRODUCTS_SUCCESS,
    products
  };
};

export const requestFailed = (errorMsg, isRetrieving) => {
  return {
    type: actionTypes.REQUEST_FAILED,
    errorMsg,
    isRetrieving
  };
};

export const dismissMessage = () => {
  return {
    type: actionTypes.DISMISS_MESSAGE
  };
};

export const requestAddProductSucceded = payload => {
  return {
    type: actionTypes.REQUEST_ADD_PRODUCT_SUCCEDED,
    msg: payload.msg,
    product: payload.product
  };
};

export const showModal = () => {
  return {
    type: actionTypes.SHOW_MODAL
  };
};

export const closeModal = () => {
  return {
    type: actionTypes.CLOSE_MODAL
  };
};

export const fetchProducts = payload => {
  return dispatch => {
    dispatch(requestStarted(true));
    const { token } = payload;
    return axios
      .get('https://oma-store-manager-api.herokuapp.com/api/v2/products', {
        headers: { Authorization: `Bearer ${token}` }
      })
      .then(response => dispatch(fetchProductsSucceded(response.data.products)))
      .catch(() =>
        dispatch(
          requestFailed(
            'Something went wrong, please check your internet connection.',
            true
          )
        )
      );
  };
};

export const requestAddProduct = payload => {
  return dispatch => {
    dispatch(requestStarted(false));
    const { token, data } = payload;
    return axios
      .post(
        'https://oma-store-manager-api.herokuapp.com/api/v2/products',
        data,
        { headers: { Authorization: `Bearer ${token}` } }
      )
      .then(response =>
        dispatch(
          requestAddProductSucceded({
            msg: 'Product added.',
            product: response.data.product
          })
        )
      )
      .catch(error => {
        const errorMsg = !error.response
          ? 'Something went wrong, please check your internet connection.'
          : 'Product with this name already exists.';
        dispatch(requestFailed(errorMsg, false));
      });
  };
};
