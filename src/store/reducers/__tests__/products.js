import {
  REQUEST_STARTED,
  FETCH_PRODUCTS_SUCCESS,
  REQUEST_FAILED,
  DISMISS_MESSAGE,
  SHOW_MODAL,
  CLOSE_MODAL,
  REQUEST_ADD_PRODUCT_SUCCEDED
} from '../../actions/actionTypes';
import productsReducer from '../products';

describe('Products Reducer', () => {
  const state = {
    loading: false,
    products: [],
    errorMsg: '',
    message: '',
    show: false,
    isRetrieving: false
  };

  it('returns initial state if action provide does not exist', () => {
    expect(productsReducer(state, { type: 'akks' })).toEqual(state);
  });

  it('REQUEST_STARTED action updates loading to true and isRetrieving in state', () => {
    let newState = productsReducer(state, {
      type: REQUEST_STARTED,
      isRetrieving: true
    });
    expect(newState.loading).toBe(true);
    expect(newState.isRetrieving).toBe(true);
    newState = productsReducer(state, {
      type: REQUEST_STARTED,
      isRetrieving: false
    });
    expect(newState.isRetrieving).toBe(false);
  });

  it('FETCH_PRODUCTS_SUCCESS action updates loading to false and products array in state', () => {
    const newState = productsReducer(state, {
      type: FETCH_PRODUCTS_SUCCESS,
      products: []
    });
    expect(newState.loading).toBe(false);
    expect(newState.products).toEqual([]);
  });

  it('REQUEST_FAILED action updates loading to false, sets errorMsg, message and isRetrieving in state', () => {
    let newState = productsReducer(state, {
      type: REQUEST_FAILED,
      errorMsg: 'okay',
      isRetrieving: true
    });
    expect(newState.loading).toBe(false);
    expect(newState.isRetrieving).toBe(true);
    expect(newState.message).toBe('');
    expect(newState.errorMsg).toBe('okay');
    newState = productsReducer(state, {
      type: REQUEST_FAILED,
      errorMsg: 'okay',
      isRetrieving: false
    });
    expect(newState.isRetrieving).toBe(false);
  });

  it('DISMISS_MESSAGE action sets errorMsg and message to empty string in state', () => {
    const newState = productsReducer(state, { type: DISMISS_MESSAGE });
    expect(newState.message).toBe('');
    expect(newState.errorMsg).toBe('');
  });

  it('SHOW_MODAL action sets show to true in state', () => {
    const newState = productsReducer(state, { type: SHOW_MODAL });
    expect(newState.show).toBe(true);
  });

  it('CLOSE_MODAL action sets show to false in state', () => {
    const newState = productsReducer(state, { type: CLOSE_MODAL });
    expect(newState.show).toBe(false);
  });

  it('REQUEST_ADD_PRODUCT_SUCCEDED action updates loading and show to false sets message and errorMsg in state', () => {
    const newState = productsReducer(state, {
      type: REQUEST_ADD_PRODUCT_SUCCEDED,
      msg: 'cool'
    });
    expect(newState.show).toBe(false);
    expect(newState.loading).toBe(false);
    expect(newState.errorMsg).toBe('');
    expect(newState.message).toBe('cool');
  });
});
