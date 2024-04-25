import React, { useState } from 'react';
import InputField from './InputField';
import SubmitButton from './button';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    cv: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
      setFormData({ ...formData, cv: e.target.files[0] });
      console.log("setteled");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Store form submission in local storage
    const submissions = JSON.parse(localStorage.getItem('submissions')) || [];
    const newSubmission = { ...formData };
    submissions.push(newSubmission);
    localStorage.setItem('submissions', JSON.stringify(submissions));
    // Reset form after submission
    setFormData({
      name: '',
      email: '',
      message: '',
      cv: null,
    });
  };

  return (
    <form onSubmit={handleSubmit} enctype="multipart/form-data">
      <InputField
        label="Name:"
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        required
      />

      <InputField
        label="Email:"
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        required
      />

      <div>
        <label>Message:</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label>Upload CV:</label>
        <input type="file" accept=".pdf,.doc,.docx" onChange={handleFileChange} required />
      </div>

      <button type="submit">Submit</button>
      <SubmitButton/>
      </form>
      
  );
};

export default ContactForm;
