import { Popup } from "./Popup";

export default {
  title: "Popup",
  component: Popup,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    iconBackground: { control: "color" },
    iconColor: { control: "color" },
  },
};

export const Default = {
  args: {
    children: "this is text",
  },
};
