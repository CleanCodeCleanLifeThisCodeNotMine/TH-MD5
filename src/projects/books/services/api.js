import axios from 'axios';

const BASE_URL = 'https://my-json-server.typicode.com/codegym-vn/mock-api-books/books';

export const getAllBooks = async () => {
  const response = await axios.get(BASE_URL);
  return response.data;
};

export const getBookById = async (id) => {
  const response = await axios.get(`${BASE_URL}/${id}`);
  return response.data;
};

export const createBook = async (bookData) => {
  const response = await axios.post(BASE_URL, bookData);
  return response.data;
};

export const updateBook = async (id, bookData) => {
  const response = await axios.put(`${BASE_URL}/${id}`, bookData);
  return response.data;
};

export const deleteBook = async (id) => {
  const response = await axios.delete(`${BASE_URL}/${id}`);
  return response.data;
}; 