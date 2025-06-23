import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import Shield from "../components/Shield";

const meta = {
  title: "Components/Shield",
  component: Shield,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: {},
} satisfies Meta<typeof Shield>;

export default meta;

type Story = StoryObj<typeof meta>;

export const BeerDrivenDevelopment: Story = {
  args: {
    variant: "beerDrivenDevelopment",
  },
};

export const ChelaJs: Story = {
  args: {
    variant: "chelaJs",
  },
};

export const BeerBrand: Story = {
  args: {
    variant: "beerBrand",
  },
};
