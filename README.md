# Portfolio Ignacio Ferreyra

Portfolio interactivo inspirado en la interfaz de Visual Studio Code.

## Qué incluye

- UI estilo VS Code (top bar, activity bar, explorer, tabs y status bar).
- Navegación por secciones como si fueran archivos (`README.md`, `inicio.jsx`, `sobre-mi.jsx`, etc.).
- Presentación personal, experiencia, proyectos, habilidades y contacto.
- Data desacoplada para editar contenido sin tocar lógica de componentes.

## Proyectos destacados dentro del portfolio

- Estetica CG - Web
- Estetica CG - Admin
- MSBienesRaices

## Stack

- React
- Vite
- React Router
- SCSS + CSS Modules
- Lucide React

## Estructura

```bash
src/
  components/
    Layout/
    Inicio/
    SobreMi/
    Proyectos/
    Habilidades/
    Contacto/
    Readme/
  containers/pages/
  contexts/
  data/
  routes/
  styles/
  utils/
```

## Scripts

- `npm run dev` -> entorno de desarrollo
- `npm run build` -> build de producción
- `npm run preview` -> previsualización del build
- `npm run lint` -> validación con ESLint

## Cómo levantar el proyecto

```bash
npm install
npm run dev
```

## Personalización rápida

Si querés actualizar contenido, estos archivos son los más importantes:

- `src/data/profile.js` -> datos personales y contacto
- `src/data/projects.js` -> proyectos, stack, highlights y métricas
- `src/data/skills.js` -> grupos de habilidades

## Enfoque de arquitectura

- Separación clara entre `data`, `components`, `pages` y `styles`.
- Componentes por dominio para mantener escalabilidad.
- Estilos modulares (`module.scss`) para evitar conflictos.
- Layout reutilizable para mantener consistencia visual.

## Roadmap

- Animaciones más ricas por sección.
- Integración de formulario de contacto con backend.
- Mejoras de accesibilidad y SEO.

## Contacto

- Email: `ignacioferreyra.dev@gmail.com`
- LinkedIn: `https://www.linkedin.com/`
- GitHub: `https://github.com/`

## Licencia

Proyecto personal/profesional para presentación de portfolio.