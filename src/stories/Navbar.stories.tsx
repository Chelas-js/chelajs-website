import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import Navbar from "../components/Navbar";

const meta: Meta<typeof Navbar> = {
  title: "Components/Navbar",
  component: Navbar,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: {},
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Ambos: Story = {
  args: {
    joinHref: "#",
    loginHref: "#",
  },
};

export const SoloJoin: Story = {
  args: {
    joinHref: "#",
  },
};

export const SoloLogin: Story = {
  args: {
    loginHref: "#",
  },
};

export const Ninguno: Story = {
  args: {},
};
