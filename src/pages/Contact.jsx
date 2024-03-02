import React, { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [formErrors, setFormErrors] = useState({
    name: false,
    email: false,
    message: false
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form validation
    let errors = {};
    let hasErrors = false;

    if (!formData.name.trim()) {
      errors.name = true;
      hasErrors = true;
    }

    if (!formData.email.trim() || !isValidEmail(formData.email)) {
      errors.email = true;
      hasErrors = true;
    }

    if (!formData.message.trim()) {
      errors.message = true;
      hasErrors = true;
    }

    setFormErrors(errors);

    if (!hasErrors) {
      // Submit form data
      console.log('Form data:', formData);

      // You can use fetch or axios to send the form data to your backend
      fetch('/submit-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      })
      .then(response => {
        if (response.ok) {
          console.log('Form submitted successfully');
        } else {
          console.error('Error submitting form');
        }
      })
      .catch(error => {
        console.error('Error submitting form:', error);
      });
    }
  };

  const isValidEmail = (email) => {
    // Basic email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  return (
    <div className="text-center mt-4">
      <h1>Contact Page</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name</label>
          <input
            type="text"
            className={`form-control ${formErrors.name ? 'is-invalid' : ''}`}
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
          {formErrors.name && <div className="invalid-feedback">Please enter your name.</div>}
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email address</label>
          <input
            type="email"
            className={`form-control ${formErrors.email ? 'is-invalid' : ''}`}
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
          {formErrors.email && <div className="invalid-feedback">Please enter a valid email address.</div>}
        </div>
        <div className="mb-3">
          <label htmlFor="message" className="form-label">Message</label>
          <textarea
            className={`form-control ${formErrors.message ? 'is-invalid' : ''}`}
            id="message"
            name="message"
            rows="4"
            value={formData.message}
            onChange={handleInputChange}
            required
          ></textarea>
          {formErrors.message && <div className="invalid-feedback">Please enter your message.</div>}
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
      <div style={{ marginBottom: '20px' }}></div>
      <div className="progress" role="progressbar" aria-label="Animated striped example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
        <div className="progress-bar progress-bar-striped progress-bar-animated" style={{ width: '90%' }}>YOU ARE SO CLOSE TO HIRING ME! JUST SEND THAT EMAIL TO FILL THE BAR!</div>
      </div>
    </div>
  );
}