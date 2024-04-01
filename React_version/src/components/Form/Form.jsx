import React, { useState } from 'react';
import Button from '../Button/Button';
import './Form.css';

const Form = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    startDate: '',
    street: '',
    city: '',
    state: '',
    zipCode: '',
    department: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <label className="form-label">
        <span className="form-label-text">First Name</span>
        <input
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          className="form-input"
          placeholder="Enter your first name"
        />
      </label>
      <label className="form-label">
        <span className="form-label-text">Last Name</span>
        <input
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          className="form-input"
          placeholder="Enter your last name"
        />
      </label>
      <label className="form-label">
        <span className="form-label-text">Date of Birth</span>
        <input
          type="date"
          name="dateOfBirth"
          value={formData.dateOfBirth}
          onChange={handleChange}
          className="form-input"
        />
      </label>
      <label className="form-label">
        <span className="form-label-text">Start Date</span>
        <input
          type="date"
          name="startDate"
          value={formData.startDate}
          onChange={handleChange}
          className="form-input"
        />
      </label>
      <fieldset className="form-fieldset">
        <legend className="form-legend">Address</legend>
        <label className="form-label">
          <span className="form-label-text">Street</span>
          <input
            type="text"
            name="street"
            value={formData.street}
            onChange={handleChange}
            className="form-input"
          />
        </label>
        <label className="form-label">
          <span className="form-label-text">City</span>
          <input
            type="text"
            name="city"
            value={formData.city}
            onChange={handleChange}
            className="form-input"
          />
        </label>
        <label className="form-label">
          <span className="form-label-text">State</span>
          <input
            type="text"
            name="state"
            value={formData.state}
            onChange={handleChange}
            className="form-input"
          />
        </label>
        <label className="form-label">
          <span className="form-label-text">Zip Code</span>
          <input
            type="text"
            name="zipCode"
            value={formData.zipCode}
            onChange={handleChange}
            className="form-input"
          />
        </label>
      </fieldset>
      <label className="form-label">
        <span className="form-label-text">Department</span>
        <input
          type="text"
          name="department"
          value={formData.department}
          onChange={handleChange}
          className="form-input"
        />
      </label>
      <Button title="Save" type="submit" className="form-button" />
    </form>
  );
};

export default Form;
