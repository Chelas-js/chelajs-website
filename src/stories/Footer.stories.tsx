import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import Footer from "../components/Footer";

const meta: Meta<typeof Footer> = {
  title: "Components/Footer",
  component: Footer,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  argTypes: {
    socialLinks: {
      control: "object",
      description: "Array de enlaces sociales a mostrar",
    },
    copyrightYear: {
      control: "number",
      description: "Año para el copyright",
    },
    className: {
      control: "text",
      description: "Clases CSS adicionales",
    },
  },
  args: {},
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const MinimalSocial: Story = {
  args: {
    socialLinks: [
      {
        platform: "github",
        url: "https://github.com/chelas-js",
        label: "GitHub de ChelaJS",
      },
      {
        platform: "instagram",
        url: "https://instagram.com/chelajscommunity",
        label: "Instagram de ChelaJS",
      },
    ],
  },
};

export const CustomYear: Story = {
  args: {
    copyrightYear: 2024,
  },
};

export const WithCustomStyling: Story = {
  args: {
    className: "bg-gray-50 border-t-2 border-yellow-400",
  },
};

// Simulación de vista mobile
export const Mobile: Story = {
  args: {},
  parameters: {
    viewport: {
      defaultViewport: "mobile1",
    },
  },
};
