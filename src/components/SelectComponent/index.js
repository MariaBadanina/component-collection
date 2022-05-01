import React from "react";
import ErrorMessage from "../ErrorMessage";
import styles from "./styles.module.scss";

export default (props) => {
  const {
    register,
    error,
    name,
    required,
    errorMessage,
    defaultOptionLabel,
    options,
    value,
    setValue,
    customStyles,
    label,
  } = props;
  return (
    <div className={styles.container}>
      <div className={styles.selectContainer}>
        <select
          className={`${styles.select} ${customStyles} common-button`}
          style={{
            border: error[name]
              ? "1px solid var(--errorMessage)"
              : "1px solid transparent",
            color: value ? "var(--textRegular)" : "var(--textLight)",
          }}
          name={name}
          {...register(`${name}`, {
            onChange: (e) => setValue(e.target.value),
            required: required,
          })}
        >
          <option value="">{defaultOptionLabel}</option>
          {options?.map((item, idx) => {
            return (
              <option key={idx} value={item[label]}>
                {item.label}
              </option>
            );
          })}
        </select>
      </div>
      {errorMessage && (
        <ErrorMessage errorMessage={errorMessage} name={name} error={error} />
      )}
    </div>
  );
};
