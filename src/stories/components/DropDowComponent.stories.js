import React from "react";
import DropDownComponent from "../../components/DropDownComponent";

const options = [
  "Option 1",
  "Option 2",
  "Option 3",
  "Option 4",
  "Option 5",
  "Option 6",
];

export const Base = () => (
  <div style={{ margin: "100px auto", width: "300px" }}>
    <DropDownComponent options={options} />{" "}
  </div>
);

export default {
  title: "Components/DropDownComponent",
  parameters: {
    options: {
      showPanel: false,
    },
  },
};
