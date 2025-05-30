import React from "react";
import { Meta } from "@storybook/react";
import { MenubarDemo } from "./Menubar";

export default {
  title: "Components/Menubar",
  component: MenubarDemo,
} as Meta;

export const Default = () => <MenubarDemo />;