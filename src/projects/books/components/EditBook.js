import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getBookById, updateBook } from '../services/api';
import { Form, Button, Container, Alert } from 'react-bootstrap';

const EditBook = () => {
  const [title, setTitle] = useState('');
  const [quantity, setQuantity] = useState('');
  const [showAlert, setShowAlert] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    loadBook();
  }, []);

  const loadBook = async () => {
    try {
      const book = await getBookById(id);
      setTitle(book.title);
      setQuantity(book.quantity.toString());
    } catch (error) {
      console.error('Error loading book:', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateBook(id, { title, quantity: parseInt(quantity) });
      setShowAlert(true);
      setTimeout(() => {
        navigate('..');
      }, 1500);
    } catch (error) {
      console.error('Error updating book:', error);
    }
  };

  return (
    <Container>
      <h1 className="my-4">Edit Book</h1>
      
      {showAlert && (
        <Alert variant="success">
          Book updated successfully!
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
          Save
        </Button>
      </Form>
    </Container>
  );
};

export default EditBook; 