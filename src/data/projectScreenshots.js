// Captured on 2026-11-13. Captions distinguish public UI, demo data and local documentation.
const stamp = '2026-11-13';
const shot = (directory, name, es, en, width = 1440, height = 1000) => ({
  src: `/${directory}/${name}-${stamp}.png`, width, height,
  alt: { es, en }, caption: { es, en },
});

const screenshots = {
  'estetica-web': [
    shot('esteticacgweb', 'home', 'Inicio del sitio público de Estética CG.', 'Estética CG public website home page.'),
    shot('esteticacgweb', 'services', 'Secciones de servicios del sitio público.', 'Service sections on the public website.'),
  ],
  'estetica-admin': [
    shot('esteticacgadmin', 'catalog-demo', 'Catálogo del Admin en escritorio. Datos de demostración.', 'Admin catalog on desktop. Demonstration data.'),
    shot('esteticacgadmin', 'catalog-demo-mobile', 'Catálogo del Admin en móvil. Datos de demostración.', 'Admin catalog on mobile. Demonstration data.', 390, 844),
  ],
  taskdesk: [
    shot('taskdesk', 'kanban-demo', 'Tablero Kanban con los datos de ejemplo del proyecto.', 'Kanban board using the project seed data.'),
    shot('taskdesk', 'analytics-demo', 'Analítica del proyecto con datos de demostración.', 'Project analytics with demonstration data.'),
    shot('taskdesk', 'backlog-demo', 'Backlog con los datos de ejemplo del proyecto.', 'Backlog using the project seed data.'),
  ],
  'ms-bienes-raices': [
    shot('mys', 'home', 'Inicio de M&S con sus propiedades públicas.', 'M&S home page with its public property listings.'),
    shot('mys', 'catalog', 'Catálogo público de casas y filtros.', 'Public house catalog and filters.'),
  ],
  'nails-escenciagm': [
    shot('nails', 'gallery', 'Presentación y galería filtrada por Kapping gel.', 'Business card and gallery filtered by Kapping gel.'),
    shot('nails', 'home-mobile', 'Presentación y canales de contacto en móvil.', 'Business card and contact channels on mobile.', 390, 844),
    shot('nails', 'lightbox', 'Vista ampliada de un trabajo de la galería.', 'Expanded view of a gallery image.'),
  ],
  'amarilis-cerezo': [
    shot('amarilis', 'catalog', 'Catálogo público de Amarilis con categorías, productos y precios.', 'Amarilis public catalog with categories, products and prices.'),
    shot('amarilis', 'home', 'Inicio de Amarilis Cerezo.', 'Amarilis Cerezo home page.'),
    shot('amarilis', 'product', 'Ficha de producto con medidas, precio y consulta por WhatsApp.', 'Product detail with dimensions, price and WhatsApp inquiry.'),
  ],
  'music-desk': [
    shot('music-desk', 'home', 'Pantalla inicial de la aplicación local.', 'Local application home screen.'),
    shot('music-desk', 'selection-demo', 'Selección de pistas con datos de demostración. No se descargó audio.', 'Track selection with demonstration data. No audio was downloaded.', 1440, 1120),
  ],
  'tech-store-api': [
    shot('tech-store-api', 'swagger-local', 'Swagger generado desde el código local, sin conectar la base de datos.', 'Swagger generated from local source without connecting to the database.'),
  ],
};

export const getProjectScreenshots = (projectId, language = 'es') =>
  (screenshots[projectId] || []).map(({ alt, caption, ...image }) => ({
    ...image, alt: alt[language] || alt.es, caption: caption[language] || caption.es,
  }));
