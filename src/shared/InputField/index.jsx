import React from "react";
import { Text } from "..";
import "./styles.css";

export const Input = ({
  label,
  register,
  required,
  error,
  inputProps,
  leftComponent,
}) => (
  <div className={`input-field-container ${error ? "error" : ""}`}>
    <Text className="form-label">{label}</Text>
    <div className="input-field">
      {leftComponent ? (
        <div className="left-component-wrapper">{leftComponent}</div>
      ) : null}
      <input {...register(label, { required })} {...inputProps} />
    </div>
  </div>
);
