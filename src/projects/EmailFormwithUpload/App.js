import React, { useState } from 'react';
import { Formik } from 'formik';
import "./App.css";

function App() {
  const REGEX = {
    email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
  };

  const [form, setForm] = useState({
    email: '',
    title: '',
    message: '',
    file: null
  });

  const handleChange = (event, setFieldValue) => {
    const { name, value, type, files } = event.target;
    const fieldValue = type === 'file' ? files[0] : value;
    
    setForm({
      ...form,
      [name]: fieldValue
    });
    
    // Đồng bộ với Formik
    setFieldValue(name, fieldValue);
  };

  const handleValidate = (values) => {
    const errors = {};
    
    if (!values.email) {
      errors.email = 'Required';
    } else if (!REGEX.email.test(values.email)) {
      errors.email = 'Invalid email address';
    }

    if (!values.title) {
      errors.title = 'Required';
    }

    if (!values.message) {
      errors.message = 'Required';
    }

    return errors;
  };

  const handleSubmit = (values, { setSubmitting }) => {
    if (values.email && values.title && values.message) {
      console.log('Form values:', values);
      alert('Sent successfully!!!');
    }
    setSubmitting(false);
  };

  return (
    <div className="container">
      <h1>Mail Form</h1>
      <Formik
        initialValues={form}
        validate={handleValidate}
        onSubmit={handleSubmit}
      >
        {({ errors, handleSubmit, touched, setFieldValue }) => (
          <form onSubmit={handleSubmit}>
            <div>
              <label>To:</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={(e) => handleChange(e, setFieldValue)}
              />
              {touched.email && errors.email && <div className="error">{errors.email}</div>}
            </div>

            <div>
              <label>Title:</label>
              <input
                type="text"
                name="title"
                value={form.title}
                onChange={(e) => handleChange(e, setFieldValue)}
              />
              {touched.title && errors.title && <div className="error">{errors.title}</div>}
            </div>

            <div>
              <label>Message:</label>
              <textarea
                name="message"
                value={form.message}
                onChange={(e) => handleChange(e, setFieldValue)}
              />
              {touched.message && errors.message && <div className="error">{errors.message}</div>}
            </div>

            <div>
              <label>File:</label>
              <input
                type="file"
                name="file"
                onChange={(e) => handleChange(e, setFieldValue)}
              />
            </div>

            <button type="submit">Submit</button>
          </form>
        )}
      </Formik>
    </div>
  );
}

export default App;
