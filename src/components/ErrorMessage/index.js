import React from "react";
import styles from "./styles.module.scss";

export default ({ error, name, errorMessage }) => {
  return (
    <div
      className={`${styles.container} errorMessage`}
      style={{
        visibility: error[name] ? "visible" : "hidden",
        opacity: error[name] ? "1" : "0",
      }}
    >
      {errorMessage}
    </div>
  );
};
