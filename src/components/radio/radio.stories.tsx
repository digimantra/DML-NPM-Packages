// Radio.stories.tsx

import { Meta, StoryFn } from "@storybook/react";
import { Radio, RadioProps } from "./radio";

// Meta information for the Radio component
const meta: Meta = {
  title: "Components/Radio",
  component: Radio,
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
const Template: StoryFn<RadioProps> = (args) => (
  <div style={{ display: "flex", gap: "10px" }}>
    <Radio {...args} value="option1" id="radio1" />
    <Radio {...args} value="option2" id="radio2" />
  </div>
);

// Default story
export const Default = Template.bind({});
Default.args = {
  sideLabel: "Select",
  name: "group1",
  checkedValue: "check",
  disabled: false,
};
