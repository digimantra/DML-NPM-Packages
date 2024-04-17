import { Avatar } from "./Avatar";

export default {
  title: "Avatar",
  component: Avatar,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],

  argTypes: {
    color: { control: "color" },
    outline: { control: "color" },
    borderColor: { control: "color" },
  },
};

export const Default = {
  args: {
    type: "",
    outline: "#000000",
  },
};

export const Fill = {
  args: {
    type: "fill",
    color: "#cb4d2e",
  },
};

export const Image = {
  args: {
    image:
      "https://images.unsplash.com/photo-1554151228-14d9def656e4?q=80&w=3086&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    type: "fill",
  },
};
