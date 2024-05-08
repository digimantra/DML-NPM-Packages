import type { Meta, StoryFn } from "@storybook/react";
import { fn } from "@storybook/test";
import { InputField } from "./inputField";

// Meta information for the Button component
const meta: Meta<typeof InputField> = {
  title: "components/InputField",
  component: InputField,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},

  args: { onChange: fn() },
};

// Export the meta information
export default meta;

// Define the story template
const Template: StoryFn = (args: any) => <InputField {...args} />;

// Default story for the Button component
export const Default = Template.bind({});
Default.args = {
  placeholder: "Enter value",
};

export const Label = Template.bind({});
Label.args = {
  label: "Name",
  placeholder: "Enter value",
};

export const Email = Template.bind({});
Email.args = {
  label: "Email",
  type: "email",
  placeholder: "Enter Email",
};

export const TextArea = Template.bind({});
TextArea.args = {
  label: "Post",
  type: "textarea",
  placeholder: "Enter Post Content",
};

export const Number = Template.bind({});
Number.args = {
  label: "Contact",
  type: "number",
  placeholder: "Enter valid contact",
  selectList: [
    { id: 1, value: "+91", name: "IND" },
    { id: 2, value: "+00", name: "US" },
    { id: 3, value: "+92", name: "UK" },
  ],
};

export const Checkbox = Template.bind({});
Checkbox.args = {
  sideLabel: "Checked",
  type: "checkbox",
};

export const Radio = Template.bind({});
Radio.args = {
  sideLabel: "Select",
  type: "radio",
};
