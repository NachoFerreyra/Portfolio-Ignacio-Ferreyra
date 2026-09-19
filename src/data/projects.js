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
    media: [
      "/esteticacgweb/ecgweb1.png",
      "/esteticacgweb/ecgweb2.png",
      "/esteticacgweb/ecgweb3.png",
      "/esteticacgweb/ecgweb4.png",
      "/esteticacgweb/ecgweb5.png",
      "/esteticacgweb/ecgweb6.png",
      "/esteticacgweb/ecgweb8.png",
    ],
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
    media: [
      "/esteticacgadmin/ecgadmin1.png",
      "/esteticacgadmin/ecgadmin2.png",
      "/esteticacgadmin/ecgadmin3.png",
      "/esteticacgadmin/ecgadmin4.png",
      "/esteticacgadmin/ecgadmin5.png",
      "/esteticacgadmin/ecgadmin6.png",
    ],
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
    media: [
      "/mys/mys1.png",
      "/mys/mys2.png",
      "/mys/mys3.png",
      "/mys/mys4.png",
      "/mys/mys5.png",
      "/mys/mys6.png",
      "/mys/mys7.png",
      "/mys/mys8.png",
      "/mys/mys9.png",
    ],
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
    "ms-bienes-raices": {
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
    "ms-bienes-raices": {
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
