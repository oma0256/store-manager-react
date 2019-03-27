import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Input from './UI/Input';

export const AddProduct = props => {
  const {
    show,
    closeModalHandler,
    alertError,
    onSubmitHandler,
    onChangeHandler,
    name,
    price,
    quantity,
    loading,
    isRetrieving,
    addProductBtn
  } = props;

  return (
    <Modal show={show} onHide={closeModalHandler}>
      <div className="m-2">{alertError}</div>
      <Modal.Header closeButton>
        <Modal.Title>Add Product</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={onSubmitHandler}>
          <Input
            label="Name"
            type="text"
            placeholder="Enter product name"
            name="name"
            onChange={onChangeHandler}
            value={name}
          />
          <Input
            label="Price"
            type="number"
            placeholder="Enter product price"
            name="price"
            onChange={onChangeHandler}
            password={price}
          />
          <Input
            label="Quantity"
            type="number"
            placeholder="Enter product quantity"
            name="quantity"
            onChange={onChangeHandler}
            password={quantity}
          />
          <Button
            variant="primary"
            type="submit"
            block
            disabled={
              !name || !price || !quantity || (loading && !isRetrieving)
            }
          >
            {addProductBtn}
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default AddProduct;
