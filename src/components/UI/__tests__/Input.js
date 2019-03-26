import React from 'react';
import { shallow } from 'enzyme';
import Input from '../Input';

describe('Input', () => {
  const onChangeMock = jest.fn();
  const inputProps = {
    onChange: onChangeMock
  };
  const input = shallow(<Input {...inputProps} />);

  it('renders correctly', () => {
    expect(input).toMatchSnapshot();
  });

  it('calls onChange function when input value has changed', () => {
    input.find('FormControl').simulate('change');
    expect(onChangeMock).toHaveBeenCalled();
  });
});
