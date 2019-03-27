import React, { Component } from 'react';
import { connect } from 'react-redux';
import Products from '../components/Products';
import {
  fetchProducts,
  requestAddProduct,
  showModal,
  closeModal,
  dismissMessage
} from '../store/actions/products';

export class ProductsContainer extends Component {
  state = {
    name: '',
    price: '',
    quantity: ''
  };

  componentDidMount = () => {
    const token = localStorage.getItem('token');
    this.props.fetchProducts({ token });
  };

  showModalHandler = () => this.props.showModal();

  closeModalHandler = () => this.props.closeModal();

  onChangeHandler = e => this.setState({ [e.target.name]: e.target.value });

  onSubmitHandler = e => {
    e.preventDefault();
    const { name, price, quantity } = this.state;
    const token = localStorage.getItem('token');
    const data = {
      name,
      unit_cost: parseInt(price),
      quantity: parseInt(quantity)
    };
    this.props.requestAddProduct({ data, token });
  };

  onDismissHandler = () => this.props.dismissMessage();

  render() {
    const productsProps = {
      ...this.state,
      ...this.props,
      showModalHandler: this.showModalHandler,
      closeModalHandler: this.closeModalHandler,
      onChangeHandler: this.onChangeHandler,
      onSubmitHandler: this.onSubmitHandler,
      onDismissHandler: this.onDismissHandler
    };
    return <Products {...productsProps} />;
  }
}

const mapStateToProps = state => {
  return {
    show: state.products.show,
    errorMsg: state.products.errorMsg,
    message: state.products.message
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchProducts: payload => dispatch(fetchProducts(payload)),
    requestAddProduct: payload => dispatch(requestAddProduct(payload)),
    showModal: () => dispatch(showModal()),
    closeModal: () => dispatch(closeModal()),
    dismissMessage: () => dispatch(dismissMessage())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductsContainer);
