import React from "react";

const FormGroup = ({ children }) => {
  return (
    <div className="flex flex-col items-center w-full max-w-lg my-1">
      {children}
    </div>
  );
};

export default FormGroup;
