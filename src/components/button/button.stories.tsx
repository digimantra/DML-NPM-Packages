import { action } from "@storybook/addon-actions";
import type { Meta, StoryFn } from "@storybook/react";
import { fn } from "@storybook/test";
import { Button } from "./button";

// Meta information for the Button component
const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    background: { control: "color" },
    textColor: { control: "color" },
  },

  args: { onClick: fn() },
};

// Export the meta information
export default meta;

// Define the story template
const Template: StoryFn = (args: any) => <Button {...args} />;

// Default story for the Button component
export const Default = Template.bind({});
Default.args = {
  label: "Click me",
  buttonType: "default",
  disabled: false,
  px: 16,
  py: 12,
};

// Story for the primary variant of the Button component
export const Primary = Template.bind({});
Primary.args = {
  label: "Primary",
  buttonType: "primary",
  onClick: action("clicked"),
  disabled: false,
};

// Story for the secondary variant of the Button component
export const Secondary = Template.bind({});
Secondary.args = {
  label: "Secondary",
  buttonType: "secondary",
  disabled: false,
  onClick: action("clicked"),
};
