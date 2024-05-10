import type { Meta, StoryFn } from "@storybook/react";
import { useState } from "react";
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

const Template: StoryFn = (args: any) => {
  const [otp, setOtp] = useState(new Array(6).fill(""));

  return (
    <div className="flex items-center justify-center w-1/2 mx-auto h-screen">
      <OtpField
        {...args}
        hint="Enter OTP"
        label="OTP"
        otp={otp}
        setOtp={setOtp}
      />
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {
  label: "Secure code",
  hint: "Enter code to regenerate new password",
  otp: new Array(6).fill(""),
};
