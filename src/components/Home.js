import React from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <Container>
      <Col lg={{ span: 8, offset: 2 }}>
        <Card body className="text-center m-5 p-3">
          <p className="lead">
            Store Manager is a web application that helps store owners manage
            sales and product inventory records. This application is meant for
            use in a single store.
          </p>
          <Link to="/login">
            <Button>Login</Button>
          </Link>
        </Card>
      </Col>
    </Container>
  );
};

export default Home;
