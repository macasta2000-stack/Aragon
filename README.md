# Barbería ROYAL — Landing page

Landing page estática (HTML/CSS/JS, sin build) para **Barbería ROYAL**.
Estilo clásico: paleta negro + dorado + blanco, tipografías serif/display, reservas con Setmore.

## Estructura

```
index.html      → toda la página (una sola vista con secciones)
styles.css      → estilos y diseño responsive
script.js       → menú móvil, animaciones y config de reservas
assets/         → favicon e imágenes propias
_headers        → cabeceras/cache para Cloudflare Pages
```

## Cómo editar el contenido

- **Reservas (Setmore):** abrí `script.js` y cambiá `SETMORE_URL` por el enlace de tu
  Booking Page (Setmore → Settings → Booking Page). Todos los botones "Reservar" lo usan.
  Para embeber el calendario completo, descomentá el bloque `book-embed` en `index.html`.
- **Precios:** sección `#servicios` en `index.html` (tabla `pricelist`). Ya cargados los
  valores reales (transferencia / efectivo) y el alias `ROYAL.BARBERIA`.
- **Equipo, testimonios, dirección, horarios y redes:** editá los textos directamente en
  `index.html` (secciones `#equipo`, `#testimonios`, `#ubicacion`).
- **Logo y fotos:** las imágenes de muestra usan Unsplash. Reemplazalas por fotos propias
  poniéndolas en `assets/` y cambiando los `src`. Para el logo, sustituí el `<span class="brand-mark">R</span>`
  por `<img src="assets/logo.svg" ...>`.
- **Teléfono/WhatsApp:** buscá `5491100000000` y reemplazá por el número real.

## Probar localmente

```bash
python3 -m http.server 8080
# abrir http://localhost:8080
```

## Deploy (Cloudflare Pages)

No requiere build. Comando de build vacío, directorio de salida = raíz del repo (`/`).
