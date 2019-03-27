import axios from 'axios';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
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
  requestAddProductSucceded,
  fetchProducts,
  requestAddProduct
} from '../products';

describe('products action creators', () => {
  const createMockStore = configureMockStore([thunk]);
  const store = createMockStore({});

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
    expect(requestAddProductSucceded({ msg: 'cool', product: {} })).toEqual({
      type: REQUEST_ADD_PRODUCT_SUCCEDED,
      msg: 'cool',
      product: {}
    });
  });

  it('showModal creates action of type SHOW_MODAL', () => {
    expect(showModal()).toEqual({ type: SHOW_MODAL });
  });

  it('closeModal creates action of type CLOSE_MODAL', () => {
    expect(closeModal()).toEqual({ type: CLOSE_MODAL });
  });

  it('fetchProducts dispatches fetchProductsSucceded on successful fetch of products', () => {
    axios.get.mockResolvedValue({ data: { products: [] } });
    return store.dispatch(fetchProducts({ token: 'fsd' })).then(() => {
      expect(store.getActions()[0]).toEqual({
        type: REQUEST_STARTED,
        isRetrieving: true
      });
      expect(store.getActions()[1]).toEqual({
        type: FETCH_PRODUCTS_SUCCESS,
        products: []
      });
    });
  });

  it('fetchProducts dispatches requestFailed on failed fetch of products', () => {
    axios.get.mockRejectedValue({});
    return store.dispatch(fetchProducts({ token: 'fsd' })).then(() => {
      expect(store.getActions()[2]).toEqual({
        type: REQUEST_STARTED,
        isRetrieving: true
      });
      expect(store.getActions()[3]).toEqual({
        type: REQUEST_FAILED,
        errorMsg:
          'Something went wrong, please check your internet connection.',
        isRetrieving: true
      });
    });
  });

  it('requestAddProduct dispatches requestAddProductSucceded on add of product', () => {
    axios.post.mockResolvedValue({ data: { product: {} } });
    return store
      .dispatch(requestAddProduct({ token: 'fsd', data: {} }))
      .then(() => {
        expect(store.getActions()[4]).toEqual({
          type: REQUEST_STARTED,
          isRetrieving: false
        });
        expect(store.getActions()[5]).toEqual({
          type: REQUEST_ADD_PRODUCT_SUCCEDED,
          product: {},
          msg: 'Product added.'
        });
      });
  });

  it('requestAddProduct dispatches requestFailed on failure add of product', () => {
    axios.post.mockRejectedValue({});
    return store
      .dispatch(requestAddProduct({ token: 'fsd', data: {} }))
      .then(() => {
        expect(store.getActions()[6]).toEqual({
          type: REQUEST_STARTED,
          isRetrieving: false
        });
        expect(store.getActions()[7]).toEqual({
          type: REQUEST_FAILED,
          errorMsg:
            'Something went wrong, please check your internet connection.',
          isRetrieving: false
        });
      });
  });
});
