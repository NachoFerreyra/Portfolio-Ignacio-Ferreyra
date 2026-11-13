# Ignacio Ferreyra — Portfolio

Portfolio personal desarrollado con React y Vite. Reúne perfil, experiencia laboral, formación universitaria, idiomas, habilidades, proyectos y contacto en una sola página.

## Funcionalidades

- Español e inglés, con tema claro y oscuro.
- Diseño responsive y navegación por secciones.
- Lista de proyectos por tandas de cuatro, filtros y detalles desplegables.
- Galerías con miniaturas y visor de imágenes con zoom, desplazamiento y navegación por teclado.
- Descarga de CV en español o inglés.
- Movimiento reducido, controles de teclado y gestión del foco en el visor.

## Proyectos incluidos

Estética CG Web y Admin, TaskDesk, M&S Negocios e Inversiones, Nails EsenciaGM, Amarilis Cerezo, Music Desk y Tech Store API.

Las tecnologías y los servicios de esos proyectos se describen en sus fichas. El portfolio utiliza React 19, Vite, Sass Modules y Lucide React; no requiere backend ni variables de entorno.

## Desarrollo

```bash
npm ci
npm run dev
```

## Comandos

| Comando | Uso |
| --- | --- |
| `npm run dev` | Servidor de desarrollo |
| `npm run build` | Build de producción en `dist/` |
| `npm run preview` | Vista previa del build |
| `npm run check` | Build, pruebas de DOM y ESLint |
| `npm test` | Pruebas de DOM; requiere un build previo para comprobar CSS y bundle |
| `npm run lint` | ESLint |
| `npm run test:browser` | Pruebas con Playwright y Chrome instalado; requiere la app en `http://localhost:5173/` |

Las pruebas de navegador generan capturas y un reporte en `.audit-screenshots/`, carpeta ignorada por Git. `dist/` y `node_modules/` también están excluidos del repositorio.

## Contenido y estructura

- `src/App.jsx`: estructura de la SPA, filtros y paginación de proyectos.
- `src/components/`: tarjetas, detalles y visor de imágenes.
- `src/contexts/`: idioma y tema.
- `src/data/profile.js`: datos personales, experiencia y formación.
- `src/data/skills.js`: habilidades y tecnologías.
- `src/data/projects.js` y `additionalProjects.js`: fichas de proyectos.
- `src/data/projectScreenshots.js`: rutas, dimensiones y textos de las 18 capturas vigentes.
- `src/data/portfolioCopy.js` y `translations.js`: textos de interfaz y metadatos ES/EN.
- `src/styles/` y `src/App.module.scss`: estilos globales y de la página.
- `public/`: capturas vigentes, foto de perfil, CV e icono de la pestaña.
- `tests/` y `scripts/verify-portfolio-browser.mjs`: comprobaciones de DOM y navegador.

La procedencia de las imágenes y las condiciones de demostración se documentan en [docs/project-screenshots.md](docs/project-screenshots.md).

## Contacto

- [GitHub](https://github.com/NachoFerreyra)
- [LinkedIn](https://www.linkedin.com/in/ignacio-ferreyra1)
- Email: `ignaciooferreyraa@gmail.com`
