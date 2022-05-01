import React, { useState } from "react";
import ErrorMessage from "../ErrorMessage";
import styles from "./styles.module.scss";

export default (props) => {
  const {
    register,
    name,
    labelText,
    type = "text",
    error,
    required,
    errorMessage,
    customStyles,
    helperText,
  } = props;

  const [active, setActive] = useState(false);
  const labelTextStyle = active ? "label" : "common-button";
  return (
    <div className={`${styles.container} ${customStyles}`}>
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
            top: active ? "1px" : "16px",
            zIndex: active ? 3 : 2,
          }}
        >
          {labelText}
        </label>
        {type === "textarea" ? (
          <textarea
            rows="5"
            className={`${styles.input} common-button`}
            style={{
              border: error[name]
                ? "1px solid var(--errorMessage)"
                : "1px solid transparent",
              height: "96px",
            }}
            type={type}
            name={name}
            {...register(`${name}`, required)}
            onClick={() => setActive(true)}
            onFocus={() => setActive(true)}
            onBlur={(e) =>
              e.target.value ? setActive(true) : setActive(false)
            }
          ></textarea>
        ) : (
          <input
            className={`${styles.input} common-button`}
            style={{
              border: error[name]
                ? "1px solid var(--errorMessage)"
                : "1px solid transparent",
              height: "48px",
            }}
            type={type}
            name={name}
            {...register(`${name}`, required)}
            onClick={() => setActive(true)}
            onFocus={() => setActive(true)}
            onBlur={(e) =>
              e.target.value ? setActive(true) : setActive(false)
            }
          />
        )}
      </div>
      {(errorMessage || error[name]?.message) && (
        <ErrorMessage
          errorMessage={errorMessage || error[name].message}
          name={name}
          error={error}
        />
      )}
      {!error[name] && helperText && (
        <div
          className="errorMessage"
          style={{
            color: "var(--testRegular)",
            marginLeft: "var(--spc-xxxs)",
            position: "absolute",
          }}
        >
          {helperText}
        </div>
      )}
    </div>
  );
};
