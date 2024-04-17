import { Actions } from "./Actions";

export default {
  title: "Actions",
  component: Actions,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],

  argTypes: {},
};

export const Default = {
  args: {
    show: false,
    setShow: false,
    list: ["edit", "view", "delete"],
  },
};
