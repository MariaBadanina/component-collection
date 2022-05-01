import * as React from "react";
import Button from "../../components/Button/index";

const buttonContainer = {
  background: "var(--ui01)",
  padding: "var(--spc-m) var(--spc-xxl)",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  textAlign: "center",
  justifyContent: "center",
};

const ButtonsContent = ({}) => {
  return (
    <>
      <div
        style={{
          margin: "var(--spc-xs)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Button
          appearance="primary01"
          buttonText="Primary 01"
          marginBottom="var(--spc-xxxs)"
        />
        <Button
          appearance="primary01"
          buttonText="Primary 01 disabled"
          disabled
        />
      </div>
      <div
        style={{
          margin: "var(--spc-xs)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Button
          appearance="primary02"
          buttonText="Primary 02"
          marginBottom="var(--spc-xxxs)"
        />
        <Button
          appearance="primary02"
          buttonText="Primary 02 disabled"
          disabled
        />
      </div>
      <div
        style={{
          margin: "var(--spc-xs)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Button
          appearance="secondary"
          buttonText="Secondary"
          marginBottom="var(--spc-xxxs)"
        />
        <Button
          appearance="secondary"
          buttonText="Secondary disabled"
          disabled
        />
      </div>
      <div
        style={{
          margin: "var(--spc-xs)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Button
          appearance="link"
          buttonText="Link"
          marginBottom="var(--spc-xs)"
        />
        <Button appearance="link" buttonText="Link disabled" disabled />
      </div>
    </>
  );
};

export const Base = () => (
  <div className={buttonContainer}>
    <ButtonsContent />
  </div>
);

export default {
  title: "DesignSystem/Buttons",
  parameters: {
    layout: "fullscreen",
    options: {
      showPanel: false,
    },
  },
};
