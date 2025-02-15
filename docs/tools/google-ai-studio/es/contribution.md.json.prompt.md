
---

**👤 role: user**

---
---
---

Crea un documento técnico para los colaboradores del proyecto "chelajs-website". Este documento se utilizará para complementar la documentación del repositorio en un proyecto de Next.js. No incluir un índice.

Las contribuciones deben ser por Pull Request (PR). No se permiten cambios directos a la rama principal. La rama principal es `main` y cuenta con los últimos cambios.

Los PR que sean mejoras deben estar bien comentados y lo más detallados posible. Describa el cambio y las ventajas de este cambio. El cambio debe poder ser reproducido en un entorno local. El PR debe estar dirigido a la rama `main`. Todos los cambios serán procesados por GraphQL provisto por Github.

Si el PR es para una corrección (fix), se debe describir el problema y cómo reproducirlo.

Los issues, si son reportes de problemas, se debe describir el problema, su impacto en el usuario (si es posible), y cómo poder reproducirlo. Todos los issues serán asignados de manera automática por el mantenedor del proyecto.

Roles del proyecto: Hay un mantenedor asignado que se encarga de revisar los issues y PR en primera instancia. Además, puede contactar a otros desarrolladores para que se hagan cargo de los procesos de mantenimiento.

Si quieres colaborar en el proyecto, debes clonar el proyecto en tu equipo y generar los cambios de manera local. Este proyecto se instala con el comando `npm install` y se ejecuta con `npm run dev`. La versión soportada para el proyecto está declarada en el archivo `.tool-versions`. Considera usar https://asdf-vm.com/ para instalar el entorno de ejecución correspondiente. Este proyecto está escrito en Next.js. Te recomendamos leer la documentación y usamos Tailwind para los estilos del proyecto.


---

**👤 role: model**

---
---
---

My thinking process to create the technical document followed these steps:

1. **Deconstruct the Request:** I first broke down the request into its core components and constraints:

    * **Target Audience:** Contributors to "chelajs-website" (Next.js project).
    * **Document Type:** Technical document to complement repository documentation.  Not a replacement, but *additional* information, likely focusing on contribution guidelines and workflow.
    * **Format:** No index.  This implies a relatively short and focused document.
    * **Key Requirements (Implicit and Explicit):**
        * Contribution via Pull Requests only.
        * No direct `main` branch commits.
        * `main` is the current stable branch.
        * PRs for improvements need detailed descriptions (change, benefits, local reproduction).
        * PRs for fixes need problem description and reproduction steps.
        * Issues need problem description, user impact (if possible), and reproduction steps.
        * Issues are automatically assigned by the maintainer.
        * Project roles: Maintainer is the first point of contact for reviews.
        * Local development workflow: Clone, `npm install`, `npm run dev`, `.tool-versions` for environment, asdf-vm recommended, Next.js and Tailwind.

2. **Identify the Purpose of the Document:** The document aims to guide contributors on *how* to contribute effectively and follow the project's development workflow.  It's about process and conventions, not necessarily deep technical details *of* the website itself.

3. **Structure the Document:**  Given the constraints and purpose, I decided on a structure that flows logically and addresses each point in the request. I opted for clear headings to make it easily scannable:

    * **Título:**  A clear and concise title. "Documento Técnico para Colaboradores de chelajs-website" is straightforward.
    * **Introducción:**  A brief welcome and statement of purpose.  Setting the stage for contribution.
    * **Flujo de Contribución:**  This is the core section, detailing the PR-based workflow.  Breaking it down into "Pull Requests para Mejoras" and "Pull Requests para Correcciones" directly addresses the request's specific PR requirements.
    * **Reporte de Issues:**  Another key section, outlining the issue reporting process as requested.
    * **Roles del Proyecto:**  Explaining the maintainer's role clarifies the project's governance structure.
    * **Entorno de Desarrollo Local:**  Providing practical setup instructions is crucial for contributors to get started.  This section incorporates the tooling information (Node.js version, asdf-vm, Next.js, Tailwind).
    * **Consideraciones Adicionales:**  A catch-all for important but slightly less structured points like code quality, communication, and the open and collaborative spirit.
    * **Agradecimiento:**  A positive closing to encourage contributions.

