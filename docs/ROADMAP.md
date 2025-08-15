# ROADMAP - Desarrollo de Componentes ChelaJS Website

**Versión:** 1.0  
**Fecha de creación:** 31 de julio, 2025  
**Última actualización:** 31 de julio, 2025

## Objetivo General

Implementar todos los componentes necesarios para la página home de ChelaJS Website siguiendo un enfoque incremental y testeable.

## Fase 1: Componentes Base y Infraestructura 🏗️

**Duración estimada:** 1 semana  
**Prioridad:** Alta

### 1.1 Componentes de Apoyo (Base Components)

#### ✅ Button (Ya existe)

- **Estado:** Completado
- **Archivo:** `src/components/Button.tsx`
- **Story:** `src/stories/Button.stories.tsx`
- **Acción:** Revisar y agregar variante "join" para CTAs

#### 🔨 LogoChelaJS

- **Prioridad:** Alta
- **Duración:** 1 día
- **Dependencias:** Ninguna
- **Archivos a crear:**
  - `src/components/LogoChelaJS.tsx`
  - `src/stories/LogoChelaJS.stories.tsx`
- **Props principales:** `size`, `color`, `className`
- **Tests:** Renderizado, variaciones de tamaño y color

#### 🔨 SocialIcon

- **Prioridad:** Media
- **Duración:** 1 día
- **Dependencias:** Ninguna
- **Archivos a crear:**
  - `src/components/SocialIcon.tsx`
  - `src/stories/SocialIcon.stories.tsx`
- **Props principales:** `platform`, `size`, `color`, `href`
- **Tests:** Enlaces externos, accesibilidad, iconos SVG

## Fase 2: Componentes de Layout Principal 📐

**Duración estimada:** 1.5 semanas  
**Prioridad:** Alta

### 2.1 Navbar - Navegación Principal

#### 🔨 Navbar

- **Prioridad:** Crítica
- **Duración:** 2 días
- **Dependencias:** LogoChelaJS, Button
- **Archivos a crear:**
  - `src/components/Navbar.tsx`
  - `src/stories/Navbar.stories.tsx`
- **Features clave:**
  - Logo ChelaJS integrado
  - Botón "Unirse a la conversación"
  - Botón "Login"
  - Menu hamburger responsive
  - Sticky behavior con transparencia
- **Tests:**
  - Navegación por enlaces
  - Responsive hamburger menu
  - Comportamiento sticky scroll
  - Accesibilidad teclado

### 2.2 Footer - Pie de Página

#### 🔨 Footer

- **Prioridad:** Media
- **Duración:** 1.5 días
- **Dependencias:** SocialIcon
- **Archivos a crear:**
  - `src/components/Footer.tsx`
  - `src/stories/Footer.stories.tsx`
- **Features clave:**
  - Enlaces sociales (GitHub, Instagram)
  - Copyright "ChelaJS 2025"
  - Layout responsive
- **Tests:**
  - Enlaces externos funcionando
  - Apertura en nueva pestaña
  - Responsive layout
  - Accesibilidad iconos

## Fase 3: Componentes de Contenido Principal 🎯

**Duración estimada:** 2 semanas  
**Prioridad:** Alta

### 3.1 Hero Section - Impacto Principal

#### 🔨 Hero

- **Prioridad:** Crítica
- **Duración:** 2 días
- **Dependencias:** Button
- **Archivos a crear:**
  - `src/components/Hero.tsx`
  - `src/stories/Hero.stories.tsx`
- **Features clave:**
  - Título y subtítulo impactante
  - Iconos de comunidad (tecnologías, cerveza)
  - CTA principal button
  - Background gradient/imagen
  - Animaciones fade-in
- **Tests:**
  - Renderizado contenido
  - CTA functionality
  - Responsive design
  - Animaciones entrada

### 3.2 AboutSection - Presentación

#### 🔨 AboutSection

- **Prioridad:** Alta
- **Duración:** 1.5 días
- **Dependencias:** Button
- **Archivos a crear:**
  - `src/components/AboutSection.tsx`
  - `src/stories/AboutSection.stories.tsx`
