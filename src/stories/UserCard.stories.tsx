import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import UserCard from "../components/UserCard";

const meta: Meta<typeof UserCard> = {
  title: "Components/UserCard",
  component: UserCard,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    backgroundColor: { control: "color" },
    textColor: { control: "color" },
  },
  args: {
    name: "Gaspar",
    username: "@gasparnd",
    avatarUrl: "/images/gaspar.png",
    socials: {
      instagram: "https://instagram.com/gasparnd",
      github: "https://github.com/gasparnd",
      linkedin: "https://linkedin.com/in/gasparnd",
    },
    workTitle: "My work",
    workDescription: [
      "Software Developer enfocado en product building",
      "Prefiero mil veces mobile que web",
    ],
    funFactTitle: "Fun fact",
    funFacts: [
      "Quería ser arquitecto",
      "Tengo fobia a las abejas",
      "Hago apps para Apple como hobby",
    ],
    backgroundColor: "#4285F4",
    textColor: "#FFFFFF",
    rounded: true,
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
