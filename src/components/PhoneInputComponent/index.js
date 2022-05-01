import React, { useState } from "react";
import ErrorMessage from "../ErrorMessage/index";
import styles from "./styles.module.scss";

export default (props) => {
  const { register, name, labelText, error, required, errorMessage } = props;
  const [active, setActive] = useState(false);
  const labelTextStyle = active ? "label" : "common-button";

  return (
    <div className={styles.container}>
      <div className={styles.inputContainer}>
        <label
          htmlFor={name}
          className={`${styles.label} ${labelTextStyle} `}
          style={{
            color: active
              ? error[name]
                ? "var(--errorMessage)"
                : "var(--textAccent)"
              : "var(--textLight)",
            top: active ? "25%" : "50%",
          }}
        >
          {labelText}
        </label>
        <input
          className={`${styles.input} common-button`}
          style={{
            border: error[name]
              ? "1px solid var(--errorMessage)"
              : "1px solid transparent",
          }}
          type="tel"
          name={name}
          onClick={() => setActive(true)}
          onFocus={() => setActive(true)}
          {...register(`${name}`, {
            required: required ? "This field is required" : null,
            pattern: {
              value: /^(( )?[0-9]{1}){5,128}$/i,
              message: "Please enter a real number",
            },
            onBlur: (e) =>
              e.target.value ? setActive(true) : setActive(false),
          })}
        />
      </div>
      {(errorMessage || error[name]?.message) && (
        <ErrorMessage
          errorMessage={errorMessage || error[name].message}
          name={name}
          error={error}
        />
      )}
    </div>
  );
};
