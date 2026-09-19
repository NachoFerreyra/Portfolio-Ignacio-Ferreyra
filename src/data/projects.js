const projectAssets = [
  {
    id: "portfolio-ignacio",
    stack: [
      "React 19",
      "Vite",
      "React Router 7",
      "Sass Modules",
      "MUI",
      "Lucide React",
    ],
    media: [],
    links: {
      repo: "https://github.com/NachoFerreyra/Portfolio-Ignacio-Ferreyra",
    },
    architecture: {
      codeFiles: 31,
      scssFiles: 20,
      components: 16,
      pages: 7,
      group: 1,
    },
  },
  {
    id: "estetica-web",
    stack: [
      "React 18",
      "Vite",
      "React Router 7",
      "Redux Toolkit",
      "Sass Modules",
      "Framer Motion",
      "MUI",
      "React Hook Form",
      "Yup",
      "React Helmet Async",
      "DOMPurify",
      "Vite PWA",
      "Sonner",
      "Figma",
      "Cloudflare Wrangler",
    ],
    media: [],
    links: {
      live: "https://www.esteticacg.com/",
    },
    architecture: {
      codeFiles: 278,
      scssFiles: 133,
      components: 148,
      pages: 29,
      group: 3,
    },
  },
  {
    id: "estetica-admin",
    stack: [
      "React 18",
      "Vite",
      "React Router 7",
      "Redux Toolkit",
      "MUI + DataGrid",
      "Sass Modules",
      "React Hook Form",
      "React Big Calendar",
      "Recharts",
      "ExcelJS",
      "PapaParse",
      "Quill",
      "Axios",
      "Jest",
      "Cypress",
      "Cloudflare Wrangler",
    ],
    media: [],
    links: {},
    architecture: {
      codeFiles: 457,
      scssFiles: 214,
      components: 274,
      pages: 25,
      group: 3,
    },
  },
  {
    id: "tech-store-api",
    stack: [
      "NestJS 11",
      "TypeScript 5",
      "MongoDB Atlas",
      "Mongoose",
      "Passport + JWT",
      "bcrypt",
      "class-validator",
      "Swagger / OpenAPI",
    ],
    media: [],
    links: {
      repo: "https://github.com/NachoFerreyra/tech-store-api",
      live: "https://tech-store-api-hja3.onrender.com/api",
    },
    architecture: {
      codeFiles: 20,
      scssFiles: 0,
      components: 4,
      pages: 3,
      group: 1,
    },
  },
  {
    id: "taskdesk",
    stack: [
      "React 19",
      "Vite 6",
      "React Router 7",
      "SCSS Modules",
      "Node.js 24",
      "Express 4",
      "SQLite",
      "REST API",
    ],
    media: [],
    links: {},
    architecture: {
      codeFiles: 42,
      scssFiles: 26,
      components: 19,
      pages: 3,
      group: 1,
    },
  },
  {
    id: "nails-escenciagm",
    stack: [
      "React 19",
      "Vite 7",
      "React Router 7",
      "Sass Modules",
      "Google Maps",
      "WhatsApp Integration",
      "Responsive Design",
    ],
    media: [],
    links: {
      live: "https://nails-esenciagm.vercel.app/",
      repo: "https://github.com/NachoFerreyra/nails-esenciagm",
    },
    architecture: {
      codeFiles: 7,
      scssFiles: 11,
      components: 2,
      pages: 1,
      group: 1,
    },
  },
  {
    id: "ms-bienes-raices",
    stack: [
      "React 19",
      "Vite",
      "React Router 7",
      "Sass Modules",
      "rc-slider",
      "Supabase",
      "Supabase Auth",
      "Supabase Storage",
    ],
    media: [],
    links: {
      live: "https://www.mysnegocioseinversiones.com/",
    },
    architecture: {
      codeFiles: 36,
      scssFiles: 23,
      components: 18,
      pages: 7,
      group: 1,
    },
  },
];

