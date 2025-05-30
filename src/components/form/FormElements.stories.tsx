import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { Label } from "./Label";
import { Description } from "./Description";
import { Error } from "./Error";

const meta: Meta = {
  title: "Components/Form Elements",
};

export default meta;

export const LabelExample: StoryObj = {
  render: () => <Label htmlFor="name">Name</Label>,
};

export const DescriptionExample: StoryObj = {
  render: () => (
    <Description id="desc">
      This is a description of the input field.
    </Description>
  ),
};

export const ErrorExample: StoryObj = {
  render: () => (
    <Error id="error">This field is required.</Error>
  ),
};
