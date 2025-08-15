import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import LoginPage from "../components/LoginPage";

const meta: Meta<typeof LoginPage> = {
  title: "Components/LoginPage",
  component: LoginPage,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  argTypes: {
    onGithubLogin: {
      action: "githubLogin",
      description: "Función que se ejecuta al hacer clic en el botón de GitHub",
    },
    logoHref: {
      control: "text",
      description: "Enlace del logo en el header",
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

// Historia por defecto
export const Default: Story = {
  args: {},
};

// Variación mínima
export const Minimal: Story = {
  args: {
    logoHref: "#",
  },
};

// Casos con datos personalizados
export const CustomLogin: Story = {
  args: {
    logoHref: "/home",
    onGithubLogin: () => alert("Login personalizado!"),
  },
};

// Con estilos personalizados
export const WithCustomStyling: Story = {
  args: {
    className: "bg-gradient-to-br from-blue-50 to-indigo-100",
  },
};

// Vista móvil
export const Mobile: Story = {
  args: {},
  parameters: {
    viewport: {
      defaultViewport: "mobile1",
    },
  },
};

// Vista tablet
export const Tablet: Story = {
  args: {},
  parameters: {
    viewport: {
      defaultViewport: "tablet",
    },
  },
};

// Vista con logo personalizado
export const WithCustomLogoHref: Story = {
  args: {
    logoHref: "https://chelajs.dev",
  },
};
