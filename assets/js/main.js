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
  const formMessage = document.getElementById("form-message");
  const submitBtn = form.querySelector('button[type="submit"]');

  form.addEventListener("submit", (e) => {
    if (!form.checkValidity()) return; // Dejá que el navegador muestre errores

    e.preventDefault(); // Para que no recargue la página

    formMessage.textContent = "¡Mensaje enviado con éxito!";
    formMessage.classList.remove("hidden", "text-red-500");
    formMessage.classList.add("text-green-600");

    form.reset();

    const originalBtnText = submitBtn.innerHTML;
    submitBtn.disabled = true;
    submitBtn.classList.add("animate-pulse");
    submitBtn.innerHTML =
      '<i data-lucide="send" class="w-4 h-4"></i> Enviando...';

    setTimeout(() => {
      formMessage.classList.add("hidden");
      formMessage.textContent = "";
      submitBtn.disabled = false;
      submitBtn.classList.remove("animate-pulse");
      submitBtn.innerHTML = originalBtnText;
      lucide.createIcons(); // Para volver a mostrar el ícono
    }, 5000);
  });
});

// Año automático en el footer
document.getElementById("year").textContent = new Date().getFullYear();
