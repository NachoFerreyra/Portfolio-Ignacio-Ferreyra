# Capturas de proyectos

Las 18 imágenes vigentes fueron capturadas el 13 de noviembre de 2026. Sus rutas, dimensiones y descripciones en español e inglés están centralizadas en `src/data/projectScreenshots.js`.

| Proyecto | Capturas | Procedencia |
| --- | --- | --- |
| Estética CG Web | Inicio y servicios | Sitio público `https://www.esteticacg.com/` |
| Estética CG Admin | Catálogo en escritorio y móvil | Frontend local con autenticación y API simuladas |
| TaskDesk | Kanban, analítica y backlog | Frontend local con los datos de ejemplo de su proyecto |
| M&S | Inicio y catálogo de casas | Frontend local y catálogo público |
| Nails EsenciaGM | Galería filtrada, presentación móvil y vista ampliada | Frontend local con las imágenes del proyecto |
| Amarilis Cerezo | Catálogo, inicio y ficha de producto | Frontend local y catálogo público |
| Music Desk | Inicio y selección de pistas | Frontend local con pistas ficticias en la selección |
| Tech Store API | Swagger | OpenAPI generado desde los controladores locales y presentado con Swagger UI |

## Privacidad y alcance

- El Admin muestra únicamente un catálogo de demostración. La cuenta `demo@example.test`, los servicios y los precios son ficticios. No se consultaron ni capturaron datos reales de clientes, turnos, notas médicas, ventas o pagos.
- Las métricas y tareas de TaskDesk pertenecen a sus datos de ejemplo; no representan resultados comerciales reales.
- Music Desk usa una respuesta de demostración para mostrar la selección. La captura no requirió leer playlists reales, descargar audio ni ejecutar conversiones.
- La documentación de Tech Store API se generó desde su código sin conectar MongoDB ni ejecutar endpoints. Su URL pública no respondió durante la captura; la imagen no certifica su disponibilidad en producción.
- Los productos, propiedades y canales comerciales de las vistas públicas se muestran como estaban disponibles en sus catálogos.
- Las capturas son directas y no fueron reconstruidas ni retocadas con IA. Sus pies de imagen distinguen las vistas con datos de demostración.

## Actualización y verificación

Para cambiar una imagen, guardarla en la carpeta correspondiente de `public/` y actualizar su entrada en `src/data/projectScreenshots.js`, incluyendo las dimensiones reales. `npm run check` comprueba que todas las imágenes existan y que sus dimensiones coincidan con el registro.

Con el servidor de desarrollo en `http://localhost:5173/`, `npm run test:browser` comprueba el portfolio en 320, 390, 768 y 1440 px: lista compacta y expandida, carga de imágenes, detalles, estabilidad de la galería, visor con zoom, teclado, foco, cierre, contacto y ausencia de desbordamiento horizontal. Incluye comprobaciones de movimiento reducido y del tema claro en inglés.

El reporte y las capturas de validación se generan en `.audit-screenshots/`, fuera del contenido publicado e ignorados por Git. Estas comprobaciones cubren esos recorridos; no constituyen una auditoría exhaustiva de accesibilidad o rendimiento.
