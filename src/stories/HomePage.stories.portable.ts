import {
  Default,
  WithCustomLinks,
  WithCustomGallery,
  MobileView,
} from "./HomePage.stories";

// Exportamos las historias que queremos usar en tests de Playwright
export const portableStories = {
  Default,
  WithCustomLinks,
  WithCustomGallery,
  MobileView,
};

export default portableStories;
