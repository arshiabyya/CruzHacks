import React from 'react';

export const Input = ({ type = 'text', placeholder, value, onChange, ...props }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      {...props}
      style={{
        padding: '8px',
        border: '1px solid #ccc',
        borderRadius: '4px',
        width: '100%',
        marginBottom: '10px',
      }}
    />
  );
};
