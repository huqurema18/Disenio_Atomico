import React from 'react';
import './Input.css';
const InputField = ({ label, name, value, onChange, required }) => (
  <div>
    <label>{label}</label>
    <input type="text" name={name} value={value} onChange={onChange} required={required} />
  </div>
);

export default InputField;