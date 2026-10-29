# Lista de mejoras accionables

Derivada de [auditoria.md](auditoria.md). Cada ítem indica qué se hizo en la app Angular o qué falta.

## Hechas en esta fusión
1. **Un solo sitio**: premios + votación + posts + lore en una app Angular 22 con el estilo cómic de A.
2. **Sin scroll horizontal en móvil**: las inclinaciones de tarjetas solo se aplican desde 768 px y son fijas (no aleatorias).
3. **Contraste AA**: texto de burbujas en gris oscuro sobre blanco; variantes "tinta" de rosa (`#BE185D`) y azul (`#0369A1`) para texto.
4. **Gráficos accesibles**: componente `app-bar-chart` en HTML/CSS (lista `<ol>` con nombre y votos legibles por lector de pantalla). Se eliminaron Chart.js y chart.xkcd (≈250 KB menos).
5. **SEO y compartir en WhatsApp**: `meta description`, Open Graph, Twitter Card, `og-image.png` propia, favicon SVG, `theme-color`, título por ruta.
6. **Fuera Tailwind CDN y placeholders**: avatares de personajes con su inicial y color en CSS.
7. **Ganador destacado**: caja amarilla con sombra dura, etiqueta "Ganador indiscutible / Empate histórico".
8. **Navegación accesible**: menú con `aria-expanded`/`aria-controls`, `aria-current="page"`, enlace "Saltar al contenido", foco visible azul de 4 px, botones ≥44 px.
9. **Movimiento reducido**: `prefers-reduced-motion` desactiva animaciones, rebotes, smooth scroll e inclinaciones.
10. **Fuentes**: una sola petición (Bangers, Outfit, VT323) con `preconnect` y `display=swap`.
11. **Imagen caducable** de "Admin del Año" reemplazada por un patrón propio.
12. **Rutas lazy** con 404 temático ("te tragó la Grieta") y `404.html` para GitHub Pages.
13. **Votación y posts** detrás de una interfaz `Backend` (Firebase o modo demo con localStorage).
14. **Localismos**: "móvil" → "celular" en el lore.

## Pendientes (TODO)
- [ ] Crear el proyecto Firebase, pegar la config pública en `src/environments/environment.ts` y desplegar `firestore.rules` (ver [guia-arquitectura.md](guia-arquitectura.md)).
- [ ] Agregar los UID de los admins en la colección `admins` desde la consola.
- [ ] Crear las categorías reales de la votación 2026 desde `/admin` (las del modo demo son de ejemplo).
- [ ] Subir arte propio a `public/img/` y reemplazar las imágenes *hotlinkeadas* de cabeceras de categorías.
- [ ] Ilustraciones reales de personajes (hoy son iniciales en círculos de color).
- [ ] Prerender/SSG de páginas estáticas para SEO sin JavaScript.
- [ ] Lighthouse + axe en CI.
- [ ] Revisar con el grupo los textos de lore para pasar el resto de expresiones de España a español latino.
- [ ] Activar GitHub Pages con "Source: GitHub Actions" en la configuración del repo.