- **Features clave:**
  - "¿Qué es ChelaJS?" title
  - Descripción misión/visión
  - Imagen ilustrativa opcional
  - Botón "Unirse a la conversación"
  - Layout two-column responsive
- **Tests:**
  - Renderizado contenido
  - CTA functionality
  - Responsive layout changes
  - Accesibilidad texto

### 3.3 FeaturesGrid - Características Clave

#### 🔨 FeaturesGrid

- **Prioridad:** Alta
- **Duración:** 2 días
- **Dependencias:** Ninguna (iconos propios)
- **Archivos a crear:**
  - `src/components/FeaturesGrid.tsx`
  - `src/stories/FeaturesGrid.stories.tsx`
- **Features clave:**
  - Grid 3 columnas (desktop) / 1 columna (mobile)
  - Feature cards con iconos
  - Hover effects sutiles
  - Features sugeridas:
    1. Networking - Conecta con developers
    2. Eventos - Meetups mensuales
    3. Oportunidades - Job board especializado
- **Tests:**
  - Renderizado todas las features
  - Hover effects
  - Responsive grid behavior
  - Accesibilidad iconos

## Fase 4: Componentes de Media y Galería 📸

**Duración estimada:** 1.5 semanas  
**Prioridad:** Media-Alta

### 4.1 PhotoGallery - Experiencias Comunidad

#### 🔨 PhotoGallery

- **Prioridad:** Media-Alta
- **Duración:** 3 días
- **Dependencias:** Next.js Image optimization
- **Archivos a crear:**
  - `src/components/PhotoGallery.tsx`
  - `src/stories/PhotoGallery.stories.tsx`
- **Features clave:**
  - CSS Grid responsive
  - Lazy loading optimizado
  - Hover effects
  - Modal lightbox opcional
  - Captions descriptivos
  - Performance optimization
- **Tests:**
  - Carga correcta imágenes
  - Lazy loading functionality
  - Modal si habilitado
  - Responsive grid behavior

## Fase 5: Integración y Componente Principal 🏠

**Duración estimada:** 1 semana  
**Prioridad:** Crítica

### 5.1 HomePage - Componente Orquestador

#### 🔨 HomePage

- **Prioridad:** Crítica
- **Duración:** 2 días
- **Dependencias:** Todos los componentes anteriores
- **Archivos a crear:**
  - `src/components/HomePage.tsx`
  - `src/stories/HomePage.stories.tsx`
- **Features clave:**
  - Orquesta todas las secciones
  - Layout responsive general
  - Performance optimization
  - SEO meta tags
  - Lazy loading sections
- **Tests:**
  - Renderizado todas las secciones
  - Navegación entre secciones
  - Responsividad dispositivos
  - Performance metrics

### 5.2 Integración en App Principal

#### 🔨 Actualización page.tsx

- **Prioridad:** Crítica
- **Duración:** 0.5 días
- **Dependencias:** HomePage component
- **Archivos a modificar:**
  - `src/app/page.tsx`
- **Acción:** Reemplazar contenido actual con HomePage component

## Fase 6: Testing y Optimización 🧪

**Duración estimada:** 1 semana  
**Prioridad:** Alta

### 6.1 Testing Integral

#### 🔍 E2E Testing con Playwright

- **Duración:** 2 días
- **Scope:** Todos los componentes
- **Tests principales:**
  - User journey completo
  - Navegación entre secciones
  - CTAs funcionando
  - Responsive en múltiples dispositivos
  - Performance benchmarks

#### 🔍 Accessibility Testing

- **Duración:** 1 día
- **Scope:** Todos los componentes
- **Tests principales:**
  - WCAG 2.1 AA compliance
  - Navegación por teclado
  - Screen reader compatibility
  - Contraste colores

#### 🔍 Visual Regression Testing

- **Duración:** 1 día
- **Scope:** Todas las stories de Storybook
- **Tests principales:**
  - Consistencia visual
  - Responsive snapshots
  - Cross-browser compatibility

### 6.2 Performance Optimization

#### ⚡ Optimización de Performance

- **Duración:** 1.5 días
- **Scope:** HomePage y componentes
- **Optimizaciones:**
  - Bundle size analysis
  - Code splitting optimization
  - Image optimization
  - Lazy loading fine-tuning
  - Core Web Vitals optimization

