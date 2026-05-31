/* ===================================================================
   Barbería ROYAL — script
   =================================================================== */

/* ---- CONFIG: enlace de reservas Setmore ----
   Reemplazá por la URL de tu Booking Page de Setmore.
   La encontrás en Setmore → Settings → Booking Page → tu enlace
   (ej: https://barberiaroyal.setmore.com).                           */
const SETMORE_URL = "https://royalbarberia.setmore.com";

document.addEventListener("DOMContentLoaded", () => {
  // Año dinámico en el footer
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Todos los botones "Reservar" abren Setmore en una pestaña nueva
  document.querySelectorAll("[data-book]").forEach((el) => {
    el.setAttribute("href", SETMORE_URL);
    el.setAttribute("target", "_blank");
    el.setAttribute("rel", "noopener");
  });

  // Header con fondo al hacer scroll
  const header = document.getElementById("header");
  const onScroll = () => header.classList.toggle("scrolled", window.scrollY > 40);
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  // Menú móvil
  const toggle = document.getElementById("navToggle");
  const nav = document.getElementById("nav");
  const closeNav = () => {
    nav.classList.remove("open");
    toggle.classList.remove("open");
    toggle.setAttribute("aria-expanded", "false");
  };
  toggle.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    toggle.classList.toggle("open", open);
    toggle.setAttribute("aria-expanded", String(open));
  });
  nav.querySelectorAll("a").forEach((a) => a.addEventListener("click", closeNav));

  // Animación de aparición al hacer scroll
  const revealEls = document.querySelectorAll(
    ".section-head, .service-card, .pricelist, .gallery-item, .team-card, .testimonial, .info-block, .book-card"
  );
  revealEls.forEach((el) => el.classList.add("reveal"));

  if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    revealEls.forEach((el) => io.observe(el));
  } else {
    revealEls.forEach((el) => el.classList.add("in"));
  }
});
