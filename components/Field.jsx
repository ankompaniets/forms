import React, { Component } from "react";

const Field = props => {
	const {
		labelText,
		type,
		id,
		name,
		placeholder,
		value,
		onChange,
		error
	} = props;

	return (
		<div className="form-group">
			<style jsx>{`
          .invalid-feedback {
          	display: block;
          }
          .form-control--error {
          	border-color: #dc3545;
          }
      `}</style>
      <label htmlFor={id}>{labelText}</label>
      <input	        	
        type={type}
        className={`form-control ${error ? "form-control--error": null}`}
        id={id}
        placeholder={placeholder}
        value={value}
        name={name}
        onChange={onChange}
        autoComplete="false"
      />
      {error ? (<div className="invalid-feedback">{error}</div>) : null }      
	   </div>
	);
}

export default Field;