# Componente UserCard

`UserCard` muestra una tarjeta de presentación con tres secciones: perfil, trabajo y datos curiosos. El color de fondo y texto son personalizables y la estructura se adapta según el tamaño de pantalla.

Se ubica en `src/components/UserCard.tsx` y acepta las siguientes props principales:

- **name** (`string`): nombre a mostrar.
- **username** (`string`): usuario o handle.
- **avatarUrl** (`string`): URL de la imagen de perfil.
- **socials** (`object`): enlaces de Instagram, GitHub y LinkedIn.
- **workTitle** (`string`) y **workDescription** (`string[]`): título y líneas de la sección de trabajo.
- **funFactTitle** (`string`) y **funFacts** (`string[]`): título y lista de datos curiosos.
- **backgroundColor** (`string`, opcional): color de fondo (por defecto `#4285F4`).
- **textColor** (`string`, opcional): color del texto (por defecto `#FFFFFF`).
- **rounded** (`boolean`, opcional): bordes redondeados (por defecto `true`).
- **style** (`object`, opcional): estilos extra.

La tarjeta es responsive: en pantallas pequeñas las secciones se apilan verticalmente. Incluye iconos de redes sociales accesibles con `aria-label` y se estiliza mediante Tailwind CSS.
