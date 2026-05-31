# Royal Barbería — Landing page

Landing page estática (HTML/CSS/JS, sin build) para **Royal Barbería**.
Dominio en producción: **https://royalbarberia.com**

Estilo clásico: paleta negro + dorado + blanco, tipografía Cinzel + Cormorant Garamond + Montserrat, reservas con Setmore (`royalbarberia.setmore.com`).

## Estructura

```
public/
  index.html    → toda la página (una sola vista con secciones)
  styles.css    → estilos y diseño responsive
  script.js     → menú móvil, animaciones y config de reservas
  assets/       → favicon e imágenes propias
  _headers      → cabeceras/cache
wrangler.toml   → config de Cloudflare (sirve solo ./public)
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
python3 -m http.server 8080 --directory public
# abrir http://localhost:8080
```

## Deploy (Cloudflare)

Se deploya con `npx wrangler deploy` (lo corre Cloudflare automáticamente en cada push).
`wrangler.toml` fija el directorio de assets en `./public`, por lo que solo se publican
los archivos del sitio (nunca `.git`, `README.md` ni la config).
