// InputField.js
import React from 'react';

const InputField = ({ label, type, name, value, onChange, required }) => {
  return (
    <div>
      <label>{label}</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
      />
    </div>
  );
};

export default InputField;
