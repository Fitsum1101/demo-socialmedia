import React from "react";

const TextInput = ({ placeholder, type, value, name }) => {
  return (
    <input
      type={type}
      value={value ? value : ""}
      name={name}
      placeholder={placeholder}
    />
  );
};

export default TextInput;
