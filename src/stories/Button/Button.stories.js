import { fn } from "@storybook/test";
import { Button } from "./Button";

export default {
  title: "Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    backgroundColor: { control: "color" },
    textColor: { control: "color" },
  },

  args: { onClick: fn() },
};

export const Default = {
  args: {
    type: "default",
    label: "Button",
    disabled: false,
    backgroundColor: null,
  },
};

export const Primary = {
  args: {
    type: "primary",
    label: "Button",
    disabled: false,
  },
};

export const Secondary = {
  args: {
    type: "secondary",
    label: "Button",
    disabled: false,
  },
};
