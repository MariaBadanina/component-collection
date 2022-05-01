import * as React from "react";
import Carousel from "../../modudles/Carousel";

const elements = Array(5)
  .fill(0)
  .map((x, idx) => ({
    content: {
      title: `Name ${idx + 1}`,
      position: `Position ${idx + 1}`,
      quote:
        '"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi dignissim ut nibh eget porttitor."',
    },
  }));

export const Base = () => <Carousel elements={elements} />;

export default {
  title: "Modules/Carousel",
  parameters: {
    layout: "fullscreen",
    options: {
      showPanel: false,
    },
  },
};
