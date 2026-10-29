# Auditoría de los sitios originales

Fecha: 28 de octubre de 2026 · Herramientas: Playwright 1.64 + Chromium headless, revisión manual del código fuente.
Viewports probados: 360×800 (móvil), 768×1024 (tablet), 1366×768 (laptop), 1920×1080 (escritorio).
Capturas: `docs/screenshots/a-awards-*.png` y `docs/screenshots/b-lore-*.png` (las de `mobile` y `desktop` son de página completa; `*-viewport.png` muestra solo la primera pantalla).

Escala de severidad: **Crítica** (rompe la experiencia o es un riesgo), **Alta** (afecta a muchas personas o a la identidad), **Media** (molestia clara), **Baja** (detalle/pulido).

| Sitio | URL | Repo | Código |
|---|---|---|---|
| A — Premios (estilo a conservar) | https://feithnoir.github.io/VengaJustiLolisAlvZAwards/ | FeithNoir/VengaJustiLolisAlvZAwards | `index.html` + `main.js` (13 KB) + `styles.css` (11 KB) |
| B — Lore (contenido a conservar) | https://feithnoir.github.io/vengajustilolisalvz/ | FeithNoir/vengajustilolisalvz | `index.html` (14 KB) con Tailwind por CDN |

Medición rápida (Playwright, red del servidor de pruebas): A carga en ~0,9–1,7 s, B en ~0,8–1,1 s. Ninguno tiene meta description, etiquetas Open Graph ni favicon.

---

## A — VengaJustiLolis Alv Z Awards

### Como usuario normal
- Me encanta la primera impresión: amarillo intenso, letras tipo cómic, sombras duras. Se siente "del grupo", con personalidad.
- En el celular el contenido se ve cortado a la derecha y la página se mueve de lado (scroll horizontal).
- Las tarjetas están chuecas (inclinadas) y cada vez que recargo cambian de ángulo; es divertido, pero en celular parece un error.
- No hay manera de votar: solo veo resultados del 2025. Tampoco hay nada sobre el lore más allá de un párrafo.
- Las burbujas de "La voz del pueblo" a veces salen en amarillo sobre blanco y casi no se leen.
- Los gráficos se ven bien, pero en el celular los nombres largos se amontonan.

### Como QA experto

| # | Hallazgo | Severidad | Evidencia |
|---|---|---|---|
| A1 | **Desbordamiento horizontal en móvil y tablet** (40 px a 360 y 768 px): `.intro-card`, `.category-section` y `.opinions-grid` usan `max-width: 80–90%` + rotaciones, y el `main` tiene `gap` sin control de ancho. | Alta | `a-awards-mobile.png`, reporte Playwright `overflowX: 40` |
| A2 | **Imagen del ganador "Admin del Año" con token firmado de DeviantArt (wixmp)** que caduca; todas las imágenes de cabecera están *hotlinkeadas* a sitios de terceros (Twitter, TheGamer, Wallpapercave, Alphacoders, GameRant). Riesgo de imágenes rotas y de derechos. | Alta | `main.js` → `winnerImageMap` |
| A3 | **Contraste insuficiente en burbujas**: el texto de cada comentario toma un color aleatorio de la paleta (`style="color: ${color}"`), p. ej. `#FFCC00` sobre blanco = 1,6:1 (WCAG pide 4,5:1). También el subtítulo rosa `#EC4899` sobre blanco = 3,5:1. | Alta | `renderOpinionsSection()` |
| A4 | **Bloque de ganador sin estilos**: `.winner-info`, `.winner-label` y `.winner-name` no existen en el CSS (solo hay un ajuste de tamaño en móvil), así que el dato más importante de cada categoría se ve como texto plano. | Media | `styles.css` |
| A5 | **Gráficos inaccesibles**: los `<canvas>` de Chart.js no tienen texto alternativo ni tabla equivalente; un lector de pantalla no puede saber los resultados. | Alta | `renderChart()` |
| A6 | **Scripts de terceros sin versión fija y uno sin usar**: `chart.js` desde jsDelivr sin versión (puede romperse con un major nuevo) y `chart.xkcd` cargado pero nunca usado (~70 KB de más). Ambos bloquean en `<head>` (aunque `main.js` usa `defer`). | Media | `index.html` |
| A7 | **Fuentes duplicadas / inconsistentes**: el HTML carga Bangers + Roboto + VT323 y el CSS hace `@import` de Bangers + Outfit + VT323 (petición en cascada que bloquea el render). Roboto nunca se usa. | Media | `index.html`, `styles.css` l.5 |
| A8 | Variable CSS inexistente `--shadow-comic-sm` en `.btn` → los botones del menú no tienen la sombra prevista. | Baja | `styles.css` l.160 |
| A9 | **Menú móvil**: el botón no expone `aria-expanded` ni `aria-controls`; su etiqueta está en inglés ("Toggle navigation"). No hay enlace "saltar al contenido" ni estilos de `:focus-visible`. | Media | `index.html` |
| A10 | Todo el contenido se inyecta con `innerHTML` desde JS: sin JS no hay nada (SEO pobre, sin `<noscript>`), y es un patrón propenso a XSS si algún día los datos vienen de usuarios. | Media | `main.js` |
| A11 | **SEO/OG**: título genérico, sin `meta description`, sin `og:*`/Twitter Card, sin favicon → al compartir el link en WhatsApp sale sin imagen ni descripción (y el grupo vive en WhatsApp). | Alta | reporte Playwright `og: 0`, `favicon: false` |
| A12 | Placeholder de `via.placeholder.com` como fallback de imagen (servicio poco fiable). | Baja | `createCategorySection()` |
| A13 | Rotación aleatoria con `Math.random()` en cada carga + `scroll-behavior: smooth` y animación del corazón sin respetar `prefers-reduced-motion`. | Baja | `main.js`, `styles.css` |
| A14 | Navegación por anclas con header *sticky*: al saltar a `#resultados` el título queda debajo del header (sin `scroll-margin-top`). | Baja | `styles.css` |

