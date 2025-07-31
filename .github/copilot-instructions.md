# ChelaJS Website - AI Coding Instructions

This is a Next.js community website for ChelaJS, a Chilean tech community that meets monthly over beers. Focus on community features: member directory, events, and job board.

## Architecture & Data Flow

- **Frontend**: Next.js 15 with App Router (`src/app/`)
- **Components**: Modular React/TypeScript components in `src/components/`
- **Data**: JSON-based storage in `src/dbs/` (transitioning to relational DB in future)
- **Styling**: Tailwind CSS utilities throughout
- **Testing**: Vitest + Playwright through Storybook integration

Key data flow: `db-members.json` → React components → Storybook stories for testing.

## Development Workflow

```bash
# Node.js 23.7.0 (managed via asdf - see .tool-versions)
npm install
npm run dev   # Next.js with Turbopack
npm run sb    # Storybook on port 6006
npm run fmt   # Prettier formatting
npm run lint  # Prettier check
npm run build # Production build
```

## Component Conventions

**All components must follow this exact pattern:**

```tsx
import React from "react";

interface MiComponenteProps {
  // Define props here
}

const MiComponente: React.FC<MiComponenteProps> = (props) => {
  return (
    <div className="p-4 bg-white rounded shadow">
      {/* Always use Tailwind classes */}
    </div>
  );
};

export default MiComponente; // Always default export
```

## Storybook Integration

Every component needs a story in `src/stories/`. Follow this structure:

```typescript
import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { ComponentName } from "./ComponentName";

const meta = {
  title: "Section/ComponentName",
  component: ComponentName,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
} satisfies Meta<typeof ComponentName>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    /* component props */
  },
};
```

## Data Patterns

Member data lives in `src/dbs/db-members.json` with this structure:

```json
{
  "members": [
    {
      "name": "Full Name",
      "email": "email@domain.com",
      "social_media": { "linkedin": "username_or_url" }
    }
  ]
}
```

## Documentation Structure

- **Product specs**: `docs/product.md` (PRD format)
- **Spanish docs**: `docs/es/` for component documentation
- **Use cases**: `UseCase/UC-XX-description.md` following template structure

## Git Workflow

- **No direct commits to `main`** - always use PRs
- **Conventional Commits** required
- All changes must pass `npm run fmt` and `npm run build`

## Testing Strategy

Tests run through Storybook stories using Vitest + Playwright browser testing. No separate test files - stories serve as living tests and documentation.

## Key Files to Reference

- `AGENTS.md` - Detailed development guidelines
- `docs/product.md` - Complete product requirements
- `UseCase/template.md` - Use case documentation format
- `src/components/LandingPage.tsx` - Main community messaging component
