import type { Meta, StoryFn } from "@storybook/react";
import { OtpField } from "./otpField";

// Meta information for the Button component
const meta: Meta<typeof OtpField> = {
  title: "Components/OtpField",
  component: OtpField,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;

const Template: StoryFn = (args: any) => <OtpField {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: "Secure code",
  hint: "Enter code to regenerate new password",
};
