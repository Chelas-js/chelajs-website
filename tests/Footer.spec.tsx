// tests/Footer.spec.tsx
import { createTest } from "@storybook/react/experimental-playwright";
import { test as base, expect } from "@playwright/experimental-ct-react";

import stories from "../src/stories/Footer.stories.portable";

const test = createTest(base);

test.describe("Footer Component", () => {
  test("Default story renders correctly", async ({ mount }) => {
    // Mount the Default story with all its configuration
    const component = await mount(<stories.Default />);

    // Verify the footer is rendered
    await expect(component).toBeVisible();

    // Check for the ChelaJS brand text
    await expect(component.getByText("ChelaJS").first()).toBeVisible();
    await expect(
      component.getByText("Comunidad tech chilena 🍺"),
    ).toBeVisible();

    // Check for copyright text
    await expect(
      component.getByText(/© \d{4} ChelaJS\. Todos los derechos reservados\./),
    ).toBeVisible();
  });

  test("Social links are rendered and functional", async ({ mount }) => {
    const component = await mount(<stories.Default />);

    // Check for GitHub link
    const githubLink = component.getByRole("link", {
      name: "GitHub de ChelaJS",
    });
    await expect(githubLink).toBeVisible();
    await expect(githubLink).toHaveAttribute(
      "href",
      "https://github.com/chelas-js",
    );
    await expect(githubLink).toHaveAttribute("target", "_blank");
    await expect(githubLink).toHaveAttribute("rel", "noopener noreferrer");

    // Check for Instagram link
    const instagramLink = component.getByRole("link", {
      name: "Instagram de ChelaJS",
    });
    await expect(instagramLink).toBeVisible();
    await expect(instagramLink).toHaveAttribute(
      "href",
      "https://instagram.com/chelajscommunity",
    );

    // Check for Luma link
    const lumaLink = component.getByRole("link", { name: "Eventos en Luma" });
    await expect(lumaLink).toBeVisible();
    await expect(lumaLink).toHaveAttribute("href", "https://lu.ma/chelas.js");
  });

  test("MinimalSocial story renders only GitHub and Instagram", async ({
    mount,
  }) => {
    const component = await mount(<stories.MinimalSocial />);

    // Should have GitHub and Instagram
    await expect(
      component.getByRole("link", { name: "GitHub de ChelaJS" }),
    ).toBeVisible();
    await expect(
      component.getByRole("link", { name: "Instagram de ChelaJS" }),
    ).toBeVisible();

    // Should NOT have Luma link
    await expect(
      component.getByRole("link", { name: "Eventos en Luma" }),
    ).not.toBeVisible();
  });

  test("CustomYear story shows custom copyright year", async ({ mount }) => {
    const component = await mount(<stories.CustomYear />);

    // Check for custom year (2024)
    await expect(
      component.getByText("© 2024 ChelaJS. Todos los derechos reservados."),
    ).toBeVisible();
  });

  test("WithCustomStyling story applies custom classes", async ({ mount }) => {
    const component = await mount(<stories.WithCustomStyling />);

    // Verify the component is visible first
    await expect(component).toBeVisible();

    expect(component.nth(0)).toBeVisible();
    expect(component.nth(0)).toHaveClass(/bg-gray-50/);
    expect(component.nth(0)).toHaveClass(/border-t-2/);
    expect(component.nth(0)).toHaveClass(/border-yellow-400/);
  });

  test("Hover effects work on social links", async ({ mount, page }) => {
    const component = await mount(<stories.Default />);

    const githubLink = component.getByRole("link", {
      name: "GitHub de ChelaJS",
    });

    // Check initial color (gray-400)
    await expect(githubLink).toHaveClass(/text-gray-400/);

    // Hover over the link
    await githubLink.hover();

    // The hover state should apply yellow color
    await expect(githubLink).toHaveClass(/hover:text-yellow-400/);
  });

  test("Mobile story maintains responsive layout", async ({ mount }) => {
    const component = await mount(<stories.Mobile />);

    // Verify the component renders correctly
    await expect(component).toBeVisible();

    // Check that the flex layout is responsive (flex-col on mobile, md:flex-row on desktop)
    const container = component.locator(
      ".flex.flex-col.items-center.justify-between",
    );
    await expect(container).toBeVisible();
  });

  test("Accessibility features are present", async ({ mount }) => {
    const component = await mount(<stories.Default />);

    // Check that all social links have proper aria-labels
    const githubLink = component.getByRole("link", {
      name: "GitHub de ChelaJS",
    });
    const instagramLink = component.getByRole("link", {
      name: "Instagram de ChelaJS",
    });
    const lumaLink = component.getByRole("link", { name: "Eventos en Luma" });

    await expect(githubLink).toHaveAttribute("aria-label", "GitHub de ChelaJS");
    await expect(instagramLink).toHaveAttribute(
      "aria-label",
      "Instagram de ChelaJS",
    );
    await expect(lumaLink).toHaveAttribute("aria-label", "Eventos en Luma");

    // Check that links have title attributes for tooltips
    await expect(githubLink).toHaveAttribute("title", "GitHub de ChelaJS");
    await expect(instagramLink).toHaveAttribute(
      "title",
      "Instagram de ChelaJS",
    );
    await expect(lumaLink).toHaveAttribute("title", "Eventos en Luma");
  });
});
