# Backend del Buscador de Libros Bestsellers

Este proyecto es el backend para un sistema de búsqueda de libros bestsellers, diseñado para trabajar en conjunto con un frontend desarrollado en Next.js 14. Utiliza NestJS para el servidor y SQLite como sistema de base de datos, con Prisma como ORM.

## Tecnologías Utilizadas

- **NestJS:** para la creación del servidor y manejo de rutas API.
- **SQLite:** como sistema de gestión de base de datos.
- **Prisma:** ORM para el manejo eficiente de la base de datos.

## Configuración e Instalación

### Requisitos Previos

- Node.js
- npm

### Pasos para la Instalación

1. **Clonar el Repositorio:**

```bash
git clone <URL_DEL_REPOSITORIO_BACKEND>
cd <DIRECTORIO_DEL_BACKEND>
```

2. **Instalar Dependencias:**

```bash
npm install
```

3. **Configurar la Base de Datos:**

Primero, asegúrate de que el archivo `.env` esté configurado con las credenciales correctas de la base de datos. Luego, ejecuta las migraciones de Prisma:

```bash
npx prisma migrate dev
```

### Ejecución

Para iniciar el servidor, ejecuta:

```bash
npm run start
```

El servidor estará corriendo por defecto en `http://localhost:3001`.

## API Endpoints

Descripción de los principales endpoints disponibles:

- **/books/search:** Endpoint para buscar libros por diversos criterios (título, autor, etc.).
- **/books/:id:** Obtener detalles de un libro específico por su ID.

Eventualmente se documentaran todos los endpoints disponibles y sus respectivos métodos HTTP, parámetros y formatos de respuesta esperados.
