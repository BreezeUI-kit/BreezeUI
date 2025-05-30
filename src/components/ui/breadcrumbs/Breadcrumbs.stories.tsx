import React from "react";
import { Meta } from "@storybook/react";
import { Breadcrumbs } from "./Breadcrumbs";

const meta: Meta<typeof Breadcrumbs> = {
  title: "UI/Breadcrumbs",
  component: Breadcrumbs,
};

export default meta;

export const Basic = () => (
  <Breadcrumbs
    items={[
      { label: "Home", href: "/" },
      { label: "Library", href: "/library" },
      { label: "Data" },
    ]}
  />
);