## Criterios de Definición de "Terminado" ✅

Para cada componente se considera terminado cuando:

### 📝 Código

- [ ] Componente React TypeScript implementado
- [ ] Props interface bien definida
- [ ] Código siguiendo convenciones del proyecto
- [ ] Responsive design implementado
- [ ] Accesibilidad básica (ARIA labels, semantic HTML)

### 📚 Documentación

- [ ] Story principal de Storybook creada
- [ ] Al menos 3 variantes de story (Default, Mobile, Edge cases)
- [ ] Props documentadas en Storybook
- [ ] Comentarios JSDoc en el código

### 🧪 Testing

- [ ] Tests unitarios pasando
- [ ] Tests de accesibilidad básicos
- [ ] Tests responsive funcionando
- [ ] No hay errores de console en Storybook

### 🎨 Diseño

- [ ] Siguiendo design system (Tailwind classes)
- [ ] Hover states implementados
- [ ] Consistent con otros componentes
- [ ] Optimizado para mobile y desktop

## Dependencias y Bloqueadores 🚧

### Dependencias Externas

- **Imágenes de la galería:** Necesitamos fotos reales de eventos ChelaJS
- **Logo final:** Diseño definitivo del logo ChelaJS
- **Contenido copy:** Textos definitivos para hero y about section

### Dependencias Técnicas

- **Next.js Image:** Para optimización de PhotoGallery
- **Iconos:** Definir librería de iconos (Heroicons, Lucide, custom SVG)
- **Fonts:** Tipografías definitivas del design system

### Posibles Bloqueadores

- **Performance:** Si PhotoGallery causa problemas de rendimiento
- **Responsive:** Complejidad en algunos breakpoints
- **Content:** Disponibilidad de contenido real para testing

## Notas de Implementación 📋

### Estándares de Código

- Seguir convenciones establecidas en `AGENTS.md`
- Utilizar TypeScript estricto
- Componentes funcionales con hooks
- Export default para todos los componentes
- Props interface bien tipadas

### Estructura de Archivos

```
src/components/
├── HomePage.tsx
├── Navbar.tsx
├── Hero.tsx
├── PhotoGallery.tsx
├── AboutSection.tsx
├── FeaturesGrid.tsx
├── Footer.tsx
├── LogoChelaJS.tsx
└── SocialIcon.tsx

src/stories/
├── HomePage.stories.tsx
├── Navbar.stories.tsx
├── Hero.stories.tsx
├── PhotoGallery.stories.tsx
├── AboutSection.stories.tsx
├── FeaturesGrid.stories.tsx
├── Footer.stories.tsx
├── LogoChelaJS.stories.tsx
└── SocialIcon.stories.tsx
```

### Comandos de Desarrollo

```bash
# Desarrollo
npm run dev # Next.js development
npm run sb  # Storybook

# Testing
npm run test     # Run tests
npm run test:e2e # Playwright E2E

# Calidad
npm run fmt   # Format code
npm run lint  # Lint check
npm run build # Production build
```

## Hitos y Entregables 🎯

### Hito 1: Base Components

- **Entregable:** LogoChelaJS, SocialIcon funcionando en Storybook
- **Criterio:** Stories completas y tests pasando

### Hito 2: Layout Foundation

- **Entregable:** Navbar y Footer completamente funcionales
- **Criterio:** Navegación working, responsive, accessible

### Hito 3: Content Sections

- **Entregable:** Hero, About, Features implementados
- **Criterio:** Contenido rendering, CTAs funcionando, mobile-optimized

### Hito 4: Media Integration

- **Entregable:** PhotoGallery con optimización performance
- **Criterio:** Lazy loading working, responsive grid, modal functional

### Hito 5: Full Integration

- **Entregable:** HomePage completa y integrada en app
- **Criterio:** User journey completo funcionando end-to-end

### Hito 6: Production Ready

- **Entregable:** Sitio optimizado y testeado para producción
- **Criterio:** Performance score >90, accessibility compliance, tests passing

**📞 Contacto del proyecto:** Equipo ChelaJS Development  
**🔄 Frecuencia de revisión:** Semanal (viernes)  
**📊 Tracking:** GitHub Issues y Project Board
