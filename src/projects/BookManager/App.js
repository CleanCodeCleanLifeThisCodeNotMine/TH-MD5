import React, { useState } from 'react';
import { Formik } from 'formik';
import "./App.css";

function App() {
  const [books, setBooks] = useState([]);
  const [form, setForm] = useState({});
  const [indexSelected, setIndexSelected] = useState(-1);

  const handleChange = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value
    });
  };

  const handleValidate = (values) => {
    const errors = {};
    if (!values.title) {
      errors.title = 'Required';
    }
    if (!values.number) {
      errors.number = 'Required';
    }
    return errors;
  };

  const handleSelect = (book, index) => {
    setForm(book);
    setIndexSelected(index);
  };

  const handleDelete = (index) => {
    const newBooks = JSON.parse(JSON.stringify(books));
    newBooks.splice(index, 1);
    setBooks(newBooks);
  };

  const handleSubmit = () => {
    const newBooks = JSON.parse(JSON.stringify(books));
    if (indexSelected > -1) {
      newBooks.splice(indexSelected, 1, form);
    } else {
      newBooks.push(form);
    }
    setBooks(newBooks);
    setForm({});
    setIndexSelected(-1);
  };

  return (
    <div className="container">
      <h1>Quản lý sách</h1>
      <div className="form-add-book">
        <Formik
          initialValues={form}
          validate={handleValidate}
          onSubmit={handleSubmit}
        >
          {({ handleSubmit }) => (
            <form onSubmit={handleSubmit}>
              <div>
                <label>Tiêu đề:</label>
                <input
                  type="text"
                  name="title"
                  value={form.title || ''}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label>Số lượng:</label>
                <input
                  type="number"
                  name="number"
                  value={form.number || ''}
                  onChange={handleChange}
                />
              </div>
              <button type="submit">
                {indexSelected > -1 ? 'Cập nhật' : 'Thêm mới'}
              </button>
            </form>
          )}
        </Formik>
      </div>

      <div className="book-list">
        <h2>Danh sách sách</h2>
        <table>
          <thead>
            <tr>
              <th>STT</th>
              <th>Tiêu đề</th>
              <th>Số lượng</th>
              <th>Hành động</th>
            </tr>
          </thead>
          <tbody>
            {books.map((book, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{book.title}</td>
                <td>{book.number}</td>
                <td>
                  <button onClick={() => handleSelect(book, index)}>Sửa</button>
                  <button onClick={() => handleDelete(index)}>Xóa</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
