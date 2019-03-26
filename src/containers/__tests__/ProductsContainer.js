import React from 'react';
import { shallow } from 'enzyme';
import { ProductsContainer } from '../ProductsContainer';

describe('Login Container', () => {
  const fetchProductsMock = jest.fn();
  const showModalMock = jest.fn();
  const closeModalMock = jest.fn();
  const requestAddProductMock = jest.fn();
  const dismissMessageMock = jest.fn();
  const productsContainerProps = {
    fetchProducts: fetchProductsMock,
    showModal: showModalMock,
    closeModal: closeModalMock,
    requestAddProduct: requestAddProductMock,
    dismissMessage: dismissMessageMock
  };
  const productsContainer = shallow(
    <ProductsContainer {...productsContainerProps} />
  );
  const productsContainerInstance = productsContainer.instance();

  it('renders correctly', () => {
    expect(productsContainer).toMatchSnapshot();
  });

  it('onSubmitHandler dispatches requestAddProduct action creator', () => {
    productsContainerInstance.onSubmitHandler({ preventDefault: jest.fn() });
    expect(requestAddProductMock).toHaveBeenCalled();
  });

  it('showModalHandler dispatches showModal action creator', () => {
    productsContainerInstance.showModalHandler();
    expect(showModalMock).toHaveBeenCalled();
  });

  it('closeModalHandler dispatches closeModal action creator', () => {
    productsContainerInstance.closeModalHandler();
    expect(closeModalMock).toHaveBeenCalled();
  });

  it('componentDidMount dispatches fetchProducts action creator', () => {
    productsContainerInstance.componentDidMount();
    expect(fetchProductsMock).toHaveBeenCalled();
  });

  it('onDismissHandler dispatches dismissMessage action creator', () => {
    productsContainerInstance.onDismissHandler();
    expect(dismissMessageMock).toHaveBeenCalled();
  });

  it('onChangeHandler changes state when called', () => {
    productsContainerInstance.onChangeHandler({
      target: { name: 'name', value: 'okay' }
    });
    expect(productsContainer.state().name).toBe('okay');
    productsContainerInstance.onChangeHandler({
      target: { name: 'price', value: 90 }
    });
    expect(productsContainer.state().price).toBe(90);
    productsContainerInstance.onChangeHandler({
      target: { name: 'quantity', value: 8 }
    });
    expect(productsContainer.state().quantity).toBe(8);
  });
});
