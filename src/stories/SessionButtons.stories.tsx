import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import SessionButtons from "../components/SessionButtons";

const meta: Meta<typeof SessionButtons> = {
  title: "Components/SessionButtons",
  component: SessionButtons,
  parameters: {
    layout: "centered",
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
    logoutHref: "#",
  },
};

export const SoloJoin: Story = {
  args: {
    joinHref: "#",
  },
};

export const SoloLogout: Story = {
  args: {
    logoutHref: "#",
  },
};

export const Ninguno: Story = {
  args: {},
};
