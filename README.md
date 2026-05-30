# Royal Barbería — Landing page

Landing page estática (HTML/CSS/JS, sin build) para **Royal Barbería** (Pueblo Caamaño, Pilar).
Estilo clásico: paleta negro + dorado + blanco, tipografías serif/display, reservas con Setmore.

## Datos del negocio (ya cargados)

- **Reservas:** https://royalbarberia.setmore.com
- **Instagram:** [@royal__barberia](https://www.instagram.com/royal__barberia/)
- **Dirección:** R. Caamaño 662 — Pueblo Caamaño, Pilar (B1631), Acceso Panamericana ramal Pilar Km 46,5
- **Teléfono / WhatsApp:** 011 2851-4625
- **Horarios:** todos los días de 10 a 21 h
- **Precios:** Corte $27.000/$23.000 · Corte y barba $31.000/$27.000 · Barba $23.000/$19.000 (transferencia / efectivo)

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

- **Reservas (Setmore):** el enlace real (`https://royalbarberia.setmore.com`) está en
  `script.js` como `SETMORE_URL`. Todos los botones "Reservar" lo usan. Para embeber el
  calendario completo, descomentá el bloque `book-embed` en `index.html`.
- **Precios:** sección `#servicios` en `index.html` (tabla `pricelist`). Cargados los
  valores reales (transferencia / efectivo) y el alias `ROYAL.BARBERIA`.
- **Nosotros, testimonios, dirección, horarios y redes:** editá los textos directamente en
  `index.html` (secciones `#nosotros`, `#testimonios`, `#ubicacion`).
- **Opiniones:** los testimonios son de muestra; el botón "Ver todas las reseñas en Google"
  lleva al perfil real. Si querés, reemplazá las frases por reseñas textuales de clientes.
- **Logo y fotos:** las imágenes de muestra usan Unsplash. Reemplazalas por fotos propias
  (del local / Instagram) poniéndolas en `assets/` y cambiando los `src`. Para el logo,
  sustituí el `<span class="brand-mark">R</span>` por `<img src="assets/logo.svg" ...>`.
- **SEO local:** los datos del negocio también están en el bloque `application/ld+json`
  del `<head>` (ficha `HairSalon`). Si cambia un dato, actualizalo también ahí.

## Probar localmente

```bash
python3 -m http.server 8080 --directory public
# abrir http://localhost:8080
```

## Deploy (Cloudflare)

Se deploya con `npx wrangler deploy` (lo corre Cloudflare automáticamente en cada push).
`wrangler.toml` fija el directorio de assets en `./public`, por lo que solo se publican
los archivos del sitio (nunca `.git`, `README.md` ni la config).
