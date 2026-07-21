import React, { useState, useEffect } from 'react';

const RegisterationForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    companyName: '',
    email: '',
  });

  const [errors, setErrors] = useState({
    name: '',
    companyName: '',
    email: '',
  });

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    const storedFormData = JSON.parse(localStorage.getItem('formData'));
    if (storedFormData) {
      setFormData(storedFormData);
    }

    const isFormSubmitted = localStorage.getItem('formSubmitted') === 'true';
    setFormSubmitted(isFormSubmitted);

    const handleBeforeUnload = () => {
      // Clear form data when the page is refreshed
      localStorage.removeItem('formData');
      localStorage.removeItem('formSubmitted');
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isFormSubmitted(formData)) {
      setSuccessMessage('');
      setErrorMessage('Form already submitted!');
      return;
    }
    if(validateForm()) {
      localStorage.setItem('formData', JSON.stringify(formData));
      localStorage.setItem('formSubmitted', 'true');
      setFormSubmitted(true);
      setSuccessMessage('Form submitted successfully!');
      setErrorMessage('');
    }
  };

  const validateForm = () => {
    let valid = true;
    const newErrors = { name: '', email: '' };

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
      valid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
      valid = false;
    } else if (!isValidEmail(formData.email)) {
      newErrors.email = 'Invalid email format';
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const isValidEmail = (email) => {
    return /^\S+@\S+\.\S+$/.test(email);
  };

  const isFormSubmitted = (formData) => {
    const storedFormData = JSON.parse(localStorage.getItem('formData'));
    return (
      storedFormData &&
      storedFormData.name === formData.name &&
      storedFormData.companyName === formData.companyName &&
      storedFormData.email === formData.email
    );
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className='form-field'>
          <label className='required' htmlFor="name">Name</label>
          <input
            className='input-field'
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder='Enter your name'
          />
          {errors.name && <span className='invalid-field'>{errors.name}</span>}
        </div>
        <div className='form-field'>
          <label htmlFor="companyName">Company</label>
          <input
            className='input-field'
            type="text"
            id="companyName"
            name="companyName"
            value={formData.companyName}
            onChange={handleChange}
            placeholder='Enter your company name'
          />
        </div>
        <div className='form-field'>
          <label className='required' htmlFor="email">Email address</label>
          <input
            className='input-field'
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder='Enter your email address'
          />
          {errors.email && <span className='invalid-field'>{errors.email}</span>}
        </div>
        <button className='form-button' type="submit">Submit</button>
      </form>
      {successMessage && <div className='success-alert'>{successMessage}</div>}
      {errorMessage && <div className='error-alert'>{errorMessage}</div>}
    </div>
  );
};

export default RegisterationForm;
