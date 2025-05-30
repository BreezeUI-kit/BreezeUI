import React from "react";
import { Meta } from "@storybook/react";
import { NavigationMenuDemo } from "./NavigationMenu";

export default {
  title: "Components/NavigationMenu",
  component: NavigationMenuDemo,
} as Meta;

export const Default = () => <NavigationMenuDemo />;