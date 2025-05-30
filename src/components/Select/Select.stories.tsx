import React, { useState } from "react";
import { Meta, StoryObj } from "@storybook/react";
import { Select } from "./Select";
import { SelectProps } from "./Select.types";

const meta: Meta<typeof Select> = {
  title: "Components/Select",
  component: Select,
  tags: ["autodocs"],
  parameters: {
    a11y: {
      config: {
        rules: [
          {
            id: "aria-required-children",
            enabled: true,
          },
        ],
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Select>;

const options = [
  { label: "Option A", value: "a" },
  { label: "Option B", value: "b" },
  { label: "Option C", value: "c" },
];

export const Basic: Story = {
  render: () => {
    const [value, setValue] = useState("b");
    return (
      <Select
        label="Basic Select"
        options={options}
        value={value}
        onChange={setValue}
      />
    );
  },
};

export const WithPlaceholder: Story = {
  render: () => {
    const [value, setValue] = useState("");
    return (
      <Select
        label="Select with Placeholder"
        options={options}
        placeholder="Choose an option..."
        value={value}
        onChange={setValue}
      />
    );
  },
};

export const Disabled: Story = {
  render: () => {
    const [value, setValue] = useState("a");
    return (
      <Select
        label="Disabled Select"
        options={options}
        value={value}
        onChange={setValue}
        disabled
      />
    );
  },
};