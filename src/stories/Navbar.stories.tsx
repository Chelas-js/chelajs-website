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
  args: {
    joinHref: "#",
    loginHref: "#",
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
