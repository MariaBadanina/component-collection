import React from "react";
import styles from "./styles.module.scss";

export default ({
  children,
  display = "block",
  justifyContent,
  extraClass = "",
}) => {
  return (
    <div
      className={`${styles.container} ${extraClass}`}
      style={{ "--display": display, "--justifyContent": justifyContent }}
    >
      {children}
    </div>
  );
};
