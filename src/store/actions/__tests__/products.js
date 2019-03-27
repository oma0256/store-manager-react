import {
  REQUEST_STARTED,
  FETCH_PRODUCTS_SUCCESS,
  REQUEST_FAILED,
  DISMISS_MESSAGE,
  REQUEST_ADD_PRODUCT_SUCCEDED,
  SHOW_MODAL,
  CLOSE_MODAL
} from '../actionTypes';
import {
  requestStarted,
  fetchProductsSucceded,
  requestFailed,
  dismissMessage,
  showModal,
  closeModal,
  requestAddProductSucceded
} from '../products';

describe('products action creators', () => {
  it('requestStarted creates action of type REQUEST_STARTED', () => {
    expect(requestStarted(true)).toEqual({
      type: REQUEST_STARTED,
      isRetrieving: true
    });
  });

  it('fetchProductsSucceded creates action of type FETCH_PRODUCTS_SUCCESS', () => {
    expect(fetchProductsSucceded([])).toEqual({
      type: FETCH_PRODUCTS_SUCCESS,
      products: []
    });
  });

  it('requestFailed creates action of type REQUEST_FAILED', () => {
    expect(requestFailed('nice', false)).toEqual({
      type: REQUEST_FAILED,
      errorMsg: 'nice',
      isRetrieving: false
    });
  });

  it('dismissMessage creates action of type DISMISS_MESSAGE', () => {
    expect(dismissMessage()).toEqual({ type: DISMISS_MESSAGE });
  });

  it('requestAddProduct creates action of type REQUEST_ADD_PRODUCT_SUCCEDED', () => {
    expect(requestAddProductSucceded('cool')).toEqual({
      type: REQUEST_ADD_PRODUCT_SUCCEDED,
      msg: 'cool'
    });
  });

  it('showModal creates action of type SHOW_MODAL', () => {
    expect(showModal()).toEqual({ type: SHOW_MODAL });
  });

  it('closeModal creates action of type CLOSE_MODAL', () => {
    expect(closeModal()).toEqual({ type: CLOSE_MODAL });
  });
});
