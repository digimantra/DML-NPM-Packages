import type { Meta, Story } from "@storybook/react";
import { Avatar } from "./avatar";

const meta: Meta<typeof Avatar> = {
  title: "components/Avatar",
  component: Avatar,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    color: { control: "color" },
    outline: { control: "color" },
    borderColor: { control: "color" },
  },
};

export default meta;

const Template: Story = (args: any) => <Avatar {...args} />;

// Default story for the Button component
export const Default = Template.bind({});

Default.args = {
  outline: "#000000",
};

export const Fill = Template.bind({});
Fill.args = {
  type: "fill",
  color: "#cb4d2e",
};

export const Image = Template.bind({});
Image.args = {
  image: `https://images.unsplash.com/photo-1601288496920-b6154fe3626a?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
};