4. **Drafting Content - Focusing on Clarity and Actionability:** For each section, I focused on:

    * **Direct Language:**  Using clear and concise language, avoiding jargon where possible and explaining technical terms when necessary.
    * **Action-Oriented Language:**  Using verbs that encourage action, like "clona," "ejecuta," "describe," "crea."
    * **Addressing Each Requirement:**  Ensuring every point from the original request is addressed in the document.  For example, explicitly mentioning `main` branch, GraphQL for PR processing, and `.tool-versions`.
    * **Providing Context and Rationale:**  Briefly explaining *why* certain procedures are in place (e.g., PRs for code review, issues for tracking).
    * **Focusing on "How To":**  The document is a "how-to" guide for contributors. It's less about the "what" of the website and more about the "how" of contributing to it.

5. **Review and Refinement:**  After drafting, I mentally reviewed the document against the original request, asking:

    * Does it address all the requirements?
    * Is it clear and easy to understand for a new contributor?
    * Is it concise and to the point?
    * Is it encouraging and welcoming?

    This review step helped me refine the wording, improve the flow, and ensure completeness. For example, initially, I might have just said "use asdf-vm," but I refined it to "Consider using asdf-vm" to be more helpful without being prescriptive. I also made sure to explicitly mention Tailwind and Next.js because they were highlighted in the prompt.

By following these steps, I aimed to create a technical document that is not only informative but also practical and welcoming for potential contributors to the "chelajs-website" project.

---
---


## Documento Técnico para Colaboradores de chelajs-website

**Introducción**

Este documento técnico tiene como objetivo proporcionar una guía clara y concisa para los colaboradores del proyecto `chelajs-website`.  Complementa la documentación general del repositorio y detalla el flujo de trabajo y las convenciones que se deben seguir para contribuir de manera efectiva al proyecto.  Al seguir estas pautas, aseguramos un proceso de desarrollo colaborativo, consistente y de alta calidad.

**Flujo de Contribución**

Todas las contribuciones al proyecto `chelajs-website` se gestionan a través de Pull Requests (PRs). No se permiten cambios directos a la rama `main`. Esto garantiza que todos los cambios pasen por un proceso de revisión antes de ser integrados a la rama principal.

**Ramas**

* **`main`:** Esta rama contiene la última versión estable del proyecto.  Es la rama base para todas las nuevas funcionalidades y correcciones.  **No se deben realizar cambios directamente en esta rama.**

**Pull Requests para Mejoras (Features)**

Si deseas proponer una mejora o nueva funcionalidad para `chelajs-website`, sigue estos pasos:

1. **Clona el repositorio:**  Clona el repositorio `chelajs-website` en tu entorno local.
2. **Crea una rama:**  Crea una nueva rama a partir de la rama `main`.  Nombrar la rama de manera descriptiva, indicando la funcionalidad que se va a implementar (ej. `feature/nueva-seccion-blog`).
3. **Desarrolla el cambio:**  Implementa la mejora en tu rama local.  Asegúrate de que el código esté bien comentado y siga las convenciones de estilo del proyecto (principalmente las dictadas por Prettier y ESLint, configurados en el proyecto).
4. **Prueba localmente:**  Verifica que el cambio funciona correctamente en tu entorno local.  Utiliza los comandos `npm install` para instalar las dependencias y `npm run dev` para ejecutar el proyecto en modo desarrollo.  Asegúrate de que el cambio se reproduce sin errores.
5. **Describe el cambio en el PR:** Al crear el Pull Request, proporciona una descripción detallada del cambio realizado.  Explica:
    * **Qué se cambió:** Describe específicamente las modificaciones realizadas en el código.
    * **Ventajas del cambio:**  Justifica por qué este cambio es beneficioso para el proyecto.  Explica cómo mejora la funcionalidad, el rendimiento, la experiencia del usuario, o cualquier otro aspecto relevante.
    * **Cómo reproducir el cambio localmente:**  Proporciona instrucciones claras y concisas para que el revisor pueda verificar el cambio en su propio entorno local. Esto puede incluir pasos específicos de navegación en la aplicación o instrucciones de configuración.
6. **Dirige el PR a `main`:** Asegúrate de que el Pull Request esté dirigido a la rama `main`.
7. **Espera la revisión:** El mantenedor del proyecto revisará tu Pull Request.  Estate atento a los comentarios y sugerencias que puedan surgir durante la revisión.  Realiza los cambios solicitados y actualiza el PR hasta que sea aprobado.

