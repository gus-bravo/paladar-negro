// Renderiza íconos de Lucide al cargar la página
lucide.createIcons();

// Manejo del botón menú hamburguesa
const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
let menuOpen = false;

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("hidden");
  menuOpen = !menuOpen;

  menuBtn.innerHTML = `<i data-lucide="${menuOpen ? "x" : "menu"}"></i>`;
  lucide.createIcons();
});

document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
  const submitBtn = form.querySelector('button[type="submit"]');

  form.addEventListener("submit", () => {
    // Si el formulario no es válido, el navegador muestra errores automáticamente
    if (!form.checkValidity()) return;

    // Deshabilitar el botón para evitar envíos múltiples
    submitBtn.disabled = true;
    submitBtn.classList.add("animate-pulse");
    submitBtn.innerHTML =
      '<i data-lucide="send" class="w-4 h-4"></i> Enviando...';

    // El formulario se envía normalmente, sin preventDefault()
    // Netlify lo procesa y maneja el mensaje o redirección.
  });
});

// Año automático en el footer
document.getElementById("year").textContent = new Date().getFullYear();
