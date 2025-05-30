import React, { useState } from "react";
import { Meta, StoryObj } from "@storybook/react";
import { FormField } from "../components/form-field/FormField";
import { Input } from "../components/ui/input/Input"; // Make sure this path is correct
import { useValidation } from "../hooks/useValidation";

const meta: Meta = {
  title: "Examples/Validation",
};

export default meta;

type Story = StoryObj;

export const EmailValidation: Story = {
  render: () => {
    const [email, setEmail] = useState("");
    
    const isRequired = (value: string) => value.trim() === "" ? "Email is required" : null;
    const isEmail = (value: string) =>
      !/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(value)
        ? "Enter a valid email address"
        : null;

    const { error, validate } = useValidation([isRequired, isEmail]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const val = e.target.value;
      setEmail(val);
      validate(val);
    };

    return (
      <FormField
        label="Email"
        htmlFor="email"
        description="We’ll send confirmation to this email."
        error={error || undefined}
      >
        <Input
          id="email"
          value={email}
          onChange={handleChange}
          aria-invalid={!!error}
          aria-describedby="email-desc"
        />
      </FormField>
    );
  },
};
