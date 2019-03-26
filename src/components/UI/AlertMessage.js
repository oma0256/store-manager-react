import React from 'react';
import Alert from 'react-bootstrap/Alert';

const AlertMessage = props => {
  const { variant, message, onDismiss } = props;
  return (
    <Alert dismissible variant={variant} onClick={onDismiss}>
      <p>{message}</p>
    </Alert>
  );
};

export default AlertMessage;
