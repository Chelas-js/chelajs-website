# ChelaJS Website

Sitio de la comunidad Chela.js: un hub para nuestros meetups mensuales donde se junta tecnología y cerveza. Aquí promovemos eventos, visibilizamos a la comunidad y compartimos enlaces relevantes.

## Stack y arquitectura

- Framework: Next.js 15 (App Router) — código en `src/app/`
- Lenguaje: React + TypeScript
- Estilos: Tailwind CSS (paleta con `yellow-400` y texto `#343433`)
- Componentes: `src/components/` (con patrones propios) + Radix UI (Tabs)
- Documentación de componentes: Storybook en `src/stories/`
- Pruebas de componentes: Playwright Component Testing en `tests/`

## Requisitos previos

- Node.js 23.7.0 (definido en `.tool-versions`). Recomendado usar asdf.
- npm 10+.

## Instalación y ejecución

1. Instalar dependencias

```bash
npm install
```

2. Variables de entorno

Crea un archivo `.env.local` (o `.env`) tomando como referencia `example.env`:

```env
NEXT_PUBLIC_NEXT_EVENT_DATE="2025-08-30"
NEXT_PUBLIC_NEXT_EVENT_LINK="https://lu.ma/chelas.js"
```

3. Ejecutar en desarrollo

```bash
npm run dev
```

Abre http://localhost:3000. La home usa `src/app/page.tsx` y muestra información del próximo evento con las variables anteriores.

## Scripts disponibles

- Desarrollo: `npm run dev`
- Build: `npm run build`
- Producción: `npm start`
- Formato (Prettier): `npm run fmt`
- Lint (Prettier check): `npm run lint`
- Storybook: `npm run storybook` (alias `npm run sb`)
- Build Storybook: `npm run build-storybook`
- Tests de componentes (Playwright CT):
  - CLI: `npm run test:ct`
  - UI: `npm run test:ct:ui`
  - Headed: `npm run test:ct:headed`

## Desarrollo de componentes

- Ubicación: `src/components/`
- Requisitos:
  - Escribir en React + TypeScript
  - Usar clases utilitarias de Tailwind CSS
  - Exportación por defecto del componente
- Patrones existentes: ver `Button.tsx` (variantes: primary, black-outline, regular, link, blue-outline), `Footer.tsx`, `CustomLink.tsx`, `Shield.tsx`, `UserCard.tsx`, etc.

### Storybook

- Historias en `src/stories/` (usa `@storybook/nextjs-vite` con `tags: ["autodocs"]`).
- Ejemplo: `Footer.stories.tsx` con controles para props y variantes.

## Pruebas (Playwright Component Testing)

- Configuración en `playwright-ct.config.ts` (reporter HTML y `tests/` como raíz).
- Ejemplo: `tests/Footer.spec.tsx` valida renderizado, enlaces sociales, props y accesibilidad.
- Al ejecutar tests se genera reporte en `playwright-report/`.

## Estilo de código y calidad

- Formateo y linting con Prettier: `npm run fmt` y `npm run lint`.
- Tipado con TypeScript.
- Recomendación: ejecutar `npm run build` antes de abrir PR para validar el proyecto.

## Estructura de carpetas (resumen)

```
src/
   app/            # App Router, layout y páginas
   components/     # Componentes React (TS) + Shields + UI
   dbs/            # Datos (p.ej. db-members.json)
   stories/        # Historias de Storybook
tests/            # Pruebas de componentes (Playwright CT)
docs/             # Documentación (ES en docs/es)
```

## Convenciones y contribución

- No hacer commits directos a `main`. Todo cambio va por Pull Request.
- Commits: seguir Conventional Commits.
- Documentación principal en español bajo `docs/es/`.
- Node gestionado con asdf: versión en `.tool-versions`.

## Documentación relacionada

- Requerimientos de producto: `docs/product.md`
- Guía para agentes y convenciones del repo: `AGENTS.md`
- Documentos en español: `docs/es/`

## Créditos y comunidad

- GitHub: https://github.com/chelas-js
- Instagram: https://instagram.com/chelajscommunity
- Eventos (Luma): https://lu.ma/chelas.js

## Licencia

Por definir (revisa el archivo LICENSE si existe).
