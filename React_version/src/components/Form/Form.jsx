import './Form.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import formDataFields from "../../datas/data";
import states from "../../datas/states";
import { DatePicker, SelectPicker } from 'rsuite';
import 'rsuite/dist/rsuite.min.css';

export default function Form() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    dateOfBirth: null,
    startDate: null,
    street: '',
    city: '',
    state: '',
    zipCode: '',
    department: '',
  });

  const navigate = useNavigate();

  const handleChange = (value, name) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const requiredFields = [formData.firstName, formData.lastName];

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!requiredFields.every(Boolean)) {
      alert('First name and Last name are required');
      return;
    }

    const employees = JSON.parse(localStorage.getItem('employees')) || [];
    employees.push(formData);
    localStorage.setItem('employees', JSON.stringify(employees));
    navigate('/employees/list');
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      {formDataFields.map((field, index) => (
        <label key={index} className="form-label">
          <span className="form-label-text">{field.label}</span>
          {field.name === 'dateOfBirth' || field.name === 'startDate' ? (
            <DatePicker
              oneTap
              format="MM/dd/yyyy"
              name={field.name}
              value={formData[field.name]}
              onChange={value => handleChange(value, field.name)}
              className="form-input rsuite"
              placeholder={field.placeholder}
            />
          ) : field.name === 'department' ? (
            <select
              name="department"
              value={formData.department}
              onChange={(e) => handleChange(e.target.value, 'department')}
              className="form-input"
            >
              <option value="">Select State</option>
              {states.map((state, index) => (
                <option key={index} value={state.abbreviation}>{state.name}</option>
              ))}
            </select>
          ) : (
            <input
              type={field.type}
              name={field.name}
              value={formData[field.name]}
              onChange={e => handleChange(e.target.value, field.name)}
              className="form-input"
              placeholder={field.placeholder}
            />
          )}
        </label>
      ))}
      <button type="submit" className="form-button">Save</button>
    </form>
  );
}