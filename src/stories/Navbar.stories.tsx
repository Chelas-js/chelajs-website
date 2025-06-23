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

export const TodosLosBotones: Story = {
  args: {
    joinHref: "#",
    loginHref: "#",
    exploreHref: "#",
  },
};

export const SoloUnete: Story = {
  args: {
    joinHref: "#",
  },
};

export const SoloIniciarSesion: Story = {
  args: {
    loginHref: "#",
  },
};

export const SinBotones: Story = {
  args: {},
};
