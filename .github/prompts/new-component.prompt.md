---
mode: agent
tools:
  [
    "extensions",
    "codebase",
    "usages",
    "vscodeAPI",
    "problems",
    "changes",
    "testFailure",
    "terminalSelection",
    "terminalLastCommand",
    "openSimpleBrowser",
    "fetch",
    "findTestFiles",
    "searchResults",
    "githubRepo",
    "runCommands",
    "runTasks",
    "editFiles",
    "runNotebooks",
    "search",
    "new",
  ]
---

# Instrucciones para Crear Nuevos Componentes

## Estructura Completa de un Componente

Basándome en el análisis del componente `Footer`, cada componente nuevo debe incluir los siguientes elementos:

### 1. 📁 Estructura de Archivos

Para cada componente `[ComponentName]`, crear:

```
src/components/[ComponentName].tsx          # Componente principal
src/stories/[ComponentName].stories.tsx     # Historias de Storybook
src/stories/[ComponentName].stories.portable.ts  # Historias portables para testing
tests/[ComponentName].spec.tsx             # Tests de Playwright Component Testing
```

### 2. 🧩 Componente Principal (`src/components/[ComponentName].tsx`)

#### Estructura TypeScript:

```tsx
import React from "react";
import { /* iconos de lucide-react */ } from "lucide-react";

// 1. Definir interfaces específicas del dominio
interface [DomainSpecific]Interface {
  // propiedades específicas del contexto
}

// 2. Props principales del componente
interface [ComponentName]Props {
  // Props funcionales
  [functionalProp]?: [Type];
  // Props de configuración
  [configProp]?: [Type];
  // Props de estilo
  className?: string;
}

// 3. Valores por defecto (si aplica)
const default[DataName]: [Type][] = [
  // datos por defecto
];

// 4. Componente principal
const [ComponentName]: React.FC<[ComponentName]Props> = ({
  [prop1] = default[Value],
  [prop2] = default[Value],
  className = "",
}) => {
  // Funciones helper internas
  const render[Helper] = ([param]: [Type]) => {
    // lógica de renderizado condicional
  };

  return (
    <[htmlElement]
      className={`[baseClasses] ${className}`}
      data-testid="[component-identifier]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="[layoutClasses]">
          {/* Secciones del componente */}
          <div className="[sectionClasses]">
            {/* Contenido */}
          </div>
        </div>
      </div>
    </[htmlElement]>
  );
};

export default [ComponentName];
```

#### Elementos Clave Observados en Footer:

- **Interfaces tipadas**: Definir interfaces específicas del dominio (`SocialLink`)
- **Props con valores por defecto**: Usar defaultProps pattern
- **Clases CSS responsivas**: Mobile-first con breakpoints (`md:`, `lg:`)
- **Iconos con Lucide React**: Para consistencia visual
- **data-testid**: Para identificación en tests
- **Accesibilidad**: `aria-label`, `title`, `target="_blank"`, `rel="noopener noreferrer"`
- **Estilos de hover**: Transiciones suaves con Tailwind
- **Layout responsivo**: Flexbox con adaptación móvil/desktop

### 3. 📚 Historias de Storybook (`src/stories/[ComponentName].stories.tsx`)

```tsx
import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import [ComponentName] from "../components/[ComponentName]";

const meta: Meta<typeof [ComponentName]> = {
  title: "Components/[ComponentName]",
  component: [ComponentName],
  parameters: {
    layout: "fullscreen", // o "centered" según el componente
  },
  tags: ["autodocs"],
  argTypes: {
    [prop1]: {
      control: "[controlType]",
      description: "[descripción en español]",
    },
    [prop2]: {
      control: "[controlType]",
      description: "[descripción en español]",
    },
    className: {
      control: "text",
      description: "Clases CSS adicionales",
    },
  },
  args: {},
};

export default meta;
type Story = StoryObj<typeof meta>;

// Historia por defecto
export const Default: Story = {
  args: {},
};

// Variaciones mínimas
export const [Minimal]: Story = {
  args: {
    [prop]: [minimalValue],
  },
};

// Casos con datos personalizados
export const [Custom]: Story = {
  args: {
    [prop]: [customValue],
  },
};

// Con estilos personalizados
export const WithCustomStyling: Story = {
  args: {
    className: "[customClasses]",
  },
};

// Vista móvil
export const Mobile: Story = {
  args: {},
  parameters: {
    viewport: {
      defaultViewport: "mobile1",
    },
  },
};
```

#### Historias Requeridas:

1. **Default**: Estado básico del componente
2. **[Minimal]**: Versión reducida/mínima
3. **[Custom]**: Con datos personalizados
4. **WithCustomStyling**: Con clases CSS personalizadas
5. **Mobile**: Vista optimizada para móvil

### 4. 🔄 Historias Portables (`src/stories/[ComponentName].stories.portable.ts`)

