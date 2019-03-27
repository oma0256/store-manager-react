import React from 'react';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';

const Product = props => {
  const { name, price, quantity } = props;
  return (
    <Card body border="primary" className="mb-3">
      <Row>
        <Col lg={8} className="text-center text-lg-left">
          <Card.Title>{name}</Card.Title>
          <p>Price: UGX {price}</p>
          <p>QTY: {quantity}</p>
        </Col>
        <Col lg={4} className="text-center text-lg-left">
          <Button>Details</Button>
        </Col>
      </Row>
    </Card>
  );
};

export default Product;
