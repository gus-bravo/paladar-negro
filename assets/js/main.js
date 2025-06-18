// =====================
// Iconos de Lucide
// =====================

// Renderiza los íconos al cargar la página
lucide.createIcons();

// =====================
// Menú hamburguesa responsive
// =====================

const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
let menuOpen = false;

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("hidden");
  menuOpen = !menuOpen;

  // Cambia el ícono del botón entre 'menu' y 'x'
  menuBtn.innerHTML = `<i data-lucide="${menuOpen ? "x" : "menu"}"></i>`;
  lucide.createIcons(); // Re-renderiza los íconos
});

// =====================
// Manejo del formulario de contacto
// =====================

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contact-form");
  const submitBtn = form.querySelector('button[type="submit"]');
  const formMessage = document.getElementById("form-message");

  form.addEventListener("submit", (e) => {
    if (!form.checkValidity()) return; // Dejá que el navegador muestre errores si los hay

    // Deshabilita el botón y muestra animación de "Enviando..."
    submitBtn.disabled = true;
    submitBtn.setAttribute("aria-disabled", "true");
    submitBtn.classList.add("animate-pulse");
    submitBtn.innerHTML =
      '<i data-lucide="send" class="w-4 h-4"></i> Enviando...';

    // Re-renderiza íconos por si el ícono de "send" se agregó dinámicamente
    if (window.lucide && typeof lucide.createIcons === "function") {
      lucide.createIcons();
    }

    // Muestra mensaje de éxito con animación
    formMessage.textContent = "¡Formulario enviado con éxito!";
    formMessage.classList.remove("hidden", "fade-in");
    void formMessage.offsetWidth; // Reinicia la animación si ya estaba activa
    formMessage.classList.add("fade-in");

    // Enviar evento a Google Analytics
    if (window.gtag) {
      gtag("event", "form_submission", {
        event_category: "Formulario",
        event_label: "Contacto Paladar Negro",
      });
    }

    // Enviar evento a Plausible (si lo usás)
    if (window.plausible) {
      plausible("form_submission");
    }

    // No uso preventDefault porque quiero que Netlify lo procese
  });
});

// =====================
// Año automático en el footer
// =====================

document.getElementById("year").textContent = new Date().getFullYear();
