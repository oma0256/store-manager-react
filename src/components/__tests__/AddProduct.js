import React from 'react';
import { shallow } from 'enzyme';
import { AddProduct } from '../AddProduct';

describe('Add Product', () => {
  const closeModalHandlerMock = jest.fn();
  const onSubmitHandlerMock = jest.fn();
  const addProductProps = {
    closeModalHandler: closeModalHandlerMock,
    onSubmitHandler: onSubmitHandlerMock
  };
  const addProduct = shallow(<AddProduct {...addProductProps} />);

  it('renders correctly', () => {
    expect(addProduct).toMatchSnapshot();
  });

  it('calls onSubmitHandler on form submission', () => {
    addProduct.find('Form').simulate('submit');
    expect(onSubmitHandlerMock).toHaveBeenCalled();
  });

  it('calls closeModalHandler on modal hide', () => {
    addProduct.find('Bootstrap(Modal)').simulate('hide');
    expect(closeModalHandlerMock).toHaveBeenCalled();
  });
});
