import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import Hero from "../components/Hero";

const meta = {
  title: "Home/Hero",
  component: Hero,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: {},
} satisfies Meta<typeof Hero>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    nextEventHref: "#",
  },
  name: "Hero sin enlace al próximo evento",
};

export const HeroWithoutLink: Story = {
  args: {},
  name: "Hero con enlace al próximo evento",
};
