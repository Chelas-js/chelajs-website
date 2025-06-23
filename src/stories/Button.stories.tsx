import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import Button from "../components/Button";
import { Github } from "lucide-react";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      options: ["primary", "black-outline", "regular", "link", "blue-outline"],
      control: { type: "select" },
    },
    icon: { control: false },
  },
  args: {
    children: "Button",
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: { variant: "primary" },
};

export const BlackOutline: Story = {
  args: { variant: "black-outline" },
};

export const Regular: Story = {
  args: { variant: "regular" },
};

export const Link: Story = {
  args: { variant: "link" },
};

export const WithIcon: Story = {
  args: { variant: "regular", icon: <Github /> },
};

export const BlueOutline: Story = {
  args: {
    variant: "blue-outline",
    children: "Unete a la conversacion",
  },
};
