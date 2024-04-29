import React from "react";
import clsx from "clsx";
import { Story } from "@storybook/react";

import Carousel, { ICarouselProps } from ".";
// import { ADPIcon } from "../adpIcon";

export default {
  component: Carousel,
  title: "Components/Navigation/Carousel",
  parameters: {
    docs: {
      description: {
        component: "import { Carousel } from '@amorphic/amorphic-ui-core'"
      }
    }
  },
  argTypes: {}
};

const DATA = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14 ]?.map(( num ) => (
  { children: <div className={clsx(
    "adp-h-24 adp-flex adp-justify-center adp-items-center adp-text-white", num % 2 === 0 ? "adp-bg-primary-100" : "adp-bg-primary-200" )}>
    {num-1}. This is Carousel
  </div> }
));

const Template: Story<ICarouselProps> = ( args ) => <Carousel {...args} />;

export const Default = Template.bind({});
Default.args = {
  items: DATA
};

export const WithInitialIndex = Template.bind({});
WithInitialIndex.args = {
  items: DATA,
  numItemsVisible: 4,
  initialIndex: 4
};

export const WithScrollItems = Template.bind({});
WithScrollItems.args = {
  items: DATA,
  numItemsVisible: 4,
  initialIndex: 1,
  numItemsScroll: 4
};

export const FullWidthWithClick = Template.bind({});
FullWidthWithClick.args = {
  items: [
    {
      children: <div className="adp-h-56 adp-bg-primary adp-flex"><ADPIcon classes="adp-m-auto" icon="save" /></div>,
      // only to check for onClick function of item
      // eslint-disable-next-line no-alert
      onClick: () => alert( "Item clicked" )
    },
    {
      children: <div className="adp-h-56 adp-bg-primary adp-flex"><ADPIcon classes="adp-m-auto" icon="delete" /></div>
    },
    {
      children: <div className="adp-h-56 adp-bg-primary adp-flex"><ADPIcon classes="adp-m-auto" icon="edit" /></div>
    }
  ],
  fullWidth: true
};

export const WithOnChange = Template.bind({});
WithOnChange.args = {
  items: DATA,
  onChange: ( index: number ) => {
    // only to check for onChange function
    // eslint-disable-next-line no-alert
    alert( index );
  }
};

export const TwoScrollItems = Template.bind({});
TwoScrollItems.args = {
  items: DATA,
  numItemsVisible: 4,
  numItemsScroll: 2
};

export const DarkModeView: Story<ICarouselProps> = ( args ) => (
  <div className="adp-dark">
    <Carousel {...args} />
  </div>
);
DarkModeView.args = {
  items: DATA
};
DarkModeView.parameters = {
  backgrounds: { default: "dark" }
};
