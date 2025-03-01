import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createBook } from '../services/api';
import { Form, Button, Container, Alert } from 'react-bootstrap';

const AddBook = () => {
  const [title, setTitle] = useState('');
  const [quantity, setQuantity] = useState('');
  const [showAlert, setShowAlert] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createBook({ title, quantity: parseInt(quantity) });
      setShowAlert(true);
      setTimeout(() => {
        navigate('..');
      }, 1500);
    } catch (error) {
      console.error('Error creating book:', error);
    }
  };

  return (
    <Container>
      <h1 className="my-4">Add a new Book</h1>
      
      {showAlert && (
        <Alert variant="success">
          Book created successfully!
        </Alert>
      )}

      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Quantity</Form.Label>
          <Form.Control
            type="number"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            required
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Add
        </Button>
      </Form>
    </Container>
  );
};

export default AddBook; 