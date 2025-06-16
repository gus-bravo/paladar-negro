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

// Año automático en el footer
document.getElementById("year").textContent = new Date().getFullYear();
