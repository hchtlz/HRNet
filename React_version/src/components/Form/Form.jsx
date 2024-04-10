import './Form.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import formDataFields from "../../datas/data";
import states from "../../datas/states";
import departments from "../../datas/departments";
import { Dropdown } from 'primereact/dropdown';
import { DatePicker } from 'rsuite';
import 'rsuite/dist/rsuite.min.css';
import { Modal } from 'modal-react-komponent';

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

  const modalSuccess = Modal({ title: 'Employee created !', message: 'The employee has been created successfully', buttonText: 'Close' });

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
        const modalError = Modal({ message: `${requiredFields.map((field, index) => !field && formDataFields[index].label).join(', ')} are required`, title: 'Error', buttonText: 'Close' });
        modalError.openModal();
        return;
      }

      const employees = JSON.parse(localStorage.getItem('employees')) || [];
      employees.push(formData);
      localStorage.setItem('employees', JSON.stringify(employees));
      
      modalSuccess.openModal();
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
              name={field.name}
              value={formData[field.name]}
              onChange={value => handleChange(value, field.name)}
              className="form-input rsuite"
              placeholder={field.placeholder}
              shouldDisableDate={(date) => field.name === 'dateOfBirth' ? date > new Date() : false}
            />
          ) : field.name === 'state' ? (
            <Dropdown 
              value={formData.state} 
              onChange={(e) => handleChange(e.value, 'state')} 
              options={states} 
              optionLabel="name" 
              placeholder="Select a State"
              className="form-input"
            />
          ) : field.name === 'department' ? (
            <Dropdown
              value={formData.department}
              onChange={(e) => handleChange(e.value, 'department')}
              options={departments}
              optionLabel="name"
              placeholder="Select a Department"
              className="form-input"
            />
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
      <button type="submit" className="form-button">Submit</button>
    </form>
  );
}