const projectCopy = {
  en: {
    "portfolio-ignacio": {
      name: "Ignacio Ferreyra Portfolio",
      type: "Interactive personal portfolio",
      summary:
        "A Visual Studio Code-inspired portfolio that presents my professional profile, real-world projects, and technical stack through a navigable interface.",
      highlights: [
        "Editor-style interface with explorer, tabs, and a status bar.",
        "Architecture organized by routes and decoupled components per section.",
        "Dynamic content driven by data files for quick profile, skill, and project updates.",
        "Project cards with expandable details, metrics, links, and multimedia previews.",
        "Light/dark mode and a technical visual approach without sacrificing readability.",
      ],
    },
    "estetica-web": {
      media: [
        {
          src: "/esteticacgweb/home-2026.png",
          alt: "Estetica CG home page with the main treatment hero",
          caption: "Home page and primary treatment entry point.",
        },
        {
          src: "/esteticacgweb/services-2026.png",
          alt: "Estetica CG service-category selection page",
          caption: "Service catalog organized by treatment category.",
        },
        {
          src: "/esteticacgweb/facial-detail-2026.png",
          alt: "Estetica CG Facial Avanzado service detail page",
          caption: "Treatment detail with a direct booking call to action.",
        },
      ],
      name: "Estética CG — Website",
      type: "Commercial website and service experience",
      summary:
        "Three-person team project focused on digital presence, service catalog, SEO-focused pages, and a responsive experience for an aesthetics center.",
      highlights: [
        "Lazy-loaded routes for home, services, treatment details, hair removal, contact, FAQ, and legal pages.",
        "Route-level SEO with dedicated metadata, sitemap generation during build, and PWA support.",
        "Responsive interfaces built with SCSS Modules, MUI, Framer Motion, Swiper, and reusable components.",
        "Validated forms with React Hook Form and Yup, plus content sanitization with DOMPurify.",
        "Cloudflare Wrangler integration for checks and staging/production deployments.",
      ],
    },
    "estetica-admin": {
      name: "Estética CG — Admin",
      type: "Operational back-office platform",
      summary:
        "Administrative dashboard for appointments, clients, professionals, catalog, sales, promotions, reminders, and business settings.",
      highlights: [
        "Operational calendar with appointments, blocks, availability, history, and rescheduling.",
        "Catalog, hair removal services, coupons, and promotions managed through organized edit modals.",
        "Client and professional profiles with galleries, notes, bulk imports, and exports.",
        "Sales, orders, marketing, and reminders with advanced tables, filters, and bulk actions.",
        "Nested settings for the business, schedules, notifications, WhatsApp, email, integrations, and service areas.",
        "Test suite with Jest, Testing Library, Cypress, and Cloudflare deployment/check commands.",
      ],
    },
    "tech-store-api": {
      name: "Tech Store API",
      type: "NestJS REST API backend",
      summary:
        "RESTful API for a technology store built with NestJS 11, MongoDB Atlas, and JWT authentication. It features modular architecture, RBAC, DTO validation, and interactive Swagger documentation.",
      highlights: [
        "Modular NestJS architecture with independent Auth, Products, and Users modules.",
        "JWT authentication and role-based authorization (RBAC) through custom guards and decorators.",
        "Complete product CRUD with DTO validation, whitelisting, and HTTP error handling.",
        "Secure password hashing with bcrypt and password exclusion by default in Mongoose schemas.",
        "Interactive Swagger/OpenAPI documentation with authorization support for protected endpoints.",
        "Production deployment on Render using environment variables and MongoDB Atlas.",
      ],
    },
    taskdesk: {
      media: [
        {
          src: "/taskdesk/kanban-2026.png",
          alt: "TaskDesk Kanban board with task filters and workflow columns",
          caption: "Kanban workflow with status columns and quick filters.",
        },
        {
          src: "/taskdesk/analytics-2026.png",
          alt: "TaskDesk analytics dashboard with project progress and workload",
          caption: "Project KPIs, status distribution, priorities, and workload.",
        },
        {
          src: "/taskdesk/create-task-2026.png",
          alt: "TaskDesk create issue modal over the Kanban board",
          caption: "Issue creation with type, priority, story points, assignee, and due date.",
        },
        {
          src: "/taskdesk/backlog-2026.png",
          alt: "TaskDesk backlog table with task state and priority",
          caption: "Searchable backlog with task state, priority, points, and owner.",
        },
      ],
      name: "TaskDesk",
      type: "Full-stack agile task management platform",
      summary:
        "A full-stack application for organizing agile work through a Kanban board, backlog, issue details, analytics, and a REST API backed by SQLite.",
      highlights: [
        "Kanban board with optimistic task status updates and filters by assignee, type, and priority.",
        "Issue creation and detail flows with descriptions, comments, points, ownership, and due dates.",
        "Dedicated backlog for searching and reviewing task status, priority, points, and assignees.",
        "Analytics dashboard for project progress, workload distribution, priorities, and active work.",
        "React client and Express REST API organized with reusable components, services, hooks, and SQLite persistence.",
      ],
    },
    "nails-escenciagm": {
      media: [
        {
          src: "/nails/experience-2026.png",
          alt: "Nails EsenciaGM digital card with booking actions, map, and filtered gallery",
          caption: "Digital business card, booking channels, map, and service gallery.",
        },
        {
          src: "/nails/gallery-2026.png",
          alt: "Nails EsenciaGM Kapping gel gallery filter with nail design grid",
          caption: "Service gallery filtered to Kapping gel designs.",
        },
        {
          src: "/nails/lightbox-2026.png",
          alt: "Nails EsenciaGM fullscreen image lightbox",
          caption: "Accessible full-screen preview for gallery images.",
        },
      ],
      name: "Nails EsenciaGM",
      type: "Digital business card and service gallery",
      summary:
        "A responsive digital card for a nail studio that brings booking, location, social channels, and a filterable portfolio of services into one focused experience.",
      highlights: [
        "Single-screen responsive composition with business identity, opening hours, contact actions, and location.",
        "Direct WhatsApp booking, Google Maps, and Instagram integration.",
        "Service gallery with category filters for Kapping gel, Soft gel, and Semipermanent designs.",
        "Lazy-loaded images and a keyboard-dismissible full-screen lightbox.",
        "Asset discovery through Vite glob imports, keeping the gallery easy to update as new work is added.",
      ],
    },
    "ms-bienes-raices": {
      media: [
        {
          src: "/mys/home-2026.png",
          alt: "M&S Negocios e Inversiones home page with featured properties",
          caption: "Home hero with commercial calls to action and featured properties.",
        },
        {
          src: "/mys/catalog-casas-2026.png",
          alt: "M&S Casas property catalog with filter control and property cards",
          caption: "Category catalog with property cards and commercial filters.",
        },
        {
          src: "/mys/property-detail-2026.png",
          alt: "M&S property detail with gallery, key facts, price, and contact action",
          caption: "Property gallery, key facts, price, and direct contact action.",
        },
      ],
      name: "M&S Negocios e Inversiones",
      type: "Real estate platform",
      summary:
        "Real estate platform with property catalog, commercial filters, a protected admin dashboard, and data management through Supabase.",
      highlights: [
        "Property catalog organized by houses, apartments, warehouses, and country estates.",
        "Combined filters with sliders and sorting by price and area.",
        "Property modal with gallery, key details, and commercial call to action.",
        "Protected admin dashboard with authentication and private routes.",
        "Category and property CRUD connected to Supabase.",
        "Image upload and management through Supabase Storage.",
      ],
    },
  },
  es: {
    "portfolio-ignacio": {
      name: "Portfolio Ignacio Ferreyra",
      type: "Portfolio personal interactivo",
      summary:
        "Portfolio inspirado en Visual Studio Code para presentar perfil profesional, proyectos reales y stack técnico desde una interfaz navegable.",
      highlights: [
        "Interfaz tipo editor con explorador, pestañas y barra de estado.",
        "Arquitectura por rutas y componentes desacoplados por sección.",
        "Contenido dinámico desde archivos de datos para editar perfil, habilidades y proyectos rápidamente.",
        "Tarjetas de proyecto con detalle desplegable, métricas, enlaces y vista previa multimedia.",
        "Modo claro/oscuro y enfoque visual técnico sin perder legibilidad.",
      ],
    },
    "estetica-web": {
      media: [
        {
          src: "/esteticacgweb/home-2026.png",
          alt: "Inicio de Est\u00e9tica CG con hero principal de tratamientos",
          caption: "Inicio y acceso principal a tratamientos.",
        },
        {
          src: "/esteticacgweb/services-2026.png",
          alt: "Selecci\u00f3n de categor\u00edas de servicios de Est\u00e9tica CG",
          caption: "Cat\u00e1logo de servicios organizado por categor\u00eda.",
        },
        {
          src: "/esteticacgweb/facial-detail-2026.png",
          alt: "Detalle del servicio Facial Avanzado de Est\u00e9tica CG",
          caption: "Detalle de tratamiento con llamada directa a reservar.",
        },
      ],
      name: "Estética CG — Web",
      type: "Sitio comercial y experiencia de servicios",
      summary:
        "Proyecto en equipo de tres personas enfocado en presencia digital, catálogo de servicios, páginas SEO y experiencia responsive para una estética.",
      highlights: [
        "Rutas lazy para inicio, servicios, detalle de tratamientos, depilación, contacto, FAQ y páginas legales.",
        "SEO por ruta con metadata dedicada, sitemap generado en build y soporte PWA.",
        "Interfaces responsive con SCSS Modules, MUI, Framer Motion, Swiper y componentes reutilizables.",
        "Formularios validados con React Hook Form/Yup y sanitización de contenido con DOMPurify.",
        "Integración con Cloudflare Wrangler para checks y despliegues en staging/producción.",
      ],
    },
    "estetica-admin": {
      name: "Estética CG — Admin",
      type: "Backoffice operativo",
      summary:
        "Panel administrativo para agenda, clientes, profesionales, catálogo, ventas, promociones, recordatorios y configuración integral.",
      highlights: [
        "Agenda operativa con turnos, bloqueos, disponibilidad, historial y reprogramación de jornadas.",
        "Gestión de catálogo, depilación, cupones y promociones con modales de edición y organización.",
        "Clientes y profesionales con perfiles, galerías, notas, importaciones masivas y exportaciones.",
        "Ventas, pedidos, marketing y recordatorios con tablas avanzadas, filtros y acciones masivas.",
        "Configuraciones anidadas para negocio, horarios, notificaciones, WhatsApp, emails, integraciones y zonas.",
        "Suite de pruebas con Jest, Testing Library, Cypress y comandos de deploy/check para Cloudflare.",
      ],
    },
    "tech-store-api": {
      name: "Tech Store API",
      type: "REST API backend con NestJS",
      summary:
        "API RESTful para una tienda de tecnología construida con NestJS 11, MongoDB Atlas y autenticación JWT. Implementa arquitectura modular, RBAC, validación de DTOs y documentación interactiva con Swagger.",
      highlights: [
        "Arquitectura modular NestJS con módulos independientes: Auth, Products y Users.",
        "Autenticación con JWT y autorización por roles (RBAC) mediante guards y decoradores personalizados.",
        "CRUD completo de productos con validación de DTOs, whitelist y manejo de errores HTTP.",
        "Hashing seguro de contraseñas con bcrypt y exclusión del campo password por defecto en esquemas Mongoose.",
        "Documentación interactiva Swagger/OpenAPI con soporte de autorización para endpoints protegidos.",
        "Deploy funcional en Render con variables de entorno y MongoDB Atlas.",
      ],
    },
    taskdesk: {
      media: [
        {
          src: "/taskdesk/kanban-2026.png",
          alt: "Tablero Kanban de TaskDesk con filtros y columnas de flujo de trabajo",
          caption: "Flujo Kanban con columnas de estado y filtros r\u00e1pidos.",
        },
        {
          src: "/taskdesk/analytics-2026.png",
          alt: "Panel de anal\u00edtica de TaskDesk con progreso y carga de trabajo",
          caption: "KPIs, distribuci\u00f3n por estado, prioridades y carga de trabajo.",
        },
        {
          src: "/taskdesk/create-task-2026.png",
          alt: "Modal para crear incidencia de TaskDesk sobre el tablero Kanban",
          caption: "Creaci\u00f3n de incidencias con tipo, prioridad, puntos, responsable y fecha.",
        },
        {
          src: "/taskdesk/backlog-2026.png",
          alt: "Tabla de backlog de TaskDesk con estado y prioridad de tareas",
          caption: "Backlog buscable con estado, prioridad, puntos y responsable.",
        },
      ],
      name: "TaskDesk",
      type: "Plataforma full-stack de gesti\u00f3n \u00e1gil de tareas",
      summary:
        "Aplicaci\u00f3n full-stack para organizar trabajo \u00e1gil mediante tablero Kanban, backlog, detalle de incidencias, anal\u00edtica y una API REST con SQLite.",
      highlights: [
        "Tablero Kanban con actualizaciones optimistas de estado y filtros por responsable, tipo y prioridad.",
        "Flujos de creaci\u00f3n y detalle de incidencias con descripci\u00f3n, comentarios, puntos, responsable y vencimiento.",
        "Backlog dedicado para buscar y revisar el estado, prioridad, puntos y responsables de cada tarea.",
        "Panel de anal\u00edtica para progreso, distribuci\u00f3n de carga, prioridades y trabajo activo.",
        "Cliente React y API REST con Express organizados en componentes, servicios, hooks y persistencia SQLite.",
      ],
    },
    "nails-escenciagm": {
      media: [
        {
          src: "/nails/experience-2026.png",
          alt: "Tarjeta digital de Nails EsenciaGM con reservas, mapa y galer\u00eda filtrada",
          caption: "Tarjeta digital, canales de reserva, mapa y galer\u00eda de servicios.",
        },
        {
          src: "/nails/gallery-2026.png",
          alt: "Filtro Kapping gel de Nails EsenciaGM con grilla de dise\u00f1os",
          caption: "Galer\u00eda de servicios filtrada a dise\u00f1os Kapping gel.",
        },
        {
          src: "/nails/lightbox-2026.png",
          alt: "Vista ampliada a pantalla completa de Nails EsenciaGM",
          caption: "Vista ampliada a pantalla completa para las im\u00e1genes de la galer\u00eda.",
        },
      ],
      name: "Nails EsenciaGM",
      type: "Tarjeta digital y galer\u00eda de servicios",
      summary:
        "Tarjeta digital responsive para un estudio de u\u00f1as que concentra reserva, ubicaci\u00f3n, redes y un portfolio filtrable de servicios en una experiencia enfocada.",
      highlights: [
        "Composici\u00f3n responsive de una pantalla con identidad del negocio, horarios, acciones de contacto y ubicaci\u00f3n.",
        "Integraci\u00f3n directa con WhatsApp, Google Maps e Instagram.",
        "Galer\u00eda de servicios con filtros para dise\u00f1os Kapping gel, Soft gel y semipermanentes.",
        "Im\u00e1genes con carga diferida y vista ampliada a pantalla completa cerrable con teclado.",
        "Descubrimiento de assets mediante imports glob de Vite para actualizar la galer\u00eda al sumar trabajos.",
      ],
    },
    "ms-bienes-raices": {
      media: [
        {
          src: "/mys/home-2026.png",
          alt: "Inicio de M&S Negocios e Inversiones con propiedades destacadas",
          caption: "Hero comercial y propiedades destacadas.",
        },
        {
          src: "/mys/catalog-casas-2026.png",
          alt: "Cat\u00e1logo de casas de M&S con filtro y tarjetas de propiedades",
          caption: "Cat\u00e1logo por categor\u00eda con tarjetas y filtros comerciales.",
        },
        {
          src: "/mys/property-detail-2026.png",
          alt: "Detalle de propiedad de M&S con galer\u00eda, datos clave, precio y contacto",
          caption: "Galer\u00eda de propiedad, datos clave, precio y contacto directo.",
        },
      ],
      name: "M&S Negocios e Inversiones",
      type: "Sitio inmobiliario",
      summary:
        "Web inmobiliaria con catálogo de propiedades, filtros comerciales, panel admin protegido y gestión de datos en Supabase.",
      highlights: [
        "Catálogo por categorías: casas, departamentos, bodegas y fincas.",
        "Filtro compuesto con sliders y orden por precio y superficie.",
        "Modal de propiedad con galería, datos clave y CTA comercial.",
        "Panel admin protegido con autenticación y rutas privadas.",
        "CRUD de categorías y propiedades conectado a Supabase.",
        "Subida y gestión de imágenes en Supabase Storage.",
      ],
    },
  },
};

export const getProjects = (language = "en") =>
  projectAssets.map((project) => ({
    ...project,
    ...projectCopy[language][project.id],
  }));
