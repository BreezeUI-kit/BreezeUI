import { Tooltip } from "./Tooltip";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Tooltip> = {
  component: Tooltip,
  title: "Components/Tooltip",
};

export default meta;
type Story = StoryObj<typeof Tooltip>;

export const Default: Story = {
  render: () => (
    <Tooltip content="Tooltip Text">
      <button className="px-4 py-2 bg-blue-600 text-white rounded">Hover me</button>
    </Tooltip>
  ),
};