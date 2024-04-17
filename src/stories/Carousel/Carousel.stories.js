import { fn } from "@storybook/test";
import { Carousel } from "./Carousel";
export default {
  title: "Carousel ",
  component: Carousel,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},

  args: { onClick: fn() },
};

export const Default = {
  args: {},
};
