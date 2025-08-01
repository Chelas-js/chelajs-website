# Diseño Técnico de Componentes - Página Home

**Versión:** 1.0  
**Fecha de creación:** 31 de julio, 2025  
**Última actualización:** 31 de julio, 2025

## Componente Padre: HomePage

### Descripción

Componente principal que orquesta todas las secciones de la página de inicio de ChelaJS Website.

### Ubicación del archivo

- **Path:** `src/components/HomePage.tsx`
- **Story:** `src/stories/HomePage.stories.tsx`

### Características técnicas

- **Framework:** React con TypeScript
- **Styling:** Tailwind CSS
- **Responsivo:** Mobile-first design
- **SEO:** Meta tags optimizados para landing page

### Props

```typescript
interface HomePageProps {
  className?: string;
}
```

### Alcance

- Renderizar todas las secciones de la home en orden correcto
- Gestionar el layout responsive general
- Optimización de performance con lazy loading

### Historias para Storybook

- `Default`: Estado normal de la página completa
- `Mobile`: Vista mobile responsive
- `Loading`: Estado de carga inicial

### Tests Playwright

- Verificar que todas las secciones se rendericen correctamente
- Probar navegación entre secciones
- Validar responsividad en diferentes dispositivos

---

## 1. Componente: Navbar

### Descripción

Barra de navegación superior con logo, enlaces principales y botones de acción.

### Ubicación del archivo

- **Path:** `src/components/Navbar.tsx`
- **Story:** `src/stories/Navbar.stories.tsx`

### Características técnicas

- **Posición:** Fixed top
- **Comportamiento:** Sticky con transparencia en scroll
- **Mobile:** Hamburger menu colapsible
- **Accesibilidad:** ARIA labels y navegación por teclado

### Props

```typescript
interface NavbarProps {
  isLoggedIn?: boolean;
  onLoginClick?: () => void;
  onJoinClick?: () => void;
  className?: string;
}
```

### Elementos incluidos

- **Logo ChelaJS** (componente logo personalizado)
- **Botón "Unirse a la conversación"** (CTA principal)
- **Botón "Login"** (enlace a autenticación)
- **Menu hamburger** (solo mobile)

### Alcance

- Navegación principal del sitio
- Indicador visual de sección activa
- Responsive design con colapso en mobile

### Historias para Storybook

- `Default`: Usuario no autenticado
- `LoggedIn`: Usuario autenticado
- `Mobile`: Vista mobile con hamburger menu
- `Scrolled`: Navbar con fondo después de scroll

### Tests Playwright

- Verificar que todos los enlaces funcionan
- Probar responsive hamburger menu
- Validar accesibilidad con navegación por teclado
- Comprobar comportamiento en scroll

---

## 2. Componente: Hero

### Descripción

Sección principal de bienvenida con mensaje inspiracional e iconos de la comunidad.

### Ubicación del archivo

- **Path:** `src/components/Hero.tsx`
- **Story:** `src/stories/Hero.stories.tsx`

### Características técnicas

- **Layout:** Flexbox centrado
- **Altura:** Full viewport (100vh)
- **Background:** Gradient o imagen de fondo opcional
- **Animaciones:** Fade-in al cargar

### Props

```typescript
interface HeroProps {
  title?: string;
  subtitle?: string;
  ctaText?: string;
  onCtaClick?: () => void;
  backgroundImage?: string;
  className?: string;
}
```

### Elementos incluidos

- **Título principal** (h1 con tipografía destacada)
- **Subtítulo descriptivo** (párrafo complementario)
- **Iconos de comunidad** (tecnologías, cerveza, networking)
- **Call-to-Action button** (unirse a la comunidad)

### Alcance

- Primera impresión del visitante
- Comunicar value proposition principal
- Dirigir al usuario hacia la acción principal

### Historias para Storybook

- `Default`: Contenido estándar
- `WithBackground`: Con imagen de fondo
- `CustomContent`: Con contenido personalizado
- `Mobile`: Vista mobile optimizada

