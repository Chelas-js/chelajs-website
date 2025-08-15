// Footer.stories.portable.ts
import { composeStories } from "@storybook/react";

import * as stories from "./Footer.stories";

// Output an object that maps 1:1 to your stories, now in portable components
export default composeStories(stories);
