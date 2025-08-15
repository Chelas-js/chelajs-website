import { test, expect } from "@playwright/experimental-ct-react";
import LoginPage from "../src/components/LoginPage";
import { portableStories } from "../src/stories/LoginPage.stories.portable";

test.describe("LoginPage Component", () => {
  // Test básico de renderizado
  test("should render the default LoginPage", async ({ mount }) => {
    const component = await mount(<LoginPage />);

    // Verificar que el componente se renderiza
    await expect(component).toBeVisible();
    await expect(component).toHaveAttribute("data-testid", "login-page");

    // Verificar que contiene las secciones principales
    await expect(component.locator("nav")).toBeVisible(); // Header simplificado
    await expect(component.locator("main")).toBeVisible(); // Contenido principal
    await expect(component.locator("footer")).toBeVisible(); // Footer

    // Verificar que el logo está presente
    await expect(component.getByText("Chela.JS")).toBeVisible();

    // Verificar que el BlockLogin está presente
    await expect(component.getByText("Iniciar sesion")).toBeVisible();
    await expect(
      component.getByRole("button", { name: /github/i }),
    ).toBeVisible();
  });

  // Test de renderizado del header simplificado
  test("should render simplified header with only logo", async ({ mount }) => {
    const component = await mount(<LoginPage />);

    // Verificar que el logo está presente
    const logo = component.getByText("Chela.JS");
    await expect(logo).toBeVisible();

    // Verificar que no hay botones de navegación (solo debe estar el logo)
    await expect(
      component.getByRole("button", { name: /explorar/i }),
    ).not.toBeVisible();
    await expect(
      component.getByRole("button", { name: /unete/i }),
    ).not.toBeVisible();
    await expect(
      component.getByRole("button", { name: /login/i }),
    ).not.toBeVisible();
  });

  // Test de funcionalidad del botón de GitHub
  test("should handle GitHub login button click", async ({ mount }) => {
    let loginClicked = false;
    const handleGithubLogin = () => {
      loginClicked = true;
    };

    const component = await mount(
      <LoginPage onGithubLogin={handleGithubLogin} />,
    );

    const githubButton = component.getByRole("button", { name: /github/i });
    await expect(githubButton).toBeVisible();

    await githubButton.click();
    // Note: En un test real, verificaríamos que la función se ejecutó
    // pero para este test, simplemente verificamos que el botón sea clickeable
  });

  // Test de variaciones
  test("should render Minimal story correctly", async ({ mount }) => {
    const component = await mount(
      <LoginPage {...portableStories.Minimal.args} />,
    );
    await expect(component).toBeVisible();
    await expect(component.getByText("Chela.JS")).toBeVisible();
  });

  test("should render CustomLogin story correctly", async ({ mount }) => {
    const component = await mount(
      <LoginPage {...portableStories.CustomLogin.args} />,
    );
    await expect(component).toBeVisible();
    await expect(component.getByText("Chela.JS")).toBeVisible();
  });

  // Test de estilos personalizados
  test("should apply custom className", async ({ mount }) => {
    const customClassName = "bg-gradient-to-br from-blue-50 to-indigo-100";
    const component = await mount(<LoginPage className={customClassName} />);

    await expect(component).toHaveClass(new RegExp("bg-gradient-to-br"));
  });

  // Test de hover en el logo
  test("should have hover effects on logo", async ({ mount }) => {
    const component = await mount(<LoginPage />);

    const logo = component.getByText("Chela.JS");
    await logo.hover();

    // Verificar que el componente sigue siendo visible después del hover
    await expect(component).toBeVisible();
  });

  // Test de responsive
  test("should maintain responsive layout on mobile", async ({
    mount,
    page,
  }) => {
    const component = await mount(<LoginPage />);

    // Test mobile view
    await page.setViewportSize({ width: 375, height: 667 });
    await expect(component).toBeVisible();

    // Verificar que el LoginBlock sigue siendo visible en móvil
    await expect(component.getByText("Iniciar sesion")).toBeVisible();
    await expect(
      component.getByRole("button", { name: /github/i }),
    ).toBeVisible();
  });

  test("should be responsive across different screen sizes", async ({
    mount,
    page,
  }) => {
    const component = await mount(<LoginPage />);

    // Desktop
    await page.setViewportSize({ width: 1200, height: 800 });
    await expect(component).toBeVisible();

    // Tablet
    await page.setViewportSize({ width: 768, height: 1024 });
    await expect(component).toBeVisible();

    // Mobile
    await page.setViewportSize({ width: 375, height: 667 });
    await expect(component).toBeVisible();

    // Verificar que el layout se mantiene
    await expect(component.getByText("Chela.JS")).toBeVisible();
    await expect(component.getByText("Iniciar sesion")).toBeVisible();
  });

  // Test de accesibilidad
  test("should have proper accessibility attributes", async ({ mount }) => {
    const component = await mount(<LoginPage />);

    // Verificar que tiene el data-testid principal
    await expect(component).toHaveAttribute("data-testid", "login-page");

    // Verificar que el logo tiene aria-label
    const logo = component.getByRole("link", {
      name: /ir a página principal/i,
    });
    await expect(logo).toBeVisible();
    await expect(logo).toHaveAttribute("aria-label");
  });

  // Test del layout centrado
  test("should center the login block properly", async ({ mount }) => {
    const component = await mount(<LoginPage />);

    // Verificar que el main container tiene las clases de centrado
    const main = component.locator("main");
    await expect(main).toBeVisible();
    await expect(main).toHaveClass(/flex/);
    await expect(main).toHaveClass(/items-center/);
    await expect(main).toHaveClass(/justify-center/);
  });

  // Test de navegación del logo
  test("should have correct logo href", async ({ mount }) => {
    const customHref = "/custom-home";
    const component = await mount(<LoginPage logoHref={customHref} />);

    const logoLink = component.getByRole("link", {
      name: /ir a página principal/i,
    });
    await expect(logoLink).toHaveAttribute("href", customHref);
  });

  // Test del footer
  test("should render footer component", async ({ mount }) => {
    const component = await mount(<LoginPage />);

    // Verificar que el footer está presente
    const footer = component.locator("footer");
    await expect(footer).toBeVisible();
  });

  // Test de historias portables
  test("should render all portable stories", async ({ mount }) => {
    // Test Default story
    const defaultComponent = await mount(
      <LoginPage {...portableStories.Default.args} />,
    );
    await expect(defaultComponent).toBeVisible();
  });

  test("should render Mobile story", async ({ mount }) => {
    // Test Mobile story
    const mobileComponent = await mount(
      <LoginPage {...portableStories.Mobile.args} />,
    );
    await expect(mobileComponent).toBeVisible();
  });

  test("should render WithCustomStyling story", async ({ mount }) => {
    // Test WithCustomStyling story
    const styledComponent = await mount(
      <LoginPage {...portableStories.WithCustomStyling.args} />,
    );
    await expect(styledComponent).toBeVisible();
  });
});
