import React from 'react';
import { connect } from 'react-redux';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Input from './UI/Input';
import Spinner from './UI/Spinner';
import AlertMessage from './UI/AlertMessage';

export const Login = props => {
  const {
    onChangeHandler,
    email,
    password,
    onSubmitHandler,
    login,
    onDismissHandler,
    disabled
  } = props;
  const { loading, errorMsg } = login;
  const loginBtn = loading ? <Spinner /> : 'Login';
  const alert = errorMsg ? (
    <AlertMessage
      variant="danger"
      message={errorMsg}
      onDismiss={onDismissHandler}
    />
  ) : null;

  return (
    <Container>
      <Col lg={{ span: 8, offset: 2 }}>
        <Card body className="m-5 p-3">
          {alert}
          <h3 className="text-center">Store Manager Login</h3>
          <Form onSubmit={onSubmitHandler}>
            <Input
              label="Email"
              type="text"
              placeholder="Enter Email"
              name="email"
              onChange={onChangeHandler}
              value={email}
            />
            <Input
              label="Password"
              type="password"
              placeholder="Enter Password"
              name="password"
              onChange={onChangeHandler}
              password={password}
            />
            <Button
              variant="primary"
              type="submit"
              block
              disabled={loading || disabled}
            >
              {loginBtn}
            </Button>
          </Form>
        </Card>
      </Col>
    </Container>
  );
};

const mapStateToProps = state => {
  return {
    login: state.login
  };
};

export default connect(mapStateToProps)(Login);
