import React from "react";
import Button from "../Button";

export default ({ reset, setSent }) => {
  return (
    <div>
      <div
        className="heading-s"
        style={{
          marginBottom: "var(--spc-xs)",
          color: "var(--textAccent)",
        }}
      >
        Thank you!
      </div>
      <div
        className="body-default"
        style={{
          marginBottom: "var(--spc-m)",
          color: "var(--textRegular)",
        }}
      >
        We have received your information and will get back to you soon!
      </div>
      <Button
        appearance="secondary"
        buttonText="Reset form"
        onClick={() => {
          reset();
          setSent(false);
        }}
      />
    </div>
  );
};
