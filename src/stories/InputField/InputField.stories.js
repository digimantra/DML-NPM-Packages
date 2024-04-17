import { fn } from "@storybook/test";
import { InputField } from "./InputField";

export default {
  title: "InputField",
  component: InputField,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],

  args: { onChange: fn() },
};

export const Default = {
  args: {
    placeholder: "Enter value",
  },
};

export const Label = {
  args: {
    label: "Email",
    placeholder: "Enter value",
  },
};

export const Password = {
  args: {
    label: "Password",
    placeholder: "Enter Password",
  },
};

export const Textarea = {
  args: {
    label: "Enter text",
    placeholder: "Enter text",
    type: "textarea",
  },
};

export const Contacts = {
  args: {
    label: "Contact",
    placeholder: "Enter Contact",
    type: "number",
  },
};

export const Checkbox = {
  args: {
    sideLabel: "check",
    type: "checkbox",
  },
};
export const Radio = {
  args: {
    sideLabel: "check",
    type: "radio",
  },
};
