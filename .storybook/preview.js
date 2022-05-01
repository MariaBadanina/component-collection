import "./globalStyles/normalize.scss";
import "./globalStyles/global-styles.scss";

export const parameters = {
  options: {
    showPanel: false,
    storySort: {
      order: ["Elements", "Components", "Modules", "DesignSystem"],
    },
  },
  actions: { disable: true },
};
