import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import HomePage from "../components/HomePage";

const meta: Meta<typeof HomePage> = {
  title: "Components/HomePage",
  component: HomePage,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  argTypes: {
    joinHref: {
      control: "text",
      description: "Enlace para el botón 'Únete a la conversación'",
    },
    loginHref: {
      control: "text",
      description: "Enlace para el botón 'Login'",
    },
    exploreHref: {
      control: "text",
      description: "Enlace para el botón 'Explorar'",
    },
    nextEventHref: {
      control: "text",
      description: "Enlace para el botón 'Ver próximo evento' en el Hero",
    },
    galleryImages: {
      control: "object",
      description: "Array de imágenes para la galería",
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

// Con enlaces personalizados
export const WithCustomLinks: Story = {
  args: {
    joinHref: "https://discord.gg/chelajs",
    loginHref: "/auth/login",
    exploreHref: "/events",
    nextEventHref: "https://lu.ma/specific-event",
  },
};

// Con galería personalizada
export const WithCustomGallery: Story = {
  args: {
    galleryImages: [
      {
        url: "https://placehold.co/400x300/FF6B6B/FFFFFF?text=React+Meetup",
        alt: "React Meetup en ChelaJS",
      },
      {
        url: "https://placehold.co/400x300/4ECDC4/FFFFFF?text=Node.js+Workshop",
        alt: "Workshop de Node.js",
      },
      {
        url: "https://placehold.co/400x300/45B7D1/FFFFFF?text=TypeScript+Talk",
        alt: "Charla sobre TypeScript",
      },
      {
        url: "https://placehold.co/400x300/96CEB4/FFFFFF?text=Open+Source",
        alt: "Contribuciones Open Source",
      },
    ],
  },
};

// Con estilos personalizados
export const WithCustomStyling: Story = {
  args: {
    className: "bg-gradient-to-br from-blue-50 to-indigo-100",
  },
};

// Vista móvil
export const MobileView: Story = {
  args: {},
  parameters: {
    viewport: {
      defaultViewport: "mobile1",
    },
  },
};

// Vista tablet
export const TabletView: Story = {
  args: {},
  parameters: {
    viewport: {
      defaultViewport: "tablet",
    },
  },
};
