import React from "react";

const CostomInput = (props) => {
  const { type, i_id, placeholder, label, i_class } = props;
  return (
    <>
      <div className="form-floating mb-3">
        <input
          type={type}
          className={`form-control ${i_class}`}
          id={i_id}
          placeholder={placeholder}
        />
        <label htmlFor="email">{label}</label>
      </div>
    </>
  );
};

export default CostomInput;
