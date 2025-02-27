import React, { useState } from 'react';
import { Formik } from 'formik';
import './App.css';

const REGEX = {
  email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
  phone: /^[0-9]{10}$/,
};

function App() {
  const handleValidate = (values) => {
    const errors = {};
    
    if (!values.name || !values.name.trim()) {
      errors.name = 'Required';
    }
    
    if (!values.email || !values.email.trim()) {
      errors.email = 'Required';
    } else if (!REGEX.email.test(values.email)) {
      errors.email = 'Invalid email address';
    }
    
    if (!values.phone || !values.phone.trim()) {
      errors.phone = 'Required';
    } else if (!REGEX.phone.test(values.phone)) {
      errors.phone = 'Invalid phone number';
    }
    
    return errors;
  };

  const handleSubmit = () => {
    alert('Thêm liên hệ thành công');
  };

  return (
    <div>
      <h1>Contact Form</h1>
      <Formik
        initialValues={{ name: '', email: '', phone: '' }}
        validate={handleValidate}
        onSubmit={handleSubmit}
      >
        {({ values, errors, touched, handleSubmit, handleChange }) => (
          <form onSubmit={handleSubmit}>
            <div>
              <label>Name:</label>
              <input
                type="text"
                name="name"
                value={values.name}
                onChange={handleChange}
              />
              {errors.name && touched.name && <div className="error">{errors.name}</div>}
            </div>

            <div>
              <label>Email:</label>
              <input
                type="email"
                name="email"
                value={values.email}
                onChange={handleChange}
              />
              {errors.email && touched.email && <div className="error">{errors.email}</div>}
            </div>

            <div>
              <label>Phone:</label>
              <input
                type="tel"
                name="phone"
                value={values.phone}
                onChange={handleChange}
              />
              {errors.phone && touched.phone && <div className="error">{errors.phone}</div>}
            </div>

            <button type="submit">Submit</button>
          </form>
        )}
      </Formik>
    </div>
  );
}

export default App;









