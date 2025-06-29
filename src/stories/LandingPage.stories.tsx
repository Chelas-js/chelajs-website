import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import LandingPage from "../components/LandingPage";

const meta = {
  title: "Components/LandingPage",
  component: LandingPage,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof LandingPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithHref: Story = {
  args: {
    buttonHref: "https://example.com",
  },
};
