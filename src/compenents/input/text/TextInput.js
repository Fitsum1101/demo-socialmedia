import React from "react";

const TextInput = ({ placeholder, ref, type, value, name }) => {
  return <input type={type} defaultValue={value} name={name} placeholder={placeholder} ref={ref} />;
};

export default TextInput;