### Gusto de diseño (A)
- **Originalidad: alta.** La identidad cómic/pop (amarillo `#FFCC00`, borde negro de 3 px, sombra dura 6 px, tramado *halftone*, Bangers + VT323) es coherente y no parece plantilla ni generada por IA. Es el activo visual del proyecto.
- **Tipografía:** buena elección temática. Bangers funciona en títulos; VT323 en burbujas aporta el tono "chat retro". Outfit para cuerpo es legible. Falta escala tipográfica consistente (hay `font-size` repetidos y contradictorios: `.results-main-title` se define dos veces).
- **Color:** la paleta es alegre, pero se usa al azar (avatares y texto con colores aleatorios), lo que rompe la jerarquía y el contraste.
- **Jerarquía:** el título de la categoría es enorme, pero el **ganador** (lo importante) no tiene estilo (A4). El gráfico compite con el ganador.
- **Consistencia:** el `footer::before` "FINISH!" y el logo inclinado son detalles con mucho carácter; las inclinaciones aleatorias de tarjetas son el punto más débil (en móvil se perciben como bug).

---

## B — VengaJustiLolisAlv Z (sitio promocional / lore)

### Como usuario normal
- El texto es divertidísimo y explica bien la historia: la Grieta, Ralexa, Noira, el Big Onii-chan, las facciones y Ciudad Nueva McOndo.
- Pero visualmente se ve "a medio hacer": hay un cuadro morado gigante que dice "¡Banner del Juego Aquí!" y todos los personajes son círculos con su nombre.
- No hay menú: para llegar a Personajes en el celular hay que hacer mucho scroll (la página mide más de 7.000 px en móvil).
- El título parpadea sin parar.

### Como QA experto

