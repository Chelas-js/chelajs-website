import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import BlockLogin from "../components/BlockLogin";

const meta = {
  title: "components/BlockLogin",
  component: BlockLogin,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  argTypes: {
    onGithubLogin: { action: "github-login" },
  },
  args: {
    onGithubLogin: () => {},
  },
} satisfies Meta<typeof BlockLogin>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
