import type { Meta, StoryFn } from "@storybook/react";
import { Table } from "./table";

// Meta information for the Button component
const meta: Meta<typeof Table> = {
  title: "components/Table",
  component: Table,
  parameters: {
    layout: "",
  },
  tags: ["autodocs"],
  argTypes: {},
};

// Export the meta information
export default meta;

// Define mock data for the table
const mockTitles = [
  { id: "name", name: "Name" },
  { id: "age", name: "Age" },
  { id: "country", name: "Country" },
  { id: "job", name: "Job" },
  { id: "email", name: "Email" },
  { id: "contact", name: "Contact" },
  { id: "marriageStatus", name: "Marriage Status" },
];

const mockRows = [
  {
    key: "1",
    name: "John Doe",
    age: 30,
    country: "USA",
    job: "Software Engineer",
    email: "john.doe@example.com",
    contact: "+1 (555) 123-4567",
    marriageStatus: "Married",
  },
  {
    key: "2",
    name: "Jane Smith",
    age: 25,
    country: "Canada",
    job: "Doctor",
    email: "jane.smith@example.com",
    contact: "+1 (555) 987-6543",
    marriageStatus: "Single",
  },
  {
    key: "3",
    name: "Michael Johnson",
    age: 35,
    country: "UK",
    job: "Teacher",
    email: "michael.johnson@example.com",
    contact: "+44 20 1234 5678",
    marriageStatus: "Married",
  },
  {
    key: "4",
    name: "Emma Brown",
    age: 28,
    country: "Australia",
    job: "Graphic Designer",
    email: "emma.brown@example.com",
    contact: "+61 2 9876 5432",
    marriageStatus: "Single",
  },
  {
    key: "5",
    name: "David Lee",
    age: 40,
    country: "Japan",
    job: "Accountant",
    email: "david.lee@example.com",
    contact: "+81 3 1234 5678",
    marriageStatus: "Married",
  },
  {
    key: "6",
    name: "Sophia Kim",
    age: 22,
    country: "South Korea",
    job: "Student",
    email: "sophia.kim@example.com",
    contact: "+82 2 9876 5432",
    marriageStatus: "Single",
  },
  {
    key: "7",
    name: "Alex Johnson",
    age: 45,
    country: "USA",
    job: "Engineer",
    email: "alex.johnson@example.com",
    contact: "+1 (555) 555-5555",
    marriageStatus: "Married",
  },
  {
    key: "8",
    name: "Olivia Wilson",
    age: 32,
    country: "Canada",
    job: "Manager",
    email: "olivia.wilson@example.com",
    contact: "+1 (555) 123-4567",
    marriageStatus: "Single",
  },
  {
    key: "9",
    name: "Daniel Brown",
    age: 28,
    country: "UK",
    job: "Software Developer",
    email: "daniel.brown@example.com",
    contact: "+44 20 1234 5678",
    marriageStatus: "Married",
  },
  {
    key: "10",
    name: "Isabella Martinez",
    age: 35,
    country: "Mexico",
    job: "Teacher",
    email: "isabella.martinez@example.com",
    contact: "+52 55 1234 5678",
    marriageStatus: "Single",
  },
  {
    key: "11",
    name: "James Johnson",
    age: 40,
    country: "USA",
    job: "Lawyer",
    email: "james.johnson@example.com",
    contact: "+1 (555) 987-6543",
    marriageStatus: "Married",
  },
  {
    key: "12",
    name: "Mia Rodriguez",
    age: 28,
    country: "Spain",
    job: "Journalist",
    email: "mia.rodriguez@example.com",
    contact: "+34 91 123 45 67",
    marriageStatus: "Single",
  },
  {
    key: "13",
    name: "William Wang",
    age: 30,
    country: "China",
    job: "Engineer",
    email: "william.wang@example.com",
    contact: "+86 10 1234 5678",
    marriageStatus: "Married",
  },
  {
    key: "14",
    name: "Sofia Garcia",
    age: 35,
    country: "Argentina",
    job: "Doctor",
    email: "sofia.garcia@example.com",
    contact: "+54 11 1234 5678",
    marriageStatus: "Single",
  },
  {
    key: "15",
    name: "Benjamin Nguyen",
    age: 33,
    country: "Vietnam",
    job: "Architect",
    email: "benjamin.nguyen@example.com",
    contact: "+84 28 1234 5678",
    marriageStatus: "Married",
  },
];

// Template for the Storybook story
const Template: StoryFn = (args: any) => {
  return (
    <div className="h-screen">
      <Table {...args} titles={mockTitles} rows={mockRows} />;
    </div>
  );
};

// Default story for the Table component
export const Default = Template.bind({});
Default.args = {
  titles: [],
  rows: [],
};
