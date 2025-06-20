import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import UserCard from "../components/UserCard";
import { INITIAL_VIEWPORTS } from "storybook/viewport";

const meta: Meta<typeof UserCard> = {
  title: "Components/UserCard",
  component: UserCard,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  argTypes: {
    backgroundColor: { control: "color" },
    textColor: { control: "color" },
  },
  args: {
    name: "Gaspar",
    username: "@gasparnd",
    avatarUrl: "https://placehold.co/400",
    socials: {
      instagram: "https://instagram.com/gasparnd",
      github: "https://github.com/gasparnd",
      linkedin: "https://linkedin.com/in/gasparnd",
    },
    workDescription:
      "Software Developer enfocado en product building\nPrefiero mil veces mobile que web",
    funFacts:
      "Quería ser arquitecto. Tengo fobia a las abejas. Hago apps para Apple como hobby.",
    backgroundColor: "#4285F4",
    textColor: "#FFFFFF",
    rounded: true,
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const Scenario1: Story = {
  args: {
    workDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In cursus volutpat erat, eget accumsan nibh malesuada quis. Curabitur feugiat ac magna quis dictum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Suspendisse interdum tristique sapien id vehicula. Donec suscipit tortor ut ligula pretium laoreet. Sed.",
    funFacts:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sodales libero lectus, vitae feugiat turpis tempus sed. Morbi molestie dignissim volutpat. Vestibulum neque massa, sagittis at tellus eu, elementum malesuada leo. Curabitur pulvinar, dolor et pretium facilisis, augue libero interdum purus, et consectetur metus ante eu est. Nulla feugiat, metus at ultrices sagittis, nisl sapien posuere massa, ac mollis elit risus ut erat. Sed maximus libero a eleifend fermentum. Praesent venenatis velit nunc, eget venenatis risus convallis ut. Duis convallis elit quis sollicitudin semper. Nullam mattis risus vel tempor accumsan. Orci varius natoque penatibus et magnis dis parturient montes, nascetur.",
  },
};

export const Scenario2: Story = {
  args: {
    socials: {},
    workDescription:
      "Software Developer enfocado en product building Prefiero mil veces mobile que web",
    backgroundColor: "#e3831f",
  },
};

export const Scenario3: Story = {
  args: {
    name: "Gaspar",
    username: "@gasparnd",
    avatarUrl: "https://placehold.co/400",

    socials: {},

    workDescription: "",
    funFacts: "",
    backgroundColor: "#148eff",
    textColor: "#FFFFFF",
    rounded: true,
  },
};

export const MobileView: Story = {
  args: {
    name: "Gaspar",
    username: "@gasparnd",
    avatarUrl: "https://placehold.co/400",
    socials: {
      instagram: "https://instagram.com/gasparnd",
      github: "https://github.com/gasparnd",
      linkedin: "https://linkedin.com/in/gasparnd",
    },
    workDescription: "",
    funFacts: "",
    backgroundColor: "#4285F4",
    textColor: "#FFFFFF",
    rounded: true,
  },
};
