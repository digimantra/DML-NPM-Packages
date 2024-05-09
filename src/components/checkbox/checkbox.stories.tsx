// Radio.stories.tsx

import { Meta, StoryFn } from "@storybook/react";
import { Checkbox, CheckboxProps } from "./checkbox";

// Meta information for the Radio component
const meta: Meta = {
  title: "Components/Checkbox",
  component: Checkbox,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    onChange: { action: "changed" }, // Declare the onChange action
  },
};

// Export the meta information
export default meta;

// Define the story template
const Template: StoryFn<CheckboxProps> = (args) => (
  <div style={{ display: "flex", gap: "10px" }}>
    <Checkbox {...args} value="option1" id="Checkbox1" />
    <Checkbox {...args} value="option2" id="radio2" />
  </div>
);

// Default story
export const Default = Template.bind({});
Default.args = {
  sideLabel: "Select",
  name: "group1",
  disabled: false,
};
