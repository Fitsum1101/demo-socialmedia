import React from "react";

const TextInput = ({ placeholder,  type, value, name, handleChange }) => {
  return (
    <input
      type={type}
      onChange={handleChange}
      defaultValue={value}
      name={name}
      placeholder={placeholder}
    />
  );
};

export default TextInput;
