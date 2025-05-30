import React, { useState } from "react";
import { Meta, StoryObj } from "@storybook/react";
import { RadioGroup } from "./RadioGroup";
import { RadioGroupProps } from "./RadioGroup.types";

const meta: Meta<typeof RadioGroup> = {
  title: "Components/RadioGroup",
  component: RadioGroup,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof RadioGroup>;

const options = [
  { label: "Option A", value: "a" },
  { label: "Option B", value: "b" },
  { label: "Option C", value: "c" },
];

export const Basic: Story = {
  render: () => {
    const [value, setValue] = useState("b");
    return (
      <RadioGroup
        label="Choose one"
        options={options}
        value={value}
        onChange={setValue}
      />
    );
  },
};

export const Horizontal: Story = {
  render: () => {
    const [value, setValue] = useState("a");
    return (
      <RadioGroup
        label="Horizontal layout"
        direction="horizontal"
        options={options}
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
      <RadioGroup
        label="Disabled group"
        options={options}
        value={value}
        onChange={setValue}
        disabled
      />
    );
  },
};
