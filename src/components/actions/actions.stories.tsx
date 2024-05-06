import { action } from "@storybook/addon-actions";
import type { Meta, Story } from "@storybook/react";

import { Actions } from "./actions";

const meta: Meta<typeof Actions> = {
  title: "components/Actions",
  component: Actions,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;

const Template: Story = (args: any) => <Actions {...args} />;

// Default story for the Button component
export const Default = Template.bind({});

Default.args = {
  show: false,
  setShow: () => {}, // Assuming setShow is a function
  list: [
    {
      id: 1,
      name: "view",
      action: action("view"),
    },
    {
      id: 2,
      name: "delete",
      action: action("deleted"),
    },
    {
      id: 3,
      name: "edit",
      action: action("edited"),
    },
  ],
};
