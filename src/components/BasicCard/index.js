import React from "react";

import styles from "./styles.module.scss";

export default ({ position, title, quote }) => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        {quote && <div className={`${styles.quote} quote`}>{quote}</div>}
        {title && <div className={`${styles.title} heading-s`}>{title}</div>}
        {position && <div className="body-default">{position}</div>}
      </div>
    </div>
  );
};
