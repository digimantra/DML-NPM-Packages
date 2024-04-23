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
    setShow: () => {}, // Assuming setShow is a function
    list: [
      {
        id: 1,
        name: "view",
        action: () => {
          console.log("see the list");
        }
      },
      {
        id: 2,
        name: "delete",
        action: () => {
          console.log("deleted");
        }
      },
      {
        id: 3,
        name: "edit",
        action: () => {
          console.log("Edited");
        }
      }
    ]
  }
};
