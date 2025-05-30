import React, { useState } from "react";
import { Meta, StoryObj } from "@storybook/react";
import { FormField } from "./FormField";
import { Input } from '../ui/input/Input';

const meta: Meta<typeof FormField> = {
  title: "Components/FormField",
  component: FormField,
};

export default meta;

type Story = StoryObj<typeof FormField>;

export const Default: Story = {
  render: () => {
    const [value, setValue] = useState("");

    return (
      <FormField
        label="Email"
        htmlFor="email"
        description="We'll never share your email."
        error={value === "" ? "This field is required" : undefined}
      >
        <Input
          id="email"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          aria-invalid={value === "" ? "true" : "false"}
          aria-describedby="email-desc"
        />
      </FormField>
    );
  },
};
