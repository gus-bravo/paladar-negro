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
    if (!form.checkValidity()) return;

    // Deshabilita el botón y muestra animación de "Enviando..."
    submitBtn.disabled = true;
    submitBtn.setAttribute("aria-disabled", "true");
    submitBtn.classList.add("animate-pulse");
    submitBtn.innerHTML =
      '<i data-lucide="send" class="w-4 h-4"></i> Enviando...';

    // Re-renderiza íconos si es necesario
    if (window.lucide && typeof lucide.createIcons === "function") {
      lucide.createIcons();
    }

    // Muestra mensaje de éxito con animación
    formMessage.textContent = "¡Formulario enviado con éxito!";
    formMessage.classList.remove("hidden", "fade-in");
    void formMessage.offsetWidth;
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

    // Enviar los datos a Make
    const formData = new FormData(form);
    const plainData = Object.fromEntries(formData.entries());

    fetch("https://hook.us2.make.com/bis2t6u3kpoh51nf2uzrjvfza9w7myk4", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(plainData),
    });

    // ⚠️ No usar preventDefault para que Netlify procese el form y redirija a /thanks.html
  });
});

// =====================
// Año automático en el footer
// =====================

document.getElementById("year").textContent = new Date().getFullYear();