| # | Hallazgo | Severidad | Evidencia |
|---|---|---|---|
| B1 | **Imágenes placeholder en producción** (banner, gameplay, 8 avatares y la ciudad vienen de `via.placeholder.com`): parece un sitio sin terminar y depende de un servicio externo. | Alta | `b-lore-laptop.png` |
| B2 | **Tailwind por CDN (`cdn.tailwindcss.com`) en producción**: es el compilador JIT en el navegador (~300 KB de JS, bloquea el render y la propia consola de Tailwind advierte no usarlo en producción). | Alta | `index.html` l.8 |
| B3 | **Aspecto de plantilla genérica / "hecho por IA"**: fondo `gray-900`, títulos `purple-300`, tarjetas `gray-800 rounded-lg shadow-md` y emojis; es la combinación por defecto de Tailwind, sin identidad propia y sin relación visual con el sitio de premios. | Alta | capturas `b-lore-*` |
| B4 | **Contraste bajo** en textos secundarios: `text-gray-500` (#6B7280) sobre `gray-800` (#1F2937) ≈ 3,0:1 y `text-gray-400` sobre `gray-800` ≈ 5,0:1 en texto de 14 px; el título de "Fantasmones" en `gray-500` no pasa AA. | Media | Facciones, Locaciones |
| B5 | **Sin navegación ni landmarks**: no hay `<nav>`, ni `<main>`; el `<header>` se usa como hero. En móvil la página es una tira de 7.274 px sin índice. | Media | reporte Playwright `landmarks: header, footer` |
| B6 | `animate-pulse` infinito en el `<h1>` sin `prefers-reduced-motion` (molesto y problemático para personas con sensibilidad vestibular). | Media | `index.html` l.19 |
| B7 | **SEO/OG**: sin description, sin OG, sin favicon; el título dice "¡El Juego!" pero no hay juego descargable ni enlace. | Media | reporte Playwright |
| B8 | Textos alternativos presentes, pero describen placeholders ("Banner VengaJustiLolisAlv Z" muestra un rectángulo morado): `alt` correcto en forma, engañoso en fondo. | Baja | |
| B9 | Contenido duplicado y desincronizado con A (A repite la premisa con otras palabras). Dos sitios, dos estilos, sin enlaces entre sí. | Alta | ambos repos |
| B10 | Localismos de España ("móvil", "mola" en el tono) en un grupo latinoamericano; el README tiene placeholders sin completar (`TU_USUARIO`, captura pendiente). | Baja | `index.html`, `readme.md` |
| B11 | `style.css` propio casi vacío (141 B) que pisa a Tailwind (`body {background:#1a1a2e}`) → dos fuentes de verdad para el fondo. | Baja | `style.css` |

### Gusto de diseño (B)
- **Originalidad: baja.** El contenido es lo valioso; el diseño es la plantilla oscura estándar de Tailwind con morado/teal y colores por personaje elegidos de la paleta por defecto. Se percibe como generado.
- **Tipografía:** solo la sans del sistema; sin carácter, no transmite "caos cómico".
- **Jerarquía:** correcta (h1 → h2 por sección → h3 por tarjeta) pero monótona: todas las secciones pesan igual.
- **Consistencia:** interna sí, con A ninguna.

---

## Checklist priorizada de mejoras aplicables

Prioridad 1 = hacerlo ya (se aplicó en la fusión ✅), 2 = pronto, 3 = cuando haya tiempo. ⏳ = pendiente.

| Prio | Mejora | Origen | Estado |
|---|---|---|---|
| 1 | Unificar ambos sitios en una sola app con el estilo de A y el lore de B | B3, B9 | ✅ |
| 1 | Eliminar el scroll horizontal en móvil (inclinaciones solo ≥768 px, `overflow-x: clip`, `padding` de contenedor) | A1 | ✅ |
| 1 | Contraste AA: texto de burbujas siempre oscuro; rosa/azul "tinta" (`#BE185D`, `#0369A1`) para texto sobre claro | A3, B4 | ✅ |
| 1 | Gráficos accesibles en HTML/CSS (lista ordenada con nombre + votos) en vez de `<canvas>`; quitar Chart.js y chart.xkcd | A5, A6 | ✅ |
| 1 | Meta description, Open Graph/Twitter Card con imagen propia (`og-image.png`), favicon SVG, `lang="es-CO"`, títulos por ruta | A11, B7 | ✅ |
| 1 | Quitar Tailwind CDN y placeholders; avatares de personaje dibujados con CSS (inicial + color) | B1, B2 | ✅ |
| 1 | Estilar el bloque del ganador y darle prioridad visual | A4 | ✅ |
| 1 | Menú accesible: `aria-expanded`, `aria-controls`, `aria-current`, "Saltar al contenido", `:focus-visible` visible, objetivos táctiles ≥44 px | A9, B5 | ✅ |
| 1 | Respetar `prefers-reduced-motion` (sin pulse, sin rebotes, sin smooth scroll) y quitar rotaciones aleatorias | A13, B6 | ✅ |
| 1 | Una sola carga de fuentes (Bangers + Outfit + VT323) con `preconnect` y `display=swap`; quitar Roboto | A7 | ✅ |
| 1 | Reemplazar la imagen con token caducable de "Admin del Año" por un fondo propio | A2 | ✅ |
| 1 | Rutas reales (lazy) con `scroll-margin-top` en anclas | A14, B5 | ✅ |
| 2 | Dejar de *hotlinkear* (arte CSS por categoría) ✅; subir a `public/img/` arte propio para cabeceras y personajes ⏳ | A2, B1 | ✅ parcial |
| 2 | Votación anual y posts con backend (Firebase), un voto por persona/categoría/año | — | ✅ (falta crear el proyecto Firebase) |
| 2 | Pasar localismos de España a español latino en textos de lore (hecho: "móvil" → "celular"; revisar el resto con el grupo) | B10 | ✅ parcial |
| 3 | Prerenderizar (SSG) las páginas estáticas para mejorar SEO sin JS (por ahora: `index.html` por ruta para responder 200) | A10 | ⏳ |
| 3 | Auditoría con lector de pantalla real (NVDA/TalkBack) y Lighthouse en CI | — | ⏳ |
| 3 | Galería/banner real del juego de RPG Maker cuando exista | B1 | ⏳ |
