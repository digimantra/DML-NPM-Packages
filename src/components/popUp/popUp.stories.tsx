import type { Meta, Story } from "@storybook/react";
import { fn } from "@storybook/test";
import { useState } from "react";
import { Popup } from "./popUp";

// Meta information for the Button component
const meta: Meta<typeof Popup> = {
  title: "components/Popup",
  component: Popup,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},

  args: { onChange: fn() },
};

// Export the meta information
export default meta;

const Template: Story = (args) => {
  const [showPopup, setShowPopup] = useState(false);
  return (
    <>
      <button onClick={() => setShowPopup(true)}>Open Popup</button>

      <Popup {...args} show={showPopup} setShow={setShowPopup}>
        <Popup.Header>
          <div>Success</div>
        </Popup.Header>

        <Popup.Content>
          <div>Update successfully</div>
        </Popup.Content>

        <Popup.Footer>Popup Footer</Popup.Footer>
      </Popup>
    </>
  );
};

// Default story for the Popup component
export const Default = Template.bind({});
Default.args = {
  icon: null,
  iconBackground: "#FFFFFF",
};
