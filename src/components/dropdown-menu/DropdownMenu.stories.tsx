import { DropdownMenu } from "./DropdownMenu";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof DropdownMenu> = {
  component: DropdownMenu,
  title: "Components/DropdownMenu",
};

export default meta;
type Story = StoryObj<typeof DropdownMenu>;

export const Default: Story = {
  render: () => (
    <DropdownMenu
      trigger={<span className="px-4 py-2 bg-gray-700 text-white rounded">Open Menu</span>}
      items={[
        { label: "Profile", onClick: () => alert("Profile clicked") },
        { label: "Settings", onClick: () => alert("Settings clicked") },
        { label: "Logout", onClick: () => alert("Logout clicked") },
      ]}
    />
  ),
};