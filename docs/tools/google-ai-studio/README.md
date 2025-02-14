# Generación de Documentos con Google AI Studio

**Ejemplo rápido de uso:**

```bash
sh docs/tools/google-ai-studio/run.sh es/contribution.md.json
```

**Ejemplo rápido de uso con flags:**

```bash
sh docs/tools/google-ai-studio/run.sh es/contribution.md.json --clean
sh docs/tools/google-ai-studio/run.sh es/contribution.md.json --pull
```

Este documento explica cómo utilizar Google AI Studio y el script `run.sh` incluido en esta carpeta para generar archivos Markdown para el proyecto. El objetivo principal es simplificar y estandarizar el uso de inteligencia artificial en la creación de archivos de documentación, facilitando la colaboración y la continuidad del trabajo entre diferentes desarrolladores.

## Propósito

Esta herramienta está diseñada para ayudar a generar contenido de documentos de manera eficiente y consistente, utilizando la potencia de los modelos de lenguaje de Google AI Studio. Al estandarizar el proceso, se asegura que los archivos generados sean coherentes y fáciles de mantener, incluso si diferentes miembros del equipo contribuyen a su creación o mantenimiento.

## Requisitos Previos

Antes de utilizar el script, asegúrate de tener lo siguiente:

1. **Clave de API de Google AI Studio:**

   - Necesitarás una clave de API para acceder a los servicios de Google AI Studio. Puedes obtenerla de forma gratuita en [https://aistudio.google.com/](https://aistudio.google.com/).
   - Guarda esta clave de API, la necesitarás en el siguiente paso.

2. **Archivo `.env`:**

   - En la misma carpeta donde se encuentra el script `run.sh`, crea un archivo llamado `.env`.
   - Dentro del archivo `.env`, define la variable de entorno `GEMINI_API_KEY` y asígnale tu clave de API de Google AI Studio. Debería verse así:

     ```env
     GEMINI_API_KEY=TU_CLAVE_API_AQUÍ
     ```

     **Reemplaza `TU_CLAVE_API_AQUÍ` con tu clave de API real.**

## Cómo Utilizar

El script `run.sh` facilita la interacción con la API de Google AI Studio. Sigue estos pasos para generar documentos:

1. **Crea un archivo de prompt en formato JSON:**

   - Para generar un archivo Markdown específico, crea un archivo JSON que contenga tu prompt y la configuración para Google AI Studio.
   - **Convención de Nombres:** Se recomienda nombrar el archivo de prompt de manera que se corresponda con el archivo Markdown que deseas generar, pero con la extensión `.json`. Por ejemplo, si quieres generar `contribution.md`, el archivo de prompt debería llamarse `contribution.md.json`.

   - **Estructura del archivo JSON de Prompt:**

     ```json
     {
       "contents": [
         {
           "role": "user",
           "parts": [
             {
               "text": "TU_PROMPT_AQUI"
             }
           ]
         }
       ],
       "generationConfig": {
         "temperature": 0.7,
         "topK": 64,
         "topP": 0.95,
         "maxOutputTokens": 65536,
         "responseMimeType": "text/plain"
       },
       "model": "nombre-del-modelo", // Opcional: Especifica el modelo a usar
       "systemInstruction": {
         // Opcional: Instrucciones para el modelo
         "role": "user",
         "parts": [
           {
             "text": "Instruccion para el modelo..."
           }
         ]
       }
     }
     ```

     **Desglose del archivo JSON:**

     - **`contents`**: Un array que define el contenido de la conversación. En este caso, generalmente solo tenemos un turno de conversación del `user` con el prompt principal.

       - **`role`**: Define el rol del participante en la conversación. Aquí es `user` porque somos nosotros enviando el prompt.
       - **`parts`**: Un array que contiene las partes del mensaje para este rol.
         - **`text`**: Aquí es donde colocas **TU PROMPT PRINCIPAL**. Reemplaza `"TU_PROMPT_AQUI"` con las instrucciones detalladas para el documento que deseas generar.

     - **`generationConfig`**: Define parámetros que controlan cómo Google AI Studio generará la respuesta. (Ver descripción detallada en la sección anterior).

     - **`model` (Opcional)**: Permite especificar el modelo de Google AI Studio que se utilizará para generar la respuesta. Si no se especifica, se utilizará el modelo por defecto. Puedes encontrar los nombres de modelos disponibles en la documentación de Google AI Studio. Ejemplo: `"model": "gemini-2.0-flash-thinking-exp-01-21"`.

     - **`systemInstruction` (Opcional)**: Permite definir instrucciones a nivel de sistema para el modelo. Esto puede ser útil para guiar el comportamiento general del modelo, establecer un tono específico o definir restricciones.
       - **`role`**: Rol para la instrucción del sistema. Generalmente se usa `user`.
       - **`parts`**: Un array que contiene las partes de la instrucción.
         - **`text`**: Aquí se coloca la **INSTRUCCIÓN PARA EL MODELO**. Ejemplo: `"text": "Actúa como un experto en documentación técnica."`

   - **Ejemplo de contenido para `contribution.md.json` con `model` y `systemInstruction`:**

     ```json
     {
       "contents": [
         {
           "role": "user",
           "parts": [
             {
               "text": "Escribe un documento Markdown de guía de contribución para un proyecto de código abierto. Incluye secciones sobre cómo reportar errores, proponer nuevas funcionalidades y el proceso para enviar Pull Requests.  El tono debe ser amigable y acogedor para nuevos colaboradores."
             }
           ]
         }
       ],
       "generationConfig": {
         "temperature": 0.7,
         "topK": 64,
         "topP": 0.95,
         "maxOutputTokens": 65536,
         "responseMimeType": "text/plain"
       },
       "model": "gemini-pro",
       "systemInstruction": {
         "role": "user",
         "parts": [
           {
             "text": "Actúa como un redactor técnico experto en proyectos de código abierto."
           }
         ]
       }
     }
     ```

2. **Ejecuta el script `run.sh`:**

   - Abre tu terminal, navega hasta la carpeta que contiene el script `run.sh` y los archivos de prompt.
   - Ejecuta el script utilizando `sh` y la ruta completa al script, pasando como argumento el nombre del archivo de prompt JSON que creaste.

     ```bash
     sh docs/tools/google-ai-studio/run.sh contribution.md.json
     ```

     **Flags Adicionales:**

     El script `run.sh` soporta los siguientes flags para modificar su comportamiento:

     - **`--clean`**: Elimina los archivos temporales de respuesta (`<prompt_file>.res.json`) después de generar el archivo Markdown del prompt.

       ```bash
       sh docs/tools/google-ai-studio/run.sh contribution.md.json --clean
       ```

     - **`--pull`**: Fuerza una nueva llamada a la API de Google AI Studio utilizando el mismo prompt JSON. Reescribe el archivo de respuesta temporal (`<prompt_file>.res.json`) y actualiza el archivo Markdown del prompt (`<prompt_file>.prompt.md`) con la nueva respuesta. Útil si quieres obtener una nueva generación sin modificar el prompt.

       ```bash
       sh docs/tools/google-ai-studio/run.sh contribution.md.json --pull
       ```

     - **`--make-prompt-md`**: Regenera únicamente el archivo Markdown del prompt (`<prompt_file>.prompt.md`) utilizando la respuesta JSON existente (`<prompt_file>.res.json`). No realiza una nueva llamada a la API. Útil si el archivo Markdown del prompt se ha borrado accidentalmente o si deseas regenerarlo por alguna razón.

       ```bash
       sh docs/tools/google-ai-studio/run.sh contribution.md.json --make-prompt-md
       ```

     - **`--info-model`**: Imprime información sobre el modelo que se está utilizando para la generación (nombre del modelo). No genera ningún archivo.
       ```bash
       sh docs/tools/google-ai-studio/run.sh contribution.md.json --info-model
       ```

3. **Revisa los archivos generados:**

   - Después de ejecutar el script, se generarán dos nuevos archivos (a menos que se use `--info-model`):

     - **`<prompt_file>.res.json` (Archivo Temporal de Respuesta):** Este archivo contiene la respuesta cruda de la API de Google AI Studio en formato JSON. **Este archivo es temporal y está destinado a ser eliminado después de ser utilizado. Se elimina automáticamente si se usa el flag `--clean`.**

     - **`<prompt_file>.prompt.md` (Archivo Markdown del Prompt y Respuesta):** Este archivo contiene:

       - El prompt original en formato Markdown para una fácil lectura y referencia.
       - La respuesta generada por Google AI Studio, también en formato Markdown.

     - **Ejemplo para `contribution.md.json`:**
       - `contribution.md.json.res.json` (Respuesta JSON temporal)
       - `contribution.md.json.prompt.md` (Prompt y Respuesta en Markdown)

4. **Utiliza el contenido generado:**
   - Abre el archivo `<prompt_file>.prompt.md` (en nuestro ejemplo, `contribution.md.json.prompt.md`).
   - Revisa el contenido generado. Puedes copiar y pegar el contenido de la respuesta Markdown en el archivo de documentación final (`contribution.md` en nuestro ejemplo).
   - **Edita y refina:** La respuesta generada por la IA es un punto de partida. Es posible que necesites editar y refinar el contenido para que se ajuste perfectamente a las necesidades específicas de tu proyecto y para asegurar la precisión y coherencia.

## Estructura de Archivos

```
.
├── .env                      # Archivo para variables de entorno (GEMINI_API_KEY)
├── run.sh                    # Script para ejecutar la llamada a la API de Google AI Studio
├── contribution.md.json      # (Ejemplo) Archivo de prompt JSON para generar contribution.md
└── ...                     # Otros archivos de prompt JSON para diferentes documentos
```

**Archivos Generados (Ejemplos):**

```
.
├── .env
├── run.sh
├── contribution.md.json
├── contribution.md.json.res.json   # Respuesta temporal en JSON
└── contribution.md.json.prompt.md  # Prompt y Respuesta en Markdown
```

## Recomendaciones

- **Prompts Claros y Específicos:** Cuanto más claro y específico sea tu prompt en el archivo JSON, mejor será la calidad de los archivos generados. Considera ajustar los parámetros en `generationConfig`, `model` y `systemInstruction` para controlar mejor el estilo, la creatividad y el modelo utilizado para la respuesta.
- **Iteración:** Utiliza esta herramienta de forma iterativa. Genera un borrador inicial con un prompt, revisa la respuesta, y luego refina el prompt o utiliza los flags como `--pull` si necesitas mejorar o ajustar el contenido generado.
- **Revisión Humana:** La IA es una herramienta poderosa, pero siempre es importante revisar y editar los archivos generados por humanos para asegurar la precisión, coherencia y el tono adecuado para tu proyecto.
- **Convención de Nombres:** Sigue la convención de nombres recomendada para los archivos de prompt (`<nombre_archivo_markdown>.md.json`) para mantener una organización clara y facilitar la identificación de los prompts correspondientes a cada documento.

## Consideraciones Adicionales

- **Archivo Temporal `.res.json`:** El archivo `<prompt_file>.res.json` es un archivo temporal creado para propósitos de depuración o si deseas inspeccionar la respuesta JSON directamente. **Este archivo es temporal y está destinado a ser eliminado después de ser utilizado. Además, la carpeta incluye un archivo `.gitignore` que está configurado para ignorar automáticamente todos los archivos `*.res.json`, evitando que estos archivos temporales se incluyan accidentalmente en el control de versiones. El flag `--clean` permite eliminar estos archivos temporalmente de forma explicita.**
- **Seguridad de la API Key:** Asegúrate de que tu archivo `.env` esté incluido en `.gitignore` o mecanismos similares para evitar que tu clave de API se exponga en repositorios públicos.

Este documento debería proporcionarte la información necesaria para empezar a generar documentos de proyecto utilizando Google AI Studio y el script `run.sh`. Si tienes alguna pregunta o necesitas ayuda adicional, no dudes en consultar con el equipo del proyecto.
