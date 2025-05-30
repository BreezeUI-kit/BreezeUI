import React, { useState } from "react";
import { Meta, StoryObj } from "@storybook/react";
import { Slider } from "./Slider";

const meta: Meta<typeof Slider> = {
  title: "Components/Slider",
  component: Slider,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Slider>;

export const Default: Story = {
  render: () => {
    const [value, setValue] = useState(50);
    return <Slider label="Default Slider" value={value} onChange={setValue} />;
  },
};

export const Disabled: Story = {
  render: () => {
    const [value, setValue] = useState(25);
    return (
      <Slider
        label="Disabled Slider"
        value={value}
        onChange={setValue}
        disabled
      />
    );
  },
};

export const Stepped: Story = {
  render: () => {
    const [value, setValue] = useState(0);
    return (
      <Slider
        label="Stepped Slider"
        value={value}
        onChange={setValue}
        step={10}
        min={0}
        max={100}
      />
    );
  },
};

export const Vertical: Story = {
  render: () => {
    const [value, setValue] = useState(70);
    return (
      <Slider
        label="Vertical Slider"
        value={value}
        onChange={setValue}
        orientation="vertical"
        min={0}
        max={100}
      />
    );
  },
};
