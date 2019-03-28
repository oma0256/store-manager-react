import React, { Component } from 'react';
import { connect } from 'react-redux';
import Login from '../components/Login';
import { loginFetch, dismissLoginError } from '../store/actions/login';

export class LoginContainer extends Component {
  state = {
    email: '',
    password: '',
    disabled: true
  };

  UNSAFE_componentWillUpdate = (nextProps, nextState) => {
    const { email, password } = nextState;
    if (email !== this.state.email || password !== this.state.password) {
      const disabled = email && password ? false : true;
      this.setState({ disabled });
    }
  };

  onChangeHandler = e => this.setState({ [e.target.name]: e.target.value });

  onSubmitHandler = e => {
    e.preventDefault();
    const { email, password } = this.state;
    const payload = {
      data: {
        email,
        password
      },
      history: this.props.history
    };
    this.props.loginFetch(payload);
  };

  onDismissHandler = () => this.props.dismissLoginError();

  render() {
    const loginProps = {
      ...this.state,
      onChangeHandler: this.onChangeHandler,
      onSubmitHandler: this.onSubmitHandler,
      onDismissHandler: this.onDismissHandler
    };

    return <Login {...loginProps} />;
  }
}

const mapDispatchToProps = dispatch => {
  return {
    loginFetch: payload => dispatch(loginFetch(payload)),
    dismissLoginError: () => dispatch(dismissLoginError())
  };
};

export default connect(
  null,
  mapDispatchToProps
)(LoginContainer);
