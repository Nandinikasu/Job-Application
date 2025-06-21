import React, { useEffect, useState } from 'react';
import axios from 'axios';

function ApplicationList() {
  const [applications, setApplications] = useState([]);

  // Load applications when component mounts
  useEffect(() => {
    fetchApplications();
  }, []);

  const fetchApplications = () => {
    axios.get('http://localhost:5000/api/applications')
      .then(res => setApplications(res.data))
      .catch(err => console.error(err));
  };

  // Handle delete button click
  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this application?")) {
      axios.delete(`http://localhost:5000/api/applications/${id}`)
        .then(() => {
          setApplications(applications.filter(app => app._id !== id));
        })
        .catch(err => console.error(err));
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Submitted Applications</h2>
      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Resume</th>
            <th>Position</th>
            <th>Date</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {applications.map(app => (
            <tr key={app._id}>
              <td>{app.name}</td>
              <td>{app.email}</td>
              <td><a href={app.resumeLink} target="_blank" rel="noopener noreferrer">View Resume</a></td>
              <td>{app.position}</td>
              <td>{new Date(app.date).toLocaleString()}</td>
              <td>
                <button onClick={() => handleDelete(app._id)} style={{ background: 'red', color: 'white' }}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ApplicationList;

