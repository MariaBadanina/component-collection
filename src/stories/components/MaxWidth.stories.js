import React from "react";
import MaxWidth from "../../components/MaxWidth";

export const Base = () => {
  return (
    <div
      style={{
        background: "var(--ui03)",
        height: "50vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
      }}
    >
      <MaxWidth>
        <div
          style={{
            background: "var(--textRegular)",
            minHeight: "100px",
            color: "var(--textInverse)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            padding: "var(--spc-s)",
          }}
          className="heading-l"
        >
          Responsive container for each breakpoint
        </div>
      </MaxWidth>
    </div>
  );
};

export default {
  title: "DesignSystem/MaxWidth",
  parameters: {
    options: {
      showPanel: false,
    },
  },
};