```typescript
import { composeStories } from "@storybook/react";
import * as stories from "./[ComponentName].stories";

export default composeStories(stories);
```

### 5. 🧪 Tests de Playwright CT (`tests/[ComponentName].spec.tsx`)

```tsx
import { createTest } from "@storybook/react/experimental-playwright";
import { test as base, expect } from "@playwright/experimental-ct-react";
import stories from "../src/stories/[ComponentName].stories.portable";

const test = createTest(base);

test.describe("[ComponentName] Component", () => {
  // Test básico de renderizado
  test("Default story renders correctly", async ({ mount }) => {
    const component = await mount(<stories.Default />);
    await expect(component).toBeVisible();

    // Verificar elementos principales
    await expect(component.getByTestId("[component-identifier]")).toBeVisible();
    await expect(component.getByText("[expectedText]")).toBeVisible();
  });

  // Tests de interactividad (si aplica)
  test("[Interactive elements] are functional", async ({ mount }) => {
    const component = await mount(<stories.Default />);

    // Test de links, botones, etc.
    const [element] = component.getByRole("[role]", { name: "[name]" });
    await expect([element]).toBeVisible();
    await expect([element]).toHaveAttribute("[attribute]", "[value]");
  });

  // Tests de variaciones
  test("[Variation] story works correctly", async ({ mount }) => {
    const component = await mount(<stories.[Variation] />);
    // Tests específicos de la variación
  });

  // Tests de estilos personalizados
  test("WithCustomStyling story applies custom classes", async ({ mount }) => {
    const component = await mount(<stories.WithCustomStyling />);
    await expect(component).toBeVisible();
    expect(component.nth(0)).toHaveClass(/[expectedClass]/);
  });

  // Tests de hover/interacción (si aplica)
  test("Hover effects work correctly", async ({ mount, page }) => {
    const component = await mount(<stories.Default />);
    const [element] = component.getByRole("[role]");

    await [element].hover();
    await expect([element]).toHaveClass(/[hoverClass]/);
  });

  // Tests de responsive
  test("Mobile story maintains responsive layout", async ({ mount }) => {
    const component = await mount(<stories.Mobile />);
    await expect(component).toBeVisible();

    const container = component.locator("[responsiveSelector]");
    await expect(container).toBeVisible();
  });

  // Tests de accesibilidad
  test("Accessibility features are present", async ({ mount }) => {
    const component = await mount(<stories.Default />);

    // Verificar aria-labels, titles, etc.
    const [element] = component.getByRole("[role]");
    await expect([element]).toHaveAttribute("aria-label", "[expectedLabel]");
    await expect([element]).toHaveAttribute("title", "[expectedTitle]");
  });
});
```

#### Categorías de Tests Requeridas:

1. **Renderizado básico**: Verificar que el componente se muestra
2. **Funcionalidad**: Links, botones, interacciones
3. **Variaciones**: Cada historia debe tener su test
4. **Estilos personalizados**: Verificar clases CSS aplicadas
5. **Interacciones**: Hover, focus, etc.
6. **Responsive**: Layout en diferentes viewports
7. **Accesibilidad**: ARIA labels, roles, attributes

### 6. 🎨 Convenciones de Diseño

#### Clases Tailwind Estándar:

- **Layout**: `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`
- **Responsive**: `flex flex-col md:flex-row`
- **Espaciado**: `space-y-6 md:space-y-0`
- **Colores de marca**:
  - Principal: `text-[#343433]`
  - Hover: `hover:text-yellow-400`
  - Secundario: `text-gray-600`, `text-gray-400`
- **Transiciones**: `transition-colors duration-200`

#### Patrones de Accesibilidad:

- Links externos: `target="_blank" rel="noopener noreferrer"`
- Labels descriptivos: `aria-label` y `title`
- Roles semánticos apropiados
- Contraste de colores adecuado

### 7. 📋 Checklist de Verificación

Antes de considerar un componente completo, verificar:

- [ ] ✅ Componente principal con TypeScript tipado
- [ ] ✅ Interfaces bien definidas
- [ ] ✅ Props con valores por defecto
- [ ] ✅ Clases CSS responsivas
- [ ] ✅ data-testid para testing
- [ ] ✅ 5 historias mínimas en Storybook
- [ ] ✅ Archivo stories.portable.ts
- [ ] ✅ 7 categorías de tests cubiertas
- [ ] ✅ Tests de accesibilidad
- [ ] ✅ Tests de responsive
- [ ] ✅ Documentación en argTypes
- [ ] ✅ Consistencia con design system del proyecto

### 8. 🚀 Comandos para Desarrollo

```bash
# Desarrollar con Storybook
bun run storybook

# Ejecutar tests
bun run test:ct

# Verificar todos los tests
bun run test
```

---

**Nota**: Estas instrucciones están basadas en el análisis completo del componente Footer, que sirve como referencia de calidad y estándares para el proyecto ChelaJS.
