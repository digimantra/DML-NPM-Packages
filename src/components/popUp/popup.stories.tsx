import type { Meta, StoryFn } from "@storybook/react";
import { fn } from "@storybook/test";
import { useState } from "react";
import { Button } from "../button/button";
import { Icons } from "../icons/icons";
import { Popup } from "./popup";

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

const Template: StoryFn = (args) => {
  const [showPopup, setShowPopup] = useState(false);
  return (
    <>
      <button onClick={() => setShowPopup(true)}>Open Popup</button>

      <Popup
        {...args}
        show={showPopup}
        setShow={setShowPopup}
        iconBackground="#e6ffe4"
      >
        <Popup.Header>
          <div>Success!</div>
        </Popup.Header>

        <Popup.Content>
          <div>Shipment Created Successfully</div>
        </Popup.Content>

        <Popup.Footer>
          <Button type="primary" label="Done" full />
        </Popup.Footer>
      </Popup>
    </>
  );
};

// Default story for the Popup component
export const Default = Template.bind({});
Default.args = {
  icon: <Icons name="check" height="20" width="20" fill="#27cd2f" />,
  iconBackground: "#FFFFFF",
};
