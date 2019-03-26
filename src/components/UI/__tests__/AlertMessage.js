import React from 'react';
import { shallow } from 'enzyme';
import AlertMessage from '../AlertMessage';

describe('Alert Message', () => {
  const onDismissMock = jest.fn();
  const alertMessageProps = { onDismiss: onDismissMock };
  const alertMessage = shallow(<AlertMessage {...alertMessageProps} />);

  it('renders correctly', () => {
    expect(alertMessage).toMatchSnapshot();
  });

  it('calls onDismiss function when clicked', () => {
    alertMessage.simulate('click');
    expect(onDismissMock).toHaveBeenCalled();
  });
});
