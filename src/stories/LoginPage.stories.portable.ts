import {
  Default,
  Minimal,
  CustomLogin,
  WithCustomStyling,
  Mobile,
} from "./LoginPage.stories";

// Exportamos las historias que queremos usar en tests de Playwright
export const portableStories = {
  Default,
  Minimal,
  CustomLogin,
  WithCustomStyling,
  Mobile,
};

export default portableStories;
