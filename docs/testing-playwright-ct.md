# Testing con Playwright Component Testing y Portable Stories

Este proyecto utiliza **Playwright Component Testing** junto con **Portable Stories** de Storybook para probar los componentes de forma aislada y reutilizar las configuraciones de las historias.

## Configuración

### Dependencias instaladas

- `@playwright/experimental-ct-react` - Para testing de componentes React
- `@storybook/react` - Para portable stories API

### Estructura de archivos

```
playwright/
├── index.html          # HTML template para Playwright CT
└── index.tsx           # Configuración global de Storybook

tests/
└── Footer.spec.tsx     # Tests del componente Footer

src/stories/
├── Footer.stories.tsx          # Historias de Storybook
└── Footer.stories.portable.ts  # Portable stories para testing
```

## Comandos disponibles

```bash
# Ejecutar todos los tests de componentes
npm run test:ct

# Ejecutar con interfaz visual
npm run test:ct:ui

# Ejecutar con browser visible
npm run test:ct:headed

# Ejecutar tests específicos
npm run test:ct -- tests/Footer.spec.tsx

# Ejecutar en browser específico
npm run test:ct -- --project chromium
```

## Cómo funciona

### 1. Portable Stories

El archivo `Footer.stories.portable.ts` convierte las historias de Storybook en componentes React reutilizables:

```typescript
import { composeStories } from "@storybook/react";
import * as stories from "./Footer.stories";

export default composeStories(stories);
```

### 2. Configuración global

El archivo `playwright/index.tsx` aplica la configuración global de Storybook:

```typescript
import { setProjectAnnotations } from "@storybook/react";
import * as previewAnnotations from "../.storybook/preview";

setProjectAnnotations(previewAnnotations);
```

### 3. Tests con portable stories

Los tests importan las portable stories y las montan usando el API de Playwright CT:

```typescript
import { createTest } from '@storybook/react/experimental-playwright';
import { test as base, expect } from '@playwright/experimental-ct-react';
import stories from '../src/stories/Footer.stories.portable';

const test = createTest(base);

test('Default story renders correctly', async ({ mount }) => {
  const component = await mount(<stories.Default />);
  await expect(component).toBeVisible();
});
```

## Ventajas de este enfoque

1. **Reutilización**: Las mismas historias sirven para desarrollo, documentación y testing
2. **Consistencia**: Los tests usan exactamente la misma configuración que Storybook
3. **Mantenimiento**: Un solo lugar para definir variantes del componente
4. **Performance**: Playwright CT es más rápido que E2E tests
5. **Debugging**: Excelente integración con VS Code y herramientas de debug

## Tipos de tests implementados

- ✅ **Renderizado básico**: Verificar que el componente se renderiza
- ✅ **Props y variantes**: Probar diferentes historias (Default, MinimalSocial, etc.)
- ✅ **Interacciones**: Hover effects y estados
- ✅ **Accesibilidad**: ARIA labels, títulos, atributos
- ✅ **Links externos**: Href, target, rel attributes
- ✅ **Responsive**: Layout móvil y desktop
- ✅ **Estilos personalizados**: Aplicación de clases CSS

## Best Practices

1. **Una historia por variante**: Cada configuración del componente debe tener su historia
2. **Tests descriptivos**: Nombres claros que explican qué se está probando
3. **Verificaciones específicas**: No solo que se renderiza, sino que funciona correctamente
4. **Accesibilidad**: Siempre incluir verificaciones de a11y
5. **Error handling**: Probar casos edge y errores
