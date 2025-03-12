import React from "react";

const TextInput = ({ placeholder, type, value, name }) => {
  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
    />
  );
};

export default TextInput;
