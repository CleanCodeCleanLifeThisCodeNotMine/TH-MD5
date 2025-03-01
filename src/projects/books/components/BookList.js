import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAllBooks, deleteBook } from '../services/api';
import { Table, Button, Container, Alert } from 'react-bootstrap';

const BookList = () => {
  const [books, setBooks] = useState([]);
  const [showAlert, setShowAlert] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    loadBooks();
  }, []);

  const loadBooks = async () => {
    try {
      const data = await getAllBooks();
      setBooks(data);
    } catch (error) {
      console.error('Error loading books:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteBook(id);
      setShowAlert(true);
      loadBooks();
    } catch (error) {
      console.error('Error deleting book:', error);
    }
  };

  return (
    <Container>
      <h1 className="my-4">Library</h1>
      <Button 
        variant="primary" 
        className="mb-3"
        onClick={() => navigate('add')}
      >
        Add a new Book
      </Button>

      {showAlert && (
        <Alert 
          variant="success" 
          onClose={() => setShowAlert(false)} 
          dismissible
        >
          Book deleted successfully!
        </Alert>
      )}

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Title</th>
            <th>Quantity</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {books.map(book => (
            <tr key={book.id}>
              <td>{book.title}</td>
              <td>{book.quantity}</td>
              <td>
                <Button 
                  variant="info" 
                  className="me-2"
                  onClick={() => navigate(`edit/${book.id}`)}
                >
                  Edit
                </Button>
                <Button 
                  variant="danger"
                  onClick={() => handleDelete(book.id)}
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default BookList; 