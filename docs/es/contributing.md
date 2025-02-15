## Guía para Colaboradores de chelajs-website

**Introducción**

Esta guía tiene como objetivo proporcionar instrucciones claras y concisas para quienes colaboran con el proyecto `chelajs-website`. Complementa la documentación del repositorio y detalla el flujo de trabajo y las convenciones para una contribución efectiva. Seguir estas pautas asegura un proceso de desarrollo colaborativo, consistente y de alta calidad.

**Flujo de Contribución**

Todas las contribuciones a `chelajs-website` se gestionan mediante Pull Requests (PRs). No se permiten commits directos a la rama `main`. Este flujo asegura que cada cambio sea revisado antes de integrarse a la rama principal.

**Ramas**

- **`main`:** Contiene la versión estable más reciente del proyecto. Es la base para nuevas funcionalidades y correcciones. **No se deben realizar cambios directamente en esta rama.**

**Pull Requests para Mejoras (Features)**

Para proponer una mejora o nueva funcionalidad a `chelajs-website`, sigue estos pasos:

1. **Clona el repositorio:** Clona `chelajs-website` en tu entorno local.
2. **Crea una rama:** Crea una rama desde `main`. Nómbrala descriptivamente, indicando la funcionalidad (ej. `feature/nueva-seccion-blog`).
3. **Desarrolla el cambio:** Implementa la mejora en tu rama. Asegura código bien comentado y adherido a las convenciones del proyecto (Prettier y ESLint, configurados en el repositorio).
4. **Prueba localmente:** Verifica el correcto funcionamiento del cambio en tu entorno local, usando `npm install` para dependencias y `npm run dev` para iniciar el proyecto en desarrollo. Confirma que el cambio se reproduce sin errores.
5. **Describe el cambio en el PR:** Al crear el Pull Request, detalla el cambio realizado:
   - **Cambios realizados:** Describe específicamente las modificaciones en el código.
   - **Ventajas:** Justifica el beneficio del cambio para el proyecto, explicando mejoras en funcionalidad, rendimiento, experiencia de usuario u otros aspectos relevantes.
   - **Reproducción local:** Proporciona instrucciones claras para que el revisor pueda verificar el cambio en su entorno local, incluyendo pasos de navegación o configuración específicos.
6. **Dirige el PR a `main`:** Asegura que el PR tenga como destino la rama `main`.
7. **Espera revisión:** El mantenedor revisará tu PR. Atiende a comentarios y sugerencias, realizando los cambios solicitados y actualizando el PR hasta su aprobación.

**Pull Requests para Correcciones (Fixes)**

Si encuentras un error en `chelajs-website` y deseas corregirlo:

1. **Clona el repositorio:** Clona `chelajs-website` en tu entorno local.
2. **Crea una rama:** Crea una rama desde `main`. Nómbrala descriptivamente, indicando el error (ej. `fix/error-formulario-contacto`).
3. **Corrige el error:** Implementa la corrección en tu rama local. Asegura código bien comentado y adherido a las convenciones del proyecto.
4. **Prueba localmente:** Verifica que la corrección elimina el error y funciona correctamente en tu entorno local.
5. **Describe problema y solución en el PR:** Al crear el Pull Request, detalla el problema y la solución:
   - **Descripción del problema:** Describe claramente el error encontrado.
   - **Reproducción del problema:** Proporciona pasos detallados para que el revisor pueda reproducir el error en su entorno. Una descripción precisa facilita la comprensión y verificación de la corrección.
   - **Solución implementada:** Describe brevemente cómo se solucionó el problema.
6. **Dirige el PR a `main`:** Asegura que el PR tenga como destino la rama `main`.
7. **Espera revisión:** El mantenedor revisará tu PR. Atiende a comentarios y sugerencias, realizando los cambios solicitados y actualizando el PR hasta su aprobación.

**Reporte de Issues**

Para reportar un problema, error o sugerencia para el proyecto, crea un Issue en Github, incluyendo:

- **Título descriptivo:** Resume el problema o sugerencia concisamente.
- **Descripción detallada:** Describe el problema con el máximo detalle posible.
- **Impacto en el usuario (si aplica):** Describe cómo el problema afecta la experiencia del usuario, si es relevante.
- **Pasos para reproducir:** Proporciona pasos claros y detallados para que el mantenedor y colaboradores puedan reproducir el problema eficientemente.
- **Entorno (si aplica):** Indica navegador, sistema operativo u otra información relevante del entorno donde se reproduce el problema.

**Asignación de Issues**

El mantenedor del proyecto revisará y asignará todos los Issues automáticamente, categorizando, priorizando y asignándolos a los colaboradores o resolviéndolos directamente.

**Roles del Proyecto**

- **Mantenedor:** Responsable de:
  - Revisar y gestionar Issues.
  - Revisar y gestionar Pull Requests.
  - Mantener la calidad y coherencia del código.
  - Asignar tareas a otros desarrolladores.
  - Comunicarse con la comunidad de colaboradores.

El mantenedor es el punto de contacto principal para consultas. Puede contactar a otros desarrolladores para colaboración o segundas opiniones.

**Entorno de Desarrollo Local**

Para contribuir a `chelajs-website`, configura tu entorno local:

1. **Clona el repositorio:** `git clone <URL_DEL_REPOSITORIO>`
2. **Navega al directorio:** `cd chelajs-website`
3. **Instala dependencias:** `npm install`
4. **Ejecuta en desarrollo:** `npm run dev`

**Versión de Node.js y Gestión de Entorno**

La versión de Node.js soportada está en `.tool-versions`. Se **recomienda** `asdf-vm` (https://asdf-vm.com/) para gestionar versiones de Node.js y otras herramientas, asegurando la versión correcta y evitando problemas de compatibilidad.

**Tecnologías del Proyecto**

- **Next.js:** `chelajs-website` está construido con Next.js. Familiarízate con su documentación: [https://nextjs.org/docs](https://nextjs.org/docs).
- **Tailwind CSS:** Utilizamos Tailwind CSS para estilos. Consulta su documentación: [https://tailwindcss.com/docs](https://tailwindcss.com/docs).

**Procesamiento de Cambios con GraphQL de Github**

Los cambios vía Pull Requests se procesan con la API GraphQL de Github, permitiendo gestión eficiente e integración con flujos de trabajo. No se requiere interacción directa con GraphQL, pero el proceso de revisión se basa en esta tecnología.

**Consideraciones Adicionales**

- **Calidad del Código:** Se espera código de alta calidad, bien estructurado, legible y mantenible, siguiendo buenas prácticas y convenciones del proyecto.
- **Comunicación:** Mantente comunicativo con el mantenedor y colaboradores, respondiendo a comentarios en Issues y PRs de manera oportuna.
- **Espíritu Colaborativo:** Fomenta un ambiente de colaboración y respeto. Todas las contribuciones son valiosas.

**Agradecimiento**

Gracias por tu interés en colaborar con `chelajs-website`. Tu contribución es fundamental. Estamos a disposición para cualquier consulta.
