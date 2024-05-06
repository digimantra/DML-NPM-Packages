import type { Meta, Story } from "@storybook/react";
import { fn } from "@storybook/test";
import { Notifications } from "./notification";

// Meta information for the Button component
const meta: Meta<typeof Notification> = {
  title: "Components/Notifications",
  component: Notifications,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},

  args: { onClick: fn() },
};

// Export the meta information
export default meta;

// Define the story template
const Template: Story = (args: any) => <Notifications {...args} />;

// Default story for the Button component
export const Default = Template.bind({});
Default.args = {
  icon: "o",
  data: [
    {
      id: 1,
      notificationContent: "You have a new message",
      dateTime: "2024-05-06 10:30 AM",
    },
    {
      id: 2,
      notificationContent: "New friend request",
      dateTime: "2024-05-05 3:45 PM",
    },
    {
      id: 3,
      notificationContent: "Your post has been liked",
      dateTime: "2024-05-04 9:15 AM",
    },
    // Add more notification objects as needed
  ],
};
