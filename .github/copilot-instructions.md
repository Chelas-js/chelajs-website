# GitHub Copilot Instructions for ChelaJS Website

## Project Overview

ChelaJS Website is a Next.js 15 project for the Chilean tech community "Chela.js" - a monthly meetup combining technology and beer. The site serves as a landing page, member directory, and event promotion platform.

## Architecture & Tech Stack

- **Framework**: Next.js 15 with App Router (`src/app/`)
- **Styling**: Tailwind CSS with custom color scheme (`text-[#343433]`, yellow-400 primary)
- **Component Library**: Custom components in `src/components/` + Radix UI (tabs)
- **Development**: Storybook for component development (`src/stories/`)
- **Node Version**: 23.7.0 (defined in `.tool-versions` - use `asdf` for management)

## Component Architecture

All components follow this pattern:

```tsx
import React from "react";

interface ComponentProps {
  // TypeScript interface here
}

const Component: React.FC<ComponentProps> = (props) => {
  return <div className="tailwind-classes">{/* content */}</div>;
};

export default Component; // Always default export
```

### Key Component Patterns

- **Button variants**: 5 types (primary, black-outline, regular, link, blue-outline) with consistent styling
- **Shields**: Beer-themed badge components in `src/components/shields/`
- **UserCard**: Displays member info from `src/dbs/db-members.json`
- **Hero/LandingPage**: Main landing components with community messaging

## Development Workflow

```bash
npm install       # Install dependencies
npm run dev       # Start dev server with Turbopack
npm run fmt       # Format with Prettier
npm run lint      # Check formatting
npm run build     # Verify build
npm run storybook # or npm run sb - Start Storybook on :6006
```

## Storybook Convention

Stories go in `src/stories/` and follow this structure:

```tsx
import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import Component from "../components/Component";

const meta: Meta<typeof Component> = {
  title: "Components/Component",
  component: Component,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
  // argTypes and args here
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = { args: {} };
```

## Data & Content Management

- **Member Database**: JSON file at `src/dbs/db-members.json` with structured member data
- **Documentation**: Spanish docs in `docs/es/`, English in `docs/`
- **Product Requirements**: Detailed PRD in `docs/product.md`

## Git & PR Workflow

- **No direct commits to `main`** - all changes via Pull Request
- **Commit format**: Follow Conventional Commits
- **Current branch**: `feat/design-page` with active PR #31

## Project-Specific Conventions

1. **Spanish Documentation**: Primary language in `docs/es/` and component comments
2. **Beer Theme**: Consistent use of beer-related terminology and shields
3. **Community Focus**: Components emphasize networking and tech community aspects
4. **Color Scheme**: Yellow primary (`yellow-400`), dark text (`#343433`), blue accents
5. **Icons**: Lucide React + Simple Icons for social media

## Key Files to Reference

- `AGENTS.md` - Comprehensive agent instructions (source of truth)
- `docs/product.md` - Product requirements and business context
- `src/components/Button.tsx` - Button variant patterns
- `src/dbs/db-members.json` - Data structure example
- `tailwind.config.ts` - Custom styling configuration

## Integration Points

- **Storybook**: Component development and documentation
- **Husky**: Git hooks for code quality
- **Prettier**: Code formatting (not ESLint for linting)
- **Vitest**: Testing framework with browser testing support
