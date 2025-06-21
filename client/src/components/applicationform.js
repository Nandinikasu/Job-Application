import React, { useState } from 'react';
import axios from 'axios';

function ApplicationForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    resumeLink: '',
    position: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/apply', formData);
      alert('Application submitted!');
      setFormData({ name: '', email: '', resumeLink: '', position: '' });
    } catch (err) {
      alert('Submission failed.');
      console.error(err);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ padding: '20px' }}>
      <h2>Job Application</h2>
      <input name="name" value={formData.name} onChange={handleChange} placeholder="Name" required /><br /><br />
      <input name="email" value={formData.email} onChange={handleChange} placeholder="Email" required /><br /><br />
      <input name="resumeLink" value={formData.resumeLink} onChange={handleChange} placeholder="Resume URL" required /><br /><br />
      <input name="position" value={formData.position} onChange={handleChange} placeholder="Position" required /><br /><br />
      <button type="submit">Submit</button>
    </form>
  );
}

export default ApplicationForm;
