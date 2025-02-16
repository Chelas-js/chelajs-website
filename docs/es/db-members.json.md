## Formato JSON para la Lista de Miembros

Este texto describe el formato JSON utilizado para representar una lista de miembros. El JSON contiene un array de objetos, donde cada objeto representa la información de un miembro individual.

### Estructura del Documento

El documento JSON raíz es un objeto con una única clave: `members`. El valor de esta clave es un array de objetos, donde cada objeto representa un miembro.

```json
{
  "members": [
    {
      // ... Información del miembro 1
    },
    {
      // ... Información del miembro 2
    }
    // ... más miembros
  ]
}
```

### Definición del Objeto "member"

Cada objeto dentro del array `members` tiene la siguiente estructura y campos:

- **`email` (string, **requerido**):** La dirección de correo electrónico del miembro. Debe ser una dirección de correo electrónico válida.

- **`name` (string, **requerido**):** El nombre completo del miembro.

- **`social_media` (objeto, opcional):** Un objeto que contiene enlaces a las redes sociales del miembro. Si el miembro no tiene perfiles de redes sociales para compartir, este objeto puede omitirse o estar vacío. Dentro de este objeto se pueden definir las siguientes redes sociales (y potencialmente otras en el futuro):

  - **`linkedin` (string, opcional):** La URL del perfil de LinkedIn del miembro. Debe ser una URL válida a un perfil de LinkedIn.

- **`photo` (string, opcional):** La URL de la foto de perfil del miembro. Debe ser una URL válida que apunte a una imagen. Si el miembro no tiene foto de perfil, este campo puede omitirse.

### Ejemplos

**Ejemplo con todos los campos poblados:**

```json
{
  "members": [
    {
      "email": "usuario1@ejemplo.com",
      "name": "Usuario Uno",
      "social_media": {
        "linkedin": "https://www.linkedin.com/in/usuario1"
      },
      "photo": "https://www.ejemplo.com/usuario1.jpg"
    }
  ]
}
```

**Ejemplo con campos opcionales omitidos:**

```json
{
  "members": [
    {
      "email": "usuario3@ejemplo.com",
      "name": "Usuario Tres",
      "social_media": {
        "linkedin": "https://www.linkedin.com/in/usuario3"
      }
    }
  ]
}
```

**Ejemplo con múltiples miembros:**

```json
{
  "members": [
    {
      "email": "usuario1@ejemplo.com",
      "name": "Usuario Uno",
      "social_media": {
        "linkedin": "https://www.linkedin.com/in/usuario1"
      },
      "photo": "https://www.ejemplo.com/usuario1.jpg"
    },
    {
      "email": "usuario2@ejemplo.com",
      "name": "Usuario Dos",
      "social_media": {
        "linkedin": "https://www.linkedin.com/in/usuario2"
      },
      "photo": "https://www.ejemplo.com/usuario2.jpg"
    },
    {
      "email": "usuario3@ejemplo.com",
      "name": "Usuario Tres",
      "social_media": {
        "linkedin": "https://www.linkedin.com/in/usuario3"
      }
    }
  ]
}
```

### Notas Adicionales

- Este formato JSON está diseñado para ser flexible y permitir la inclusión de información adicional de los miembros en el futuro, posiblemente añadiendo más campos dentro del objeto `member` o dentro del objeto `social_media`.
- Al procesar este JSON, se debe tener en cuenta que los campos `social_media` y `photo` son opcionales y pueden no estar presentes para todos los miembros. Se recomienda manejar estos casos de forma adecuada en la aplicación que consuma este JSON.
