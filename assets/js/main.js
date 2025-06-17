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
  const formMessage = document.getElementById("form-message");

  form.addEventListener("submit", (e) => {
    if (!form.checkValidity()) return;

    // Deshabilitar botón y mostrar animación pulsante
    submitBtn.disabled = true;
    submitBtn.setAttribute("aria-disabled", "true");
    submitBtn.classList.add("animate-pulse");
    submitBtn.innerHTML =
      '<i data-lucide="send" class="w-4 h-4"></i> Enviando...';

    // Mostrar mensaje de éxito con animación fade-in
    formMessage.textContent = "¡Formulario enviado con éxito!";
    formMessage.classList.remove("hidden", "fade-in");

    // Forzar reflow para reiniciar animación si ya estaba activa
    void formMessage.offsetWidth;

    formMessage.classList.add("fade-in");

    // Netlify procesa el formulario, no usamos preventDefault()
  });
});

// Año automático en el footer
document.getElementById("year").textContent = new Date().getFullYear();
