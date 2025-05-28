import type { Meta, StoryObj } from "@storybook/react";
import Badge from "./Badge";

const meta: Meta<typeof Badge> = {
  component: Badge,
  title: "Components/Badge",
};
export default meta;

type Story = StoryObj<typeof Badge>;

export const Default: Story = {
  args: {
    text: "New",
    color: "default",
  },
};

export const Success: Story = {
  args: {
    text: "Active",
    color: "success",
  },
};

export const Warning: Story = {
  args: {
    text: "Pending",
    color: "warning",
  },
};

export const Error: Story = {
  args: {
    text: "Failed",
    color: "error",
  },
};
