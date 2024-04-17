import { Icons } from "./Icons";
import { IconsData } from "./IconsData";

export default {
  title: "Icons",
  component: Icons,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    fill: { control: "color" },
  },
};

// export const Testing = (args) => <Icons name="key" {...args} />;

export const Dashboard = {
  args: {
    name: "dashboard",
    height: "20",
    width: "20",
    fill: "#000",
  },
};

export const Warehouse = {
  args: {
    name: "warehouse",
    fill: "#000",
    height: "20",
    width: "20",
  },
};

export const Shipment = {
  args: {
    name: "shipment",
    fill: "#000",
    height: "20",
    width: "20",
  },
};

export const Invoice = {
  args: {
    name: "invoice",
    fill: "#000",
    height: "20",
    width: "20",
  },
};

export const List = {
  args: {
    name: "list",
    fill: "#000",
    height: "20",
    width: "20",
  },
};

export const Customers = {
  args: {
    name: "customers",
    fill: "#000",
    height: "20",
    width: "20",
  },
};

export const Driver = {
  args: {
    name: "driver",
    fill: "#000",
    height: "20",
    width: "20",
  },
};

export const Delivery = {
  args: {
    name: "delivery",
    fill: "#000",
    height: "20",
    width: "20",
  },
};

export const Report = {
  args: {
    name: "report",
    fill: "#000",
    height: "20",
    width: "20",
  },
};

export const Key = {
  args: {
    name: "key",
    fill: "#000",
    height: "20",
    width: "20",
  },
};
