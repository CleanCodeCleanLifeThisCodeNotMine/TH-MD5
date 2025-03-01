import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import BookList from './components/BookList';
import AddBook from './components/AddBook';
import EditBook from './components/EditBook';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="" element={<BookList />} />
        <Route path="add" element={<AddBook />} />
        <Route path="edit/:id" element={<EditBook />} />
      </Routes>
    </div>
  );
};

export default App; 