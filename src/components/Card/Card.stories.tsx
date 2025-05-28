import type { Meta, StoryObj } from "@storybook/react";
import Card from "./Card";
import { FaUser } from "react-icons/fa";

const meta: Meta<typeof Card> = {
  title: "Components/Card",
  component: Card,
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {
  args: {
    title: "Revenue",
    value: "$8,430",
  },
};

export const WithIcon: Story = {
  args: {
    title: "Users",
    value: "1,024",
    icon: <FaUser />,
    description: "Active users this week",
  },
};
