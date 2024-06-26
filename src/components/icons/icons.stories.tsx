// Import necessary modules
import type { Meta, StoryFn } from "@storybook/react";
import { IconsData } from "./iconData";
import { Icons } from "./icons";
// Import your data

// Story metadata

const meta: Meta<typeof Icons> = {
  title: "components/Icons",
  component: Icons,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    fill: { control: "color" },
  },
};

export default meta;

// Define the Template story

const Template: StoryFn = (args: any) => <Icons {...args} />;

// Default story for the Button component
export const Default = Template.bind({});
Default.args = {
  name: "warehouse",
  height: "20",
  width: "20",
  filled: true,
  fill: "#000",
};

export const Outline = () => (
  <>
    <div className="flex flex-wrap items-center gap-4 justify-center">
      {Object.keys(IconsData).map((iconName) => {
        // @ts-ignore
        const icon = IconsData[iconName];
        if (icon.outline.d1 || icon.outline.d2) {
          return (
            <div className="flex flex-col items-center justify-center border border-gray-400 px-4 pt-4 pb-2 rounded-md">
              <Icons
                key={iconName}
                name={iconName}
                height="25"
                width="25"
                fill="#000"
              />

              <div className="text-xs">{iconName}</div>
            </div>
          );
        } else {
          return null; // Skip rendering if filled object is empty
        }
      })}
    </div>
  </>
);

export const Filled = () => (
  <>
    <div className="flex flex-wrap items-center gap-4 justify-center">
      {Object.keys(IconsData).map((iconName) => {
        // @ts-ignore
        const icon = IconsData[iconName];
        if (icon.filled.d1 || icon.filled.d2) {
          return (
            <div className="flex flex-col items-center justify-center border border-gray-400 px-4 pt-4 pb-2 rounded-md">
              <Icons
                key={iconName}
                name={iconName}
                height="25"
                width="25"
                fill="#000"
                filled
              />

              <div className="text-xs">{iconName}</div>
            </div>
          );
        } else {
          return null; // Skip rendering if filled object is empty
        }
      })}
    </div>
  </>
);
