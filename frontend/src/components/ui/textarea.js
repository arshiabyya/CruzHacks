import React from 'react';

export const Textarea = ({ placeholder, value, onChange, ...props }) => {
  return (
    <textarea
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      {...props}
      style={{
        padding: '8px',
        border: '1px solid #ccc',
        borderRadius: '4px',
        width: '100%',
        minHeight: '80px',
        marginBottom: '10px',
      }}
    />
  );
};
