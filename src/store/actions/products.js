import * as actionTypes from '../actions/actionTypes';
import axios from '../../axiosInstance';

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

export const requestAddProductSucceded = msg => {
  return {
    type: actionTypes.REQUEST_ADD_PRODUCT_SUCCEDED,
    msg
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
      .get('products', { headers: { Authorization: `Bearer ${token}` } })
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
      .post('products', data, { headers: { Authorization: `Bearer ${token}` } })
      .then(() => dispatch(requestAddProductSucceded('Product added.')))
      .catch(error => {
        const errorMsg = !error.response
          ? 'Something went wrong, please check your internet connection.'
          : 'Product with this name already exists.';
        dispatch(requestFailed(errorMsg, false));
      });
  };
};