**Pull Requests para Correcciones (Fixes)**

Si encuentras un error o problema en `chelajs-website` y deseas solucionarlo, sigue estos pasos:

1. **Clona el repositorio:** Clona el repositorio `chelajs-website` en tu entorno local.
2. **Crea una rama:** Crea una nueva rama a partir de la rama `main`.  Nombrar la rama de manera descriptiva, indicando el error que se va a corregir (ej. `fix/error-formulario-contacto`).
3. **Corrige el error:**  Implementa la corrección en tu rama local.  Asegúrate de que el código esté bien comentado y siga las convenciones de estilo del proyecto.
4. **Prueba localmente:** Verifica que la corrección funciona correctamente en tu entorno local y que el error ya no se reproduce.
5. **Describe el problema y la solución en el PR:** Al crear el Pull Request, proporciona una descripción detallada del problema y la solución.  Explica:
    * **Descripción del problema:** Describe claramente el error o problema que has encontrado.
    * **Cómo reproducir el problema:**  Proporciona pasos detallados para que el revisor pueda reproducir el problema en su propio entorno. Cuanto más precisa sea la descripción, más fácil será para el revisor entender y verificar la corrección.
    * **Solución implementada:** Describe brevemente cómo has solucionado el problema.
6. **Dirige el PR a `main`:** Asegúrate de que el Pull Request esté dirigido a la rama `main`.
7. **Espera la revisión:** El mantenedor del proyecto revisará tu Pull Request.  Estate atento a los comentarios y sugerencias que puedan surgir durante la revisión.  Realiza los cambios solicitados y actualiza el PR hasta que sea aprobado.

**Reporte de Issues**

Si encuentras un problema, error o tienes una sugerencia para el proyecto, puedes reportarlo como un Issue en el repositorio de Github.  Al crear un Issue, proporciona la siguiente información:

* **Título descriptivo:**  Resume el problema o la sugerencia de manera clara y concisa.
* **Descripción detallada del problema:** Describe el problema con la mayor cantidad de detalles posible.
* **Impacto en el usuario (si es posible):**  Si el problema afecta la experiencia del usuario, describe cómo lo hace.  ¿Impide realizar alguna acción? ¿Causa confusión?
* **Pasos para reproducir el problema:**  Proporciona pasos claros y detallados para que el mantenedor y otros colaboradores puedan reproducir el problema.  Esto es crucial para entender y solucionar el problema de manera eficiente.
* **Entorno (si aplica):**  Indica el navegador, sistema operativo o cualquier otra información relevante del entorno en el que se reproduce el problema.

**Asignación de Issues**

Todos los Issues serán revisados y asignados automáticamente por el mantenedor del proyecto.  El mantenedor se encargará de categorizar, priorizar y asignar los Issues a los colaboradores correspondientes o resolverlos directamente.

**Roles del Proyecto**

* **Mantenedor:** El mantenedor del proyecto es responsable de:
    * Revisar y gestionar los Issues.
    * Revisar y gestionar los Pull Requests.
    * Mantener la calidad del código y la coherencia del proyecto.
    * Asignar tareas a otros desarrolladores según sea necesario.
    * Comunicarse con la comunidad de colaboradores.

El mantenedor es el primer punto de contacto para cualquier pregunta o duda relacionada con el proyecto.  Puede contactar a otros desarrolladores para colaborar en tareas específicas o para obtener segundas opiniones.

**Entorno de Desarrollo Local**

Para contribuir al proyecto `chelajs-website`, es necesario configurar un entorno de desarrollo local. Sigue estos pasos:

1. **Clona el repositorio:** `git clone <URL_DEL_REPOSITORIO>`
2. **Navega al directorio del proyecto:** `cd chelajs-website`
3. **Instala las dependencias:** `npm install`
4. **Ejecuta el proyecto en modo desarrollo:** `npm run dev`

**Versión de Node.js y Gestión de Entorno**

