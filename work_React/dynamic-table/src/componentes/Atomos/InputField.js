import React from 'react';

const InputField = ({ label, name, value, onChange, required }) => (
  <div>
    <label>{label}</label>
    <input type="text" name={name} value={value} onChange={onChange} required={required} />
  </div>
);

export default InputField;