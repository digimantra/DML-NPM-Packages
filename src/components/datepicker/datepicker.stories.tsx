// Radio.stories.tsx

import { Meta, StoryFn } from "@storybook/react";
import { DatePicker } from "./datepicker";

// Meta information for the Radio component
const meta: Meta = {
  title: "Components/DatePicker",
  component: DatePicker,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

// Export the meta information
export default meta;

// Define the story template
const Template: StoryFn = (args) => <DatePicker />;

// Default story
export const Default = Template.bind({});
Default.args = {};
