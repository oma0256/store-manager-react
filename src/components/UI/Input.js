import React from 'react';
import Form from 'react-bootstrap/Form';

const Input = props => {
  const { label, type, placeholder, onChange, value, name } = props;

  return (
    <Form.Group>
      <Form.Label>{label}</Form.Label>
      <Form.Control
        type={type}
        placeholder={placeholder}
        name={name}
        onChange={onChange}
        value={value}
      />
    </Form.Group>
  );
};

export default Input;
