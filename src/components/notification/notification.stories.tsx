import type { Meta, StoryFn } from "@storybook/react";
import { fn } from "@storybook/test";
import { Icons } from "../icons/icons";
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
const Template: StoryFn = (args: any) => <Notifications {...args} />;

// Default story for the Button component
export const Default = Template.bind({});
Default.args = {
  icon: <Icons name="notification" height="20" width="20" filled fill="#000" />,
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
