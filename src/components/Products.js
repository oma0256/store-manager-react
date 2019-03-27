import React from 'react';
import { connect } from 'react-redux';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Product from './Product';
import Spinner from './UI/Spinner';
import AlertMessage from './UI/AlertMessage';
import AddProduct from './AddProduct';

export const Products = props => {
  const {
    productsState: { products, loading, isRetrieving } = {},
    showModalHandler,
    errorMsg,
    onDismissHandler,
    message
  } = props;

  const alertError = errorMsg ? (
    <AlertMessage
      variant="danger"
      message={errorMsg}
      onDismiss={onDismissHandler}
    />
  ) : null;

  const alertMessage = message ? (
    <AlertMessage
      variant="success"
      message={message}
      onDismiss={onDismissHandler}
    />
  ) : null;

  const addProductBtn = loading && !isRetrieving ? <Spinner /> : 'Add Product';

  let toRender;
  if (loading && isRetrieving) {
    toRender = (
      <div className="text-center">
        <Spinner />
      </div>
    );
  } else {
    let productsArea;
    if (products.length > 0) {
      productsArea = products.map(product => (
        <Product
          key={product.id}
          name={product.name}
          price={product.unit_cost}
          quantity={product.quantity}
        />
      ));
    } else {
      productsArea = '<h3>There are no products yet</h3>';
    }
    const addProductProps = {
      ...props,
      alertError,
      addProductBtn,
      loading,
      isRetrieving
    };
    toRender = (
      <Container>
        <Card body className="m-5">
          <Col md={{ span: 6, offset: 3 }}>
            {alertMessage}
            {alertError}
            <Button onClick={showModalHandler}>Add Product</Button>
            <AddProduct {...addProductProps} />
            <h3 className="text-center">Products</h3>
            {productsArea}
          </Col>
        </Card>
      </Container>
    );
  }

  return <React.Fragment>{toRender}</React.Fragment>;
};

const mapStateToProps = state => {
  return {
    productsState: state.products
  };
};

export default connect(mapStateToProps)(Products);