La versión de Node.js soportada para este proyecto está declarada en el archivo `.tool-versions` en la raíz del repositorio.  Se **recomienda encarecidamente** utilizar `asdf-vm` (https://asdf-vm.com/) para gestionar las versiones de Node.js y otras herramientas necesarias para el proyecto.  `asdf-vm` permite asegurar que todos los colaboradores utilicen la versión correcta de Node.js, evitando problemas de compatibilidad y inconsistencias en el desarrollo.

**Tecnologías del Proyecto**

* **Next.js:**  `chelajs-website` está construido con Next.js, un framework de React para aplicaciones web en el lado del servidor y estáticas.  Es fundamental familiarizarse con la documentación de Next.js para contribuir eficazmente.  Puedes encontrar la documentación oficial aquí: [https://nextjs.org/docs](https://nextjs.org/docs).
* **Tailwind CSS:**  Utilizamos Tailwind CSS para los estilos del proyecto.  Tailwind CSS es un framework CSS utility-first que permite un desarrollo rápido y consistente de la interfaz de usuario.  Familiarízate con la documentación de Tailwind CSS: [https://tailwindcss.com/docs](https://tailwindcss.com/docs).

**Procesamiento de Cambios con GraphQL de Github**

Todos los cambios realizados a través de Pull Requests serán procesados utilizando la API GraphQL de Github. Esto permite una gestión eficiente de las contribuciones y la integración con otras herramientas y flujos de trabajo del proyecto.  No necesitas interactuar directamente con GraphQL, pero es importante saber que el proceso de revisión y gestión de PRs se basa en esta tecnología.

**Consideraciones Adicionales**

* **Calidad del Código:**  Se espera que el código contribuido sea de alta calidad, bien estructurado, legible y mantenible.  Sigue las buenas prácticas de programación y las convenciones del proyecto.
* **Comunicación:**  Mantente comunicativo con el mantenedor y otros colaboradores.  Responde a los comentarios en los Issues y Pull Requests de manera oportuna.
* **Espíritu Colaborativo:**  Fomenta un ambiente de colaboración y respeto.  Las contribuciones de todos son valiosas y bienvenidas.

**Agradecimiento**

¡Gracias por tu interés en contribuir a `chelajs-website`!  Tu colaboración es fundamental para el éxito de este proyecto.  Esperamos tus contribuciones y estamos a tu disposición para cualquier duda o consulta.


---

**👤 role: user**

---
---
---

Ya se entiende que es un documento técnico. El lector está leyendo este documento porque tiene un nivel alto. Evita usar la palabra "Documento Técnico"


---

**👤 role: model**

---
---
---

De acuerdo, comprendo. Aquí tienes el documento revisado, asumiendo un público técnico y eliminando la referencia a "Documento Técnico":

## Guía para Colaboradores de chelajs-website

**Introducción**

Esta guía tiene como objetivo proporcionar instrucciones claras y concisas para quienes colaboran con el proyecto `chelajs-website`. Complementa la documentación del repositorio y detalla el flujo de trabajo y las convenciones para una contribución efectiva. Seguir estas pautas asegura un proceso de desarrollo colaborativo, consistente y de alta calidad.

**Flujo de Contribución**

Todas las contribuciones a `chelajs-website` se gestionan mediante Pull Requests (PRs).  No se permiten commits directos a la rama `main`. Este flujo asegura que cada cambio sea revisado antes de integrarse a la rama principal.

**Ramas**

* **`main`:**  Contiene la versión estable más reciente del proyecto. Es la base para nuevas funcionalidades y correcciones. **No se deben realizar cambios directamente en esta rama.**

**Pull Requests para Mejoras (Features)**

Para proponer una mejora o nueva funcionalidad a `chelajs-website`, sigue estos pasos:

1. **Clona el repositorio:** Clona `chelajs-website` en tu entorno local.
2. **Crea una rama:**  Crea una rama desde `main`. Nómbrala descriptivamente, indicando la funcionalidad (ej. `feature/nueva-seccion-blog`).
3. **Desarrolla el cambio:** Implementa la mejora en tu rama.  Asegura código bien comentado y adherido a las convenciones del proyecto (Prettier y ESLint, configurados en el repositorio).
4. **Prueba localmente:** Verifica el correcto funcionamiento del cambio en tu entorno local, usando `npm install` para dependencias y `npm run dev` para iniciar el proyecto en desarrollo. Confirma que el cambio se reproduce sin errores.
5. **Describe el cambio en el PR:** Al crear el Pull Request, detalla el cambio realizado:
    * **Cambios realizados:** Describe específicamente las modificaciones en el código.
    * **Ventajas:** Justifica el beneficio del cambio para el proyecto, explicando mejoras en funcionalidad, rendimiento, experiencia de usuario u otros aspectos relevantes.
    * **Reproducción local:**  Proporciona instrucciones claras para que el revisor pueda verificar el cambio en su entorno local, incluyendo pasos de navegación o configuración específicos.
6. **Dirige el PR a `main`:** Asegura que el PR tenga como destino la rama `main`.
7. **Espera revisión:** El mantenedor revisará tu PR. Atiende a comentarios y sugerencias, realizando los cambios solicitados y actualizando el PR hasta su aprobación.

**Pull Requests para Correcciones (Fixes)**

Si encuentras un error en `chelajs-website` y deseas corregirlo:

1. **Clona el repositorio:** Clona `chelajs-website` en tu entorno local.
2. **Crea una rama:** Crea una rama desde `main`. Nómbrala descriptivamente, indicando el error (ej. `fix/error-formulario-contacto`).
3. **Corrige el error:** Implementa la corrección en tu rama local. Asegura código bien comentado y adherido a las convenciones del proyecto.
4. **Prueba localmente:** Verifica que la corrección elimina el error y funciona correctamente en tu entorno local.
5. **Describe problema y solución en el PR:** Al crear el Pull Request, detalla el problema y la solución:
    * **Descripción del problema:** Describe claramente el error encontrado.
    * **Reproducción del problema:** Proporciona pasos detallados para que el revisor pueda reproducir el error en su entorno. Una descripción precisa facilita la comprensión y verificación de la corrección.
    * **Solución implementada:** Describe brevemente cómo se solucionó el problema.
6. **Dirige el PR a `main`:** Asegura que el PR tenga como destino la rama `main`.
7. **Espera revisión:** El mantenedor revisará tu PR. Atiende a comentarios y sugerencias, realizando los cambios solicitados y actualizando el PR hasta su aprobación.

**Reporte de Issues**

Para reportar un problema, error o sugerencia para el proyecto, crea un Issue en Github, incluyendo:

* **Título descriptivo:** Resume el problema o sugerencia concisamente.
* **Descripción detallada:** Describe el problema con el máximo detalle posible.
* **Impacto en el usuario (si aplica):** Describe cómo el problema afecta la experiencia del usuario, si es relevante.
* **Pasos para reproducir:** Proporciona pasos claros y detallados para que el mantenedor y colaboradores puedan reproducir el problema eficientemente.
* **Entorno (si aplica):**  Indica navegador, sistema operativo u otra información relevante del entorno donde se reproduce el problema.

**Asignación de Issues**

El mantenedor del proyecto revisará y asignará todos los Issues automáticamente, categorizando, priorizando y asignándolos a los colaboradores o resolviéndolos directamente.

**Roles del Proyecto**

* **Mantenedor:** Responsable de:
    * Revisar y gestionar Issues.
    * Revisar y gestionar Pull Requests.
    * Mantener la calidad y coherencia del código.
    * Asignar tareas a otros desarrolladores.
    * Comunicarse con la comunidad de colaboradores.

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

* **Next.js:**  `chelajs-website` está construido con Next.js. Familiarízate con su documentación: [https://nextjs.org/docs](https://nextjs.org/docs).
* **Tailwind CSS:**  Utilizamos Tailwind CSS para estilos. Consulta su documentación: [https://tailwindcss.com/docs](https://tailwindcss.com/docs).

**Procesamiento de Cambios con GraphQL de Github**

Los cambios vía Pull Requests se procesan con la API GraphQL de Github, permitiendo gestión eficiente e integración con flujos de trabajo. No se requiere interacción directa con GraphQL, pero el proceso de revisión se basa en esta tecnología.

**Consideraciones Adicionales**

* **Calidad del Código:** Se espera código de alta calidad, bien estructurado, legible y mantenible, siguiendo buenas prácticas y convenciones del proyecto.
* **Comunicación:** Mantente comunicativo con el mantenedor y colaboradores, respondiendo a comentarios en Issues y PRs de manera oportuna.
* **Espíritu Colaborativo:** Fomenta un ambiente de colaboración y respeto. Todas las contribuciones son valiosas.

**Agradecimiento**

Gracias por tu interés en colaborar con `chelajs-website`. Tu contribución es fundamental.  Estamos a disposición para cualquier consulta.


