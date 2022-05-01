import React, { useState } from "react";
import styles from "./styles.module.scss";

export default ({ register, error, elements, label }) => {
  const [active, setActive] = useState(-1);
  return (
    <div>
      {label && <div className="body-inline">{label}</div>}
      <div className={styles.container}>
        {elements?.map((element, idx) => {
          return (
            <div className={styles.inputWrapper} key={idx}>
              <label
                htmlFor={element.value}
                className={styles.label}
                onClick={() => {
                  setActive(idx);
                }}
                style={{
                  "--color":
                    active === idx ? "var(--textAccent)" : "transparent",
                  border: error.study_englishLevel
                    ? "1px solid var(--errorMessage)"
                    : "1px solid transparent",
                }}
              >
                <input
                  type="radio"
                  id={element.value}
                  value={element.value}
                  {...register("study_englishLevel", {
                    required: true,
                  })}
                  className={styles.input}
                  checked={active === idx}
                />
              </label>
              <div className="body-inline">{element.label}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
