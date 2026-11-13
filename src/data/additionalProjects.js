// Verified against local READMEs and manifests. No deployment or production claims.
const additionalProjects = [
  {
    id: "amarilis-cerezo", category: "web",
    stack: ["React 19", "Vite", "Supabase", "SCSS Modules", "React PDF", "WebP"],
    media: [], links: {},
    es: {
      name: "Amarilis Cerezo", type: "Catálogo comercial y administración",
      summary: "Plataforma para productos artesanales de madera: catálogo con variantes, consultas por WhatsApp y herramientas para administrar productos, imágenes y precios.",
      highlights: ["Catálogo conectado a Supabase con categorías, variantes y medidas.", "Administración protegida y gestión masiva de precios con vista previa e historial.", "Validación, orientación y compresión de imágenes a WebP antes de almacenarlas.", "Selección de productos y generación de catálogo PDF A4 con carga diferida."],
    },
    en: {
      name: "Amarilis Cerezo", type: "Commercial catalog and administration",
      summary: "A platform for handcrafted wooden products: a catalog with variants, WhatsApp inquiries and tools for managing products, images and prices.",
      highlights: ["Supabase-powered catalog with categories, variants and dimensions.", "Protected administration and bulk price changes with previews and history.", "Image validation, orientation and WebP compression before storage.", "Product selection and lazy-loaded A4 PDF catalog generation."],
    },
  },
  {
    id: "music-desk", category: "product",
    stack: ["React 19", "Express 5", "Node.js", "yt-dlp", "FFmpeg", "ZIP"],
    media: [], links: {},
    es: {
      name: "Music Desk", type: "Herramienta web local · audio",
      summary: "Aplicación de escritorio vía navegador para organizar tareas de audio, buscar coincidencias y gestionar conversiones y descargas MP3 o ZIP. Se ejecuta localmente.",
      highlights: ["Interfaz React conectada a una API Express en localhost.", "Cola de trabajos y búsqueda de coincidencias de audio.", "Integración con yt-dlp y FFmpeg para procesar audio.", "Pruebas de servidor con Node Test Runner."],
    },
    en: {
      name: "Music Desk", type: "Local web tool · audio",
      summary: "A browser-based local application for organizing audio jobs, searching for matches and managing MP3 or ZIP conversions and downloads. Runs locally.",
      highlights: ["React interface connected to a localhost Express API.", "Job queue and audio match search.", "Audio processing through yt-dlp and FFmpeg.", "Server tests using Node Test Runner."],
    },
  },

];

export const getAdditionalProjects = (language) => additionalProjects.map(({ es, en, ...project }) => ({ ...project, ...(language === "es" ? es : en) }));
