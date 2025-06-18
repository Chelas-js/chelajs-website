# AGENT instructions for chelajs-website

Este repositorio contiene un proyecto Next.js. Para trabajar sobre él ten en cuenta lo siguiente:

- La versión de Node.js utilizada se define en `.tool-versions` (23.7.0). Se recomienda usar `asdf` para gestionarla.
- Instala dependencias con `npm install` antes de ejecutar tareas.
- Ejecuta `npm run dev` para iniciar el entorno de desarrollo.
- Asegura el formato y la linting de código antes de enviar cambios:
  - `npm run fmt` formatea con Prettier.
  - `npm run lint` comprueba la linting.
  - `npm run build` verifica que la aplicación compila correctamente.
- Todo cambio debe enviarse mediante Pull Request hacia la rama `main`. No realices commits directos en `main`.
- El commit generado con los cambios debe seguir la convención Conventional Commit.
- Coloca documentación en la carpeta `docs`. Los archivos en español se encuentran bajo `docs/es`.
- **Los componentes deben crearse en la carpeta `src/components/`.**
- **Todos los componentes deben ser escritos en React (TypeScript), siempre retornar un componente por defecto (export default) y utilizar las clases utilitarias de Tailwind CSS para los estilos.**

### Formato recomendado para componentes

```tsx
import React from "react";

interface MiComponenteProps {
  // ...definir props aquí
}

const MiComponente: React.FC<MiComponenteProps> = (props) => {
  // ...lógica del componente
  return (
    <div className="p-4 bg-white rounded shadow">
      {" "}
      {/* Usa clases de Tailwind aquí */}
      {/* contenido del componente */}
    </div>
  );
};

export default MiComponente;
```

## Cómo crear una historia de Storybook

Las historias de Storybook deben colocarse en el directorio:

- `src/stories/`

La estructura base para una historia de Storybook es la siguiente:

1. **Importaciones**: Importa los tipos de Storybook, el componente y utilidades necesarias.
2. **Meta**: Define un objeto `meta` con:
   - `title`: ruta/nombre de la historia.
   - `component`: el componente a mostrar.
   - `parameters`: configuración opcional (por ejemplo, layout).
   - `tags`: etiquetas para autodocumentación.
   - `argTypes`: controles para los props.
   - `args`: valores por defecto de los props.
3. **Exportación por defecto**: Exporta el objeto `meta` como default.
4. **Tipo Story**: Define un tipo `Story` basado en el meta.
5. **Historias**: Exporta constantes para cada variante del componente, cada una con su objeto `args` para personalizar los props.

### Ejemplo

```typescript
import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Button } from "./Button";

const meta = {
  title: "Example/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    backgroundColor: { control: "color" },
  },
  args: { onClick: () => {} },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    primary: true,
    label: "Button",
  },
};

export const Secondary: Story = {
  args: {
    label: "Button",
  },
};
```
