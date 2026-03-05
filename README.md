# Enlace - Web Design

**Nombre de la Empresa:** Enlace - Web Design

## Descripción

Plantilla de sitio web desarrollada con Astro, pensada para mostrar servicios, portafolio y contacto de estudios o agencias de diseño web.

## Tecnologías usadas

- Astro
- TypeScript
- HTML & CSS
- Bun (runtime y gestor de paquetes)

## Estructura del proyecto (resumen)

- `src/pages` : Páginas del sitio (p. ej. `index.astro`).
- `src/components` : Componentes reutilizables y secciones (Hero, Navbar, Footer, etc.).
- `src/layouts` : Layouts principales del sitio.
- `src/styles` : Estilos globales.
- `public/images` : Imágenes públicas y recursos estáticos.

## Comandos rápidos (Bun)

1. Instalar dependencias:

   bun install

2. Ejecutar en modo desarrollo:

   bun run dev

3. Construir para producción:

   bun run build

4. Previsualizar la build:

   bun run preview

Nota: Estos comandos asumen que `package.json` contiene los scripts `dev`, `build` y `preview` (p. ej. `astro dev`, `astro build`, `astro preview`).

## Proceso de Build para publicar

- 1. Instala dependencias con `bun install`.
- 2. Ejecuta la build con `bun run build`. Astro genera la salida estática por defecto en la carpeta `dist`.
- 3. Verifica localmente con `bun run preview`.
- 4. Publica el contenido de `dist` en el hosting elegido (Netlify, GitHub Pages, etc.).

Despliegue (opciones)

- GitHub Pages (recomendado mediante Actions): usar un workflow CI que construya con Bun y publique el contenido de `dist` usando las Actions oficiales (`actions/upload-pages-artifact` + `actions/deploy-pages`).
- Netlify: en el panel de Netlify configura el comando de build `bun run build` y la carpeta a publicar `dist`. Alternativamente usar un GitHub Action que, tras la build, ejecute `netlify deploy --dir=dist --prod` (requiere los secrets `NETLIFY_AUTH_TOKEN` y `NETLIFY_SITE_ID`).

## GitHub Actions (ejemplo incluido)

Se incluye un workflow de ejemplo en `.github/workflows/deploy.yml` que:

- instala Bun
- ejecuta `bun install` y `bun run build`
- despliega automáticamente a GitHub Pages
- si detecta los secrets `NETLIFY_AUTH_TOKEN` y `NETLIFY_SITE_ID`, también despliega a Netlify

## Buenas prácticas y recomendaciones

- Mantener los componentes pequeños y reutilizables.
- Optimizar imágenes en `public/images` para producción (comprimir, webp, reproporciones).
- Probar la build localmente con `bun run preview` antes de desplegar.
- Añadir un `.gitignore` y no commitear el contenido de `dist` si usas GitHub Pages con Actions (el workflow gestiona la publicación).

## Créditos

Hecho por Enlace - Web Design

## Contacto

Si necesitas ajustes, nuevas secciones o asistencia con el despliegue, contáctanos.
