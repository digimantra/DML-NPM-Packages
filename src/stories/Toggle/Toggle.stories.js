import { fn } from "@storybook/test";
import { Toggle } from "./Toggle";

export default {
  title: "Toggle",
  component: Toggle,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},

  args: { onClick: fn() },
};

export const Default = {
  args: {
    type: "default",
    label: "Toggle",
  },
};
