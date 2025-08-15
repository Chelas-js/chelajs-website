// playwright/index.tsx
import { setProjectAnnotations } from "@storybook/react";
import * as previewAnnotations from "../.storybook/preview";

// Apply Storybook's global configuration to Playwright CT
setProjectAnnotations(previewAnnotations);