### Tests Playwright

- Verificar renderizado correcto del contenido
- Probar CTA button funcionalidad
- Validar responsive design
- Comprobar animaciones de entrada

---

## 3. Componente: PhotoGallery

### Descripción

Galería visual que muestra experiencias y momentos de la comunidad ChelaJS.

### Ubicación del archivo

- **Path:** `src/components/PhotoGallery.tsx`
- **Story:** `src/stories/PhotoGallery.stories.tsx`

### Características técnicas

- **Layout:** CSS Grid responsive
- **Imágenes:** Lazy loading optimizado
- **Interacción:** Hover effects y modal opcional
- **Performance:** Optimización de imágenes con Next.js Image

### Props

```typescript
interface PhotoGalleryProps {
  photos: Photo[];
  title?: string;
  columns?: number;
  enableModal?: boolean;
  className?: string;
}

interface Photo {
  id: string;
  src: string;
  alt: string;
  caption?: string;
  event?: string;
}
```

### Elementos incluidos

- **Título de sección** (heading descriptivo)
- **Grid de fotos** (responsive columns)
- **Captions opcionales** (descripción de cada foto)
- **Modal de ampliación** (lightbox opcional)

### Alcance

- Mostrar vida de la comunidad
- Generar conexión emocional
- Evidencia social de actividad

### Historias para Storybook

- `Default`: Galería estándar con 6 fotos
- `FewPhotos`: Con 3 fotos solamente
- `ManyPhotos`: Con 12+ fotos
- `WithModal`: Con funcionalidad de modal
- `Mobile`: Vista mobile optimizada

### Tests Playwright

- Verificar carga correcta de imágenes
- Probar lazy loading functionality
- Validar modal si está habilitado
- Comprobar responsive grid behavior

---

## 4. Componente: AboutSection

### Descripción

Sección que presenta qué es ChelaJS con texto descriptivo y call-to-action.

### Ubicación del archivo

- **Path:** `src/components/AboutSection.tsx`
- **Story:** `src/stories/AboutSection.stories.tsx`

### Características técnicas

- **Layout:** Two-column en desktop, stack en mobile
- **Contenido:** Texto enriquecido con markdown support
- **CTA:** Botón prominente para unirse

### Props

```typescript
interface AboutSectionProps {
  title?: string;
  description?: string;
  ctaText?: string;
  onCtaClick?: () => void;
  image?: string;
  reverse?: boolean;
  className?: string;
}
```

### Elementos incluidos

- **Título de sección** ("¿Qué es ChelaJS?")
- **Descripción completa** (misión y visión)
- **Imagen ilustrativa** (opcional, lado derecho)
- **Botón CTA** ("Unirse a la conversación")

### Alcance

- Explicar propósito de la comunidad
- Generar interés en participación
- Convertir visitantes en miembros

### Historias para Storybook

- `Default`: Layout estándar
- `Reversed`: Imagen a la izquierda
- `TextOnly`: Solo texto sin imagen
- `Mobile`: Vista mobile stack

### Tests Playwright

- Verificar renderizado correcto del contenido
- Probar CTA functionality
- Validar responsive layout changes
- Comprobar accesibilidad del texto

---

## 5. Componente: FeaturesGrid

### Descripción

Grilla de 3 elementos que describe las características principales de ChelaJS.

### Ubicación del archivo

- **Path:** `src/components/FeaturesGrid.tsx`
- **Story:** `src/stories/FeaturesGrid.stories.tsx`

### Características técnicas

- **Layout:** CSS Grid 3 columnas desktop, 1 columna mobile
- **Cards:** Componentes reutilizables con iconos
- **Hover:** Efectos de interacción sutiles

### Props

```typescript
interface FeaturesGridProps {
  features: Feature[];
  title?: string;
  className?: string;
}

interface Feature {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  color?: string;
}
```

### Elementos incluidos

