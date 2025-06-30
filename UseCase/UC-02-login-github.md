# UC-02: Login con GitHub

## Interlocutores

- Usuario

## Actores

- Visitante no autenticado

## Procedimiento

1. En la página principal el usuario localiza el enlace "Login" dentro del `nav`.
2. El usuario selecciona dicho enlace, que apunta a la ruta `/login`.
3. El navegador solicita la página de autenticación y la muestra en pantalla.
4. En esa página aparece un único botón para autenticarse mediante GitHub.

## Flujo

- El menú de navegación superior expone una opción de "Login" o "Iniciar sesión".
- Al activarla el sistema redirecciona a la ruta `/login`.
- En la página de autenticación se muestra exclusivamente el botón de inicio de sesión con GitHub.

## Contexto

- **Cuándo:** Cuando el usuario desea autenticarse.
- **Dónde:** Desde la página principal hacia la página `/login`.
- **Por qué:** Permitir el acceso a funcionalidades que requieran identificación.

## Historia

```gherkin
Feature: Autenticación vía GitHub
  Scenario: Visitante inicia sesión desde la página principal
    Given el visitante no ha iniciado sesión y navega a "/"
    When selecciona el enlace "Login"
    Then el sistema navega a "/login"
    And la página muestra un único botón para autenticarse con GitHub
```
