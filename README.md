# Buscador de Libros Bestsellers

Este proyecto consiste en un buscador indexado de libros bestsellers, basado en el dataset de Kaggle ["Best Selling Books"](https://www.kaggle.com/datasets/drahulsingh/best-selling-books). El sistema permite realizar búsquedas y visualizar los resultados de una manera amigable y eficiente.

## Tecnologías Utilizadas

- **Frontend:** Next.js 14
- **Backend:** NestJS
- **Base de Datos:** SQLite
- **ORM:** Prisma

## Características

- **Búsqueda Indexada:** Permite a los usuarios buscar libros por título, autor, y otras categorías relevantes.
- **Interfaz Amigable:** Utilizando Next.js 14 para una experiencia de usuario fluida y responsiva.
- **API Robusta:** Backend desarrollado con NestJS para manejar las consultas de búsqueda y la comunicación con la base de datos.
- **Gestión de Datos Eficiente:** Uso de SQLite y Prisma ORM para una gestión óptima de la base de datos.

## Configuración del Proyecto

### Requisitos Previos

Asegúrate de tener instalado Node.js y npm en tu sistema para poder ejecutar el proyecto. También necesitarás acceso a una terminal para correr los comandos.

### Instalación

1. **Clonar el Repositorio:**

```bash
git clone <URL_DEL_REPOSITORIO>
cd <NOMBRE_DEL_REPOSITORIO>
```

2. **Instalar Dependencias:**

- Para el backend:

```bash
cd backend
npm install
```

- Para el frontend:

```bash
cd frontend
npm install
```

### Configuración de la Base de Datos

Antes de iniciar el servidor, asegúrate de configurar la base de datos SQLite y realizar las migraciones necesarias con Prisma:

```bash
npx prisma migrate dev
```

### Ejecutar el Proyecto

- **Iniciar el Backend:**

```bash
cd backend
npm run start
```

- **Iniciar el Frontend:**

```bash
cd frontend
npm run dev
```

El frontend estará disponible en [http://localhost:3000](http://localhost:3000) y el backend en [http://localhost:3001](http://localhost:3001) (o el puerto que hayas configurado).

## Uso

Una vez que el proyecto esté en marcha, podrás utilizar la interfaz de búsqueda para encontrar libros en la base de datos. Los resultados de la búsqueda mostrarán información relevante sobre los libros, como el título, autor y año de publicación.
