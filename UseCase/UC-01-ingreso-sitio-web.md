# UC-01: Ingreso al sitio web

## Interlocutores

- Usuario

## Actores

- Visitante del sitio

## Procedimiento

1. El usuario realiza una solicitud **GET** a la ruta raíz (`/`).
2. El servidor responde con el documento HTML de la página inicial.
3. El navegador interpreta el HTML y muestra los elementos de la interfaz.

## Flujo

- En el `header` se muestra el nombre del sitio como encabezado principal.
- Se renderiza un elemento `nav` con el menú de navegación inicial.
- Debajo del menú se presenta una leyenda que describe la comunidad.
- Al final de la página se visualiza el `footer` con los enlaces externos.

## Contexto

- **Cuándo:** Al entrar a la página inicial del dominio.
- **Dónde:** Navegador web, ruta `/`.
- **Por qué:** Brindar al usuario una vista general del sitio y acceso a la navegación.

## Historia

```gherkin
Feature: Ingreso al sitio web
  Scenario: Visitante ve la página principal
    Given el visitante no ha iniciado sesión
    When realiza un GET a "/"
    Then se renderiza el header con el nombre del sitio
    And el menú de navegación principal está visible
    And se muestra la leyenda descriptiva de la comunidad
    And se presenta el footer con los enlaces externos
```
