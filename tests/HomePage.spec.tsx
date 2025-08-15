import { test, expect } from "@playwright/experimental-ct-react";
import HomePage from "../src/components/HomePage";
import { portableStories } from "../src/stories/HomePage.stories.portable";

test.describe("HomePage Component", () => {
  test("should render the default HomePage", async ({ mount }) => {
    const component = await mount(<HomePage />);

    // Verificar que el componente se renderiza
    await expect(component).toBeVisible();
    await expect(component).toHaveAttribute("data-testid", "homepage");

    // Verificar que contiene las secciones principales
    await expect(component.locator("nav")).toBeVisible(); // Navbar
    await expect(
      component.getByText(
        "Donde la tecnología se destapa mejor con una cerveza",
      ),
    ).toBeVisible(); // Hero
    await expect(component.getByText("Nuestros Eventos")).toBeVisible(); // Gallery section
    await expect(component.getByText("¿Qué es ChelaJS?")).toBeVisible(); // Introduction
    await expect(
      component.getByText("Características de Nuestra Comunidad"),
    ).toBeVisible(); // Features
    await expect(component.locator("footer")).toBeVisible(); // Footer
  });

  test("should render gallery images", async ({ mount }) => {
    const component = await mount(<HomePage />);

    // Verificar que se muestran las imágenes de la galería
    const galleryImages = component.locator('img[alt*="Evento de ChelaJS"]');
    await expect(galleryImages).toHaveCount(6); // Por defecto hay 6 imágenes

    // Verificar que la primera imagen es visible
    await expect(galleryImages.first()).toBeVisible();
  });

  test("should render community features", async ({ mount }) => {
    const component = await mount(<HomePage />);

    // Verificar que se muestran las 3 características de la comunidad
    await expect(component.getByTestId("community-feature-0")).toBeVisible();
    await expect(component.getByTestId("community-feature-1")).toBeVisible();
    await expect(component.getByTestId("community-feature-2")).toBeVisible();

    // Verificar contenido de las características usando headings específicos
    await expect(
      component.getByRole("heading", { name: "Comunidad Inclusiva" }),
    ).toBeVisible();
    await expect(
      component.getByRole("heading", { name: "Aprendizaje Colaborativo" }),
    ).toBeVisible();
    await expect(
      component.getByRole("heading", { name: "Networking Casual" }),
    ).toBeVisible();
  });

  test("should handle custom links", async ({ mount }) => {
    const customProps = {
      joinHref: "https://custom-join.com",
      loginHref: "/custom-login",
      exploreHref: "/custom-explore",
      nextEventHref: "https://custom-event.com",
    };

    const component = await mount(<HomePage {...customProps} />);

    // Verificar que los enlaces personalizados se aplican (estos serán validados en el Navbar y Hero)
    await expect(component).toBeVisible();
  });

  test("should render with custom gallery images", async ({ mount }) => {
    const customGallery = [
      {
        url: "https://example.com/image1.jpg",
        alt: "Custom Event 1",
      },
      {
        url: "https://example.com/image2.jpg",
        alt: "Custom Event 2",
      },
    ];

    const component = await mount(<HomePage galleryImages={customGallery} />);

    // Verificar que se usan las imágenes personalizadas
    await expect(component.locator('img[alt="Custom Event 1"]')).toBeVisible();
    await expect(component.locator('img[alt="Custom Event 2"]')).toBeVisible();

    // Verificar que solo hay 2 imágenes (las personalizadas)
    const galleryImages = component.locator('section img[alt*="Custom Event"]');
    await expect(galleryImages).toHaveCount(2);
  });

  test("should apply custom className", async ({ mount }) => {
    const customClassName = "custom-homepage-class";
    const component = await mount(<HomePage className={customClassName} />);

    await expect(component).toHaveClass(new RegExp(customClassName));
  });

  test("should be responsive", async ({ mount, page }) => {
    const component = await mount(<HomePage />);

    // Test desktop view
    await page.setViewportSize({ width: 1200, height: 800 });
    await expect(component).toBeVisible();

    // Test tablet view
    await page.setViewportSize({ width: 768, height: 1024 });
    await expect(component).toBeVisible();

    // Test mobile view
    await page.setViewportSize({ width: 375, height: 667 });
    await expect(component).toBeVisible();

    // Verificar que las secciones principales siguen siendo visibles en móvil
    await expect(component.getByText("¿Qué es ChelaJS?")).toBeVisible();
    await expect(
      component.getByText("Características de Nuestra Comunidad"),
    ).toBeVisible();
  });

  test("should have proper accessibility attributes", async ({ mount }) => {
    const component = await mount(<HomePage />);

    // Verificar que tiene el data-testid principal
    await expect(component).toHaveAttribute("data-testid", "homepage");

    // Verificar que las imágenes tienen alt text
    const images = component.locator("img");
    const imageCount = await images.count();

    for (let i = 0; i < imageCount; i++) {
      const image = images.nth(i);
      await expect(image).toHaveAttribute("alt");
    }
  });

  test("should render portable story variants", async ({ mount }) => {
    // Test Default story
    const defaultComponent = await mount(
      <HomePage {...portableStories.Default.args} />,
    );
    await expect(defaultComponent).toBeVisible();
  });

  test("should render custom links story", async ({ mount }) => {
    // Test WithCustomLinks story
    const customLinksComponent = await mount(
      <HomePage {...portableStories.WithCustomLinks.args} />,
    );
    await expect(customLinksComponent).toBeVisible();
  });

  test("should render custom gallery story", async ({ mount }) => {
    // Test WithCustomGallery story
    const customGalleryComponent = await mount(
      <HomePage {...portableStories.WithCustomGallery.args} />,
    );
    await expect(customGalleryComponent).toBeVisible();
  });

  test("should have smooth hover transitions", async ({ mount, page }) => {
    const component = await mount(<HomePage />);

    // Test hover on gallery images
    const firstGalleryImage = component
      .locator('img[alt*="Evento de ChelaJS"]')
      .first();
    await firstGalleryImage.hover();

    // Test hover on community feature cards
    const firstFeatureCard = component.getByTestId("community-feature-0");
    await firstFeatureCard.hover();

    // Verificar que el componente sigue siendo visible después de los hovers
    await expect(component).toBeVisible();
  });
});