- **Título de sección** (opcional)
- **3 Feature Cards** con:
  - Icono representativo
  - Título de característica
  - Descripción breve

### Características sugeridas

1. **Networking** - Conecta con otros developers
2. **Eventos** - Meetups mensuales regulares
3. **Oportunidades** - Job board especializado

### Alcance

- Comunicar beneficios clave
- Diferenciación de la comunidad
- Incentivo para unirse

### Historias para Storybook

- `Default`: 3 features estándar
- `CustomFeatures`: Features personalizadas
- `WithoutTitle`: Sin título de sección
- `Mobile`: Vista mobile stack

### Tests Playwright

- Verificar renderizado de todas las features
- Probar hover effects
- Validar responsive grid behavior
- Comprobar accesibilidad de iconos

---

## 6. Componente: Footer

### Descripción

Pie de página con enlaces sociales, navegación secundaria y créditos.

### Ubicación del archivo

- **Path:** `src/components/Footer.tsx`
- **Story:** `src/stories/Footer.stories.tsx`

### Características técnicas

- **Layout:** Flexbox responsive
- **Enlaces:** External links con target="\_blank"
- **Iconos:** SVG icons para redes sociales

### Props

```typescript
interface FooterProps {
  socialLinks?: SocialLink[];
  copyrightYear?: number;
  className?: string;
}

interface SocialLink {
  platform: "github" | "instagram" | "linkedin";
  url: string;
  label: string;
}
```

### Elementos incluidos

- **Enlaces sociales:**
  - GitHub (repositorio de la comunidad)
  - Instagram (fotos y eventos)
- **Copyright:** "ChelaJS 2025"
- **Enlaces legales** (opcional: términos, privacidad)

### Alcance

- Información de contacto y social
- Navegación secundaria
- Credibilidad y transparencia

### Historias para Storybook

- `Default`: Footer completo
- `MinimalSocial`: Solo enlaces principales
- `WithLegalLinks`: Con enlaces legales
- `Mobile`: Vista mobile optimizada

### Tests Playwright

- Verificar que todos los enlaces externos funcionan
- Probar apertura en nueva pestaña
- Validar accesibilidad de iconos sociales
- Comprobar responsive layout

---

## Componentes de Apoyo

### LogoChelaJS

- **Path:** `src/components/LogoChelaJS.tsx`
- **Propósito:** Logo vectorial reutilizable
- **Props:** `size`, `color`, `className`

### SocialIcon

- **Path:** `src/components/SocialIcon.tsx`
- **Propósito:** Iconos SVG para redes sociales
- **Props:** `platform`, `size`, `color`, `href`

### Button

- **Path:** `src/components/Button.tsx` (ya existe)
- **Propósito:** Botón reutilizable con variantes
- **Mejoras:** Agregar variante "join" para CTAs principales

---

## Consideraciones Técnicas Generales

### Performance

- Lazy loading de imágenes con Next.js Image
- Code splitting por componente
- Optimización de bundle size

### Accesibilidad

- Semantic HTML en todos los componentes
- ARIA labels donde sea necesario
- Contraste de colores WCAG AA
- Navegación por teclado funcional

### SEO

- Structured data para eventos
- Meta tags optimizados
- Schema.org markup para organización

### Testing

- Unit tests con Vitest a través de Storybook
- E2E tests con Playwright
- Visual regression testing en Storybook
- Accessibility testing automatizado

### Responsive Design

- Mobile-first approach
- Breakpoints: 640px, 768px, 1024px, 1280px
- Touch-friendly interface en mobile
- Optimización para tablets

---

## Notas de Implementación

1. **Orden de desarrollo:** Seguir el roadmap de componentes
2. **Reutilización:** Maximizar uso de componentes base existentes
3. **Consistencia:** Seguir design system establecido
4. **Documentation:** Cada componente debe tener su story completa
5. **Testing:** Tests deben cubrir casos happy path y edge cases
