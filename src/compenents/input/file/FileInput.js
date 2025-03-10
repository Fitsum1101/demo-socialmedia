import React from "react";
import classes from "./FileInput";
const FileInput = ({ placeholder }) => {
  return (
    <input
      className={classes.input}
      type="file"
      name="file"
      placeholder="choose image"
    />
  );
};

export default FileInput;
