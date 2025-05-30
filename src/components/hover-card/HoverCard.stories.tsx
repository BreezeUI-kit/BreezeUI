import { HoverCard } from "./HoverdCard";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof HoverCard> = {
  component: HoverCard,
  title: "Components/HoverCard",
};

export default meta;
type Story = StoryObj<typeof HoverCard>;

export const Default: Story = {
  render: () => (
    <HoverCard
      trigger={<button className="px-4 py-2 bg-purple-600 text-white rounded">Hover</button>}
      content={<div>This is a hover card content</div>}
    />
  ),